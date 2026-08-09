<?php
/**
 * Plugin Name: Company Archive – Public View (MU, Safe Names)
 * Description: Shortcode [company_archive_public] — grilla plana, búsqueda por título (AJAX) + paginación por URL (/page/2/), 96 por página. Mismo diseño; sin colisiones de nombres.
 * Version: 1.0.5
 * Author: Scalelist
 */

if (!defined('ABSPATH')) exit;

/* =========================================================
 * Helpers propios (prefijo ca_cap_) — SIN colisionar nombres
 * ========================================================= */

/** Auto-detect CPT actual sin pisar ca_tc_defaults() */
function ca_cap_autodefaults() {
    $current_post_type = '';
    if (is_post_type_archive()) {
        $current_post_type = get_query_var('post_type');
    } elseif (is_tax() || is_category() || is_tag()) {
        $qo = get_queried_object();
        if (!empty($qo->taxonomy)) {
            $tx = get_taxonomy($qo->taxonomy);
            if (!empty($tx->object_type)) $current_post_type = reset($tx->object_type);
        }
    } elseif (is_singular()) {
        $current_post_type = get_post_type();
    }
    return array(
        'cpts' => $current_post_type ?: 'company',
    );
}

function ca_cap_display_name($post_id) {
    $name = '';
    if (function_exists('get_field')) {
        $name = (string) get_field('company_name', $post_id);
        if ($name === '') $name = (string) get_field('name', $post_id);
    }
    if ($name === '') $name = get_the_title($post_id);
    return trim($name);
}

function ca_cap_initial_letter($str) {
    $s = trim((string)$str);
    if ($s === '') return '#';
    $first = function_exists('mb_substr') ? mb_substr($s, 0, 1) : substr($s, 0, 1);
    return strtoupper($first);
}

function ca_cap_get_logo($post_id, $size = 'medium') {
    if (function_exists('get_field')) {
        foreach (array('company_logo', 'logo_url') as $field) {
            $img = get_field($field, $post_id);
            if (empty($img)) continue;

            if (is_array($img) && !empty($img['url'])) {
                return array('type' => 'url', 'value' => esc_url($img['url']));
            } elseif (is_numeric($img)) {
                $src = wp_get_attachment_image_url((int)$img, $size);
                if ($src) return array('type' => 'url', 'value' => esc_url($src));
            } elseif (is_string($img) && filter_var($img, FILTER_VALIDATE_URL)) {
                return array('type' => 'url', 'value' => esc_url($img));
            }
        }
    }
    return null;
}

/** Card interna (solo si no existe la original) */
function ca_cap_render_card_internal($pid) {
    $name  = ca_cap_display_name($pid);
    $perma = get_permalink($pid);
    $logo  = ca_cap_get_logo($pid);
    ob_start(); ?>
    <a class="ca-card" href="<?php echo esc_url($perma); ?>">
        <div class="ca-card-media">
            <?php if ($logo && $logo['type'] === 'url'): ?>
                <img loading="lazy" src="<?php echo esc_url($logo['value']); ?>" alt="<?php echo esc_attr($name); ?>">
            <?php else: ?>
                <div class="ca-avatar" aria-hidden="true"><?php echo esc_html(ca_cap_initial_letter($name)); ?></div>
            <?php endif; ?>
        </div>
        <div class="ca-card-title"><?php echo esc_html($name); ?></div>
    </a>
    <?php
    return ob_get_clean();
}

/** Render de la card: usa la original si existe, si no, la interna */
function ca_cap_render_card($pid) {
    if (function_exists('ca_tc_render_card')) {
        return ca_tc_render_card($pid);
    }
    return ca_cap_render_card_internal($pid);
}

/** Filtro title-only propio: no colisiona con otros */
function ca_cap_title_only_search($search, $wp_query){
    if (!$wp_query->get('ca_title_only_s')) return $search;
    global $wpdb;
    $s = (string) $wp_query->get('s');
    if ($s === '') return $search;

    $terms = preg_split('/\s+/', $s, -1, PREG_SPLIT_NO_EMPTY);
    if (!$terms) return $search;

    $clauses = array();
    foreach ($terms as $term) {
        $term = trim($term);
        if ((function_exists('mb_strlen') ? mb_strlen($term) : strlen($term)) < 3) continue;
        $like = '%' . $wpdb->esc_like($term) . '%';
        $clauses[] = $wpdb->prepare("{$wpdb->posts}.post_title LIKE %s", $like);
    }
    if (!$clauses) return $search;
    return ' AND (' . implode(' AND ', $clauses) . ') ';
}
add_filter('posts_search', 'ca_cap_title_only_search', 10, 2);

/** Paginación por URL conservando ca_s
 *  ➕ Acepta $base_override para corregir los links cuando se renderiza vía AJAX.
 */
function ca_cap_render_pagination($current, $total, $search, $base_override = ''){
    if ($total <= 1) return '';
    if (!empty($base_override)) {
        // $base_override viene como path del front (p.ej. "/companies/"), sin /page/N/
        $base = trailingslashit($base_override) . 'page/%#%/';
    } else {
        $big  = 999999999;
        $base = str_replace($big, '%#%', esc_url(get_pagenum_link($big)));
    }

    $html = paginate_links(array(
        'base'      => $base,
        'format'    => '%#%',
        'current'   => max(1, (int)$current),
        'total'     => max(1, (int)$total),
        'type'      => 'list',
        'prev_next' => true,
        'mid_size'  => 2,
        'end_size'  => 1,
        'add_args'  => ($search !== '' ? array('ca_s' => $search) : false),
    ));
    if (!$html) return '';
    return '<nav class="ca-pagination">'.$html.'</nav>';
}

/** Render de resultados (plano)
 *  ➕ Recibe $base_override (solo se usa en respuestas AJAX).
 */
function ca_cap_render_results($cpts, $ppp, $search, $paged, $base_override = ''){
    // Conteo
    $count_q = new WP_Query(array(
        'post_type'       => $cpts,
        'posts_per_page'  => 1,
        'no_found_rows'   => false,
        'fields'          => 'ids',
        's'               => (string)$search,
        'ca_title_only_s' => true,
    ));
    $total_all = (int)$count_q->found_posts;
    wp_reset_postdata();

    $paged = max(1, (int)$paged);

    // Query principal
    $q = new WP_Query(array(
        'post_type'       => $cpts,
        'posts_per_page'  => (int)$ppp,
        'no_found_rows'   => false,
        'orderby'         => 'title',
        'order'           => 'ASC',
        's'               => (string)$search,
        'ca_title_only_s' => true,
        'paged'           => $paged,
        'fields'          => 'ids',
    ));

    // Page X of Y (solo si hay > 1)
    $total_pages  = max(1, (int)$q->max_num_pages);
    $current_page = min($paged, $total_pages);

    ob_start();
    echo '<div class="ca-country-block">';
    echo '<div class="ca-heading">';
      echo '<div class="ca-subtitle">Showing ' . intval($total_all) . ' companies</div>';
      if ($total_pages > 1) {
        echo '<div class="ca-subtitle">Page ' . intval($current_page) . ' of ' . intval($total_pages) . '</div>';
      }
    echo '</div>';

    if ($q->have_posts()){
        echo '<div class="ca-grid">';
        foreach ($q->posts as $pid){
            echo ca_cap_render_card($pid);
        }
        echo '</div>';
        // 🧩 Usa base_override cuando hay AJAX; en render inicial queda vacío
        echo ca_cap_render_pagination($paged, (int)$q->max_num_pages, (string)$search, $base_override);
    } else {
        echo '<div class="ca-empty">No companies match your filters.</div>';
    }

    echo '</div>';
    wp_reset_postdata();
    return ob_get_clean();
}

/* =========================================================
 * Shortcode principal
 * ========================================================= */
function ca_cap_shortcode($atts){
    // Preferimos los defaults del plugin original si existen
    $defaults = function_exists('ca_tc_defaults') ? ca_tc_defaults() : ca_cap_autodefaults();

    $over = array(
        'cpts'           => $defaults['cpts'],
        'posts_per_page' => 96,
        'enable_ajax'    => 1, // búsqueda en vivo
    );
    $a = shortcode_atts($over, $atts, 'company_archive_public');

    $cpts = array_values(array_filter(array_map('trim', explode(',', (string)$a['cpts']))));
    if (empty($cpts)) $cpts = array('company');

    $ppp    = max(1, (int)$a['posts_per_page']);
    $search = isset($_GET['ca_s']) ? sanitize_text_field(wp_unslash($_GET['ca_s'])) : '';
    $paged  = get_query_var('paged') ? (int)get_query_var('paged') : 1;
    if ($paged < 1) $paged = 1;

    ob_start(); ?>
    <style>
      .ca-archive{--gap:16px}
      .ca-controls{display:grid;gap:var(--gap);margin-bottom:12px;padding:24px;box-shadow:0 3px 10px rgba(0,0,0,.07);border-radius:8px;}
      .ca-controls .row{display:grid;gap:8px;grid-template-columns:1fr}
      .ca-input{font-size:14px!important;min-height:44px!important;padding:10px 12px!important;border:1px solid #e2e8f0!important;border-radius:8px!important;width:100%}

      .ca-results{display:grid;gap:48px;padding-top:48px;}
      .ca-country-block{display:grid;gap:32px}
      .ca-heading{display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between;}
      .ca-country-title{
        font-family: var(--e-global-typography-e846bed-font-family), Sans-serif;
        font-size: var(--e-global-typography-e846bed-font-size);
        font-weight: var(--e-global-typography-e846bed-font-weight);
        line-height: var(--e-global-typography-e846bed-line-height);
        margin-top:0;margin-bottom:8px;
      }

      .ca-grid{display:grid;gap:10px;grid-template-columns:repeat(1,minmax(0,1fr))}
      @media (min-width:480px){.ca-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media (min-width:640px){.ca-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
      @media (min-width:960px){.ca-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}

      .ca-card{display:flex;gap:10px;align-items:center;border:1px solid #e5e7eb;border-radius:8px;padding:10px;background:#fff;text-decoration:none;color:inherit;transition:box-shadow .15s,transform .15s}
      .ca-card:hover{box-shadow:0 3px 10px rgba(0,0,0,.07);}
      .ca-card-media{flex:0 0 44px;height:44px;border-radius:8px;background:#f8fafc;display:grid;place-items:center;overflow:hidden}
      .ca-card-media img{width:100%;height:100%;object-fit:contain}
      .ca-avatar{width:100%;height:100%;display:grid;place-items:center;font-weight:700;color:#475569;background:#e2e8f0;border-radius:8px}
      .ca-card-title{font-weight:500;line-height:1.2;color:#000;font-size:14px;}

      #cap-loader{display:none;place-items:center;min-height:80px;margin:10px 0}
      #cap-loader .spinner{width:36px;height:36px;border:3px solid #cbd5e1;border-top-color:#2563eb;border-radius:50%;animation:ca-spin .8s linear infinite}
      @keyframes ca-spin{to{transform:rotate(360deg)}}
      .cap-results.is-loading{opacity:.4;pointer-events:none;transition:opacity .2s}

      .ca-pagination { margin-top: 14px; }
      .ca-pagination .page-numbers {
        display:flex;flex-wrap:wrap;justify-content:center;gap:8px;list-style:none;margin:0;padding:0;
      }
      .ca-pagination .page-numbers li > a.page-numbers,
      .ca-pagination .page-numbers li > span.page-numbers {
        display:inline-flex;align-items:center;justify-content:center;min-width:38px;height:38px;padding:4px 12px 2px;
        border:1px solid #cbd5e1;border-radius:999px;font-size:13px;line-height:1;text-decoration:none;color:#0f172a;background:#fff;
        transition:background-color .15s,color .15s,border-color .15s,box-shadow .15s;
      }
      .ca-pagination .page-numbers li > a.page-numbers:hover { background:var(--e-global-color-primary);color:#fff;border-color:var(--e-global-color-primary); }
      .ca-pagination .page-numbers li > a.page-numbers:focus-visible { outline:2px solid var(--e-global-color-primary);outline-offset:2px; }
      .ca-pagination .page-numbers li > .page-numbers.current,
      .ca-pagination .page-numbers li > .page-numbers[aria-current="page"] { background:var(--e-global-color-primary);color:#fff;border-color:var(--e-global-color-primary);cursor:default; }
      .ca-pagination .page-numbers li > .page-numbers.dots { border-color:transparent;background:transparent;color:#94a3b8;min-width:auto;padding:0 6px; }
      .ca-pagination .page-numbers li > .page-numbers.dots:before{display:none!important;}
      .ca-pagination .page-numbers li > a.prev, .ca-pagination .page-numbers li > a.next { padding:0 14px;font-weight:500; }
      @media (max-width:480px){
        .ca-pagination .page-numbers{gap:6px}
        .ca-pagination .page-numbers li > a.page-numbers, .ca-pagination .page-numbers li > span.page-numbers{min-width:34px;height:34px;padding:0 10px;font-size:12px}
      }
    </style>
    <?php $styles = ob_get_clean();

    $results_html = ca_cap_render_results($cpts, $ppp, $search, $paged);

    ob_start(); ?>
    <div class="ca-archive cap-archive"
         data-enable-ajax="<?php echo (int)$a['enable_ajax']; ?>"
         data-cpts="<?php echo esc_attr(implode(',', $cpts)); ?>"
         data-ppp="<?php echo (int)$ppp; ?>">
      <?php echo $styles; ?>

      <form id="cap-controls" class="ca-controls" method="get">
        <div class="row">
          <div>
            <input id="cap_s" class="ca-input" type="search" name="ca_s"
                   value="<?php echo esc_attr($search); ?>"
                   placeholder="Search companies…">
          </div>
        </div>
      </form>

      <div id="cap-loader" aria-hidden="true"><div class="spinner"></div></div>

      <div class="ca-results cap-results" id="cap-results">
        <?php echo $results_html; ?>
      </div>
    </div>
    <?php

    // Inyectar JS para búsqueda (solo frontend)
    if (!is_admin() && (int)$a['enable_ajax']) {
        add_action('wp_footer', 'ca_cap_footer_script', 100);
    }

    return ob_get_clean();
}
add_shortcode('company_archive_public', 'ca_cap_shortcode');

/* =========================================================
 * Footer JS (una sola vez)
 * ========================================================= */
function ca_cap_footer_script(){
    static $done = false; if ($done) return; $done = true;
    $nonce = wp_create_nonce('ca_cap_nonce');
    $ajax  = admin_url('admin-ajax.php'); ?>
<script>
(function(){
  var blocks = document.querySelectorAll('.cap-archive[data-enable-ajax="1"]');
  if(!blocks.length) return;

  blocks.forEach(function(root){
    var form   = root.querySelector('#cap-controls');
    var inputS = root.querySelector('#cap_s');
    var results= root.querySelector('#cap-results');
    var loader = root.querySelector('#cap-loader');

    var cpts = root.getAttribute('data-cpts') || '';
    var ppp  = parseInt(root.getAttribute('data-ppp') || '96', 10);

    // Path base real del front (quita /page/N/ si existe)
    var baseURL = (function(){
      var path = window.location.pathname || '/';
      return path.replace(/\/page\/\d+\/?$/,'/'); // sin /page/N/
    })();

    // Página actual según URL (/page/N/)
    function getCurrentPaged(){
      var m = (window.location.pathname || '').match(/\/page\/(\d+)\/?$/);
      var n = m ? parseInt(m[1],10) : 1;
      return (isNaN(n) || n < 1) ? 1 : n;
    }

    function showL(){ if(loader) loader.style.display='grid'; if(results) results.classList.add('is-loading'); }
    function hideL(){ if(loader) loader.style.display='none'; if(results) results.classList.remove('is-loading'); }

    function fetchPublic(params, cb){
      showL();
      var data = new FormData();
      data.append('action','ca_cap_fetch');
      data.append('nonce','<?php echo esc_js($nonce); ?>');
      data.append('base_url', baseURL); // base del front
      for (var k in params){ if(Object.prototype.hasOwnProperty.call(params,k)) data.append(k, params[k]); }
      fetch('<?php echo esc_url($ajax); ?>', { method:'POST', body:data, credentials:'same-origin' })
        .then(function(r){ return r.json(); })
        .then(function(json){
          hideL();
          if (!json || !json.success) throw new Error('Request failed');
          cb(json.data);
        })
        .catch(function(e){
          hideL();
          console.error('Company Archive Public AJAX error:', e);
          if (form) form.submit(); // fallback GET
        });
    }

    function updateUI(payload){
      if (payload && payload.results_html !== undefined && results){
        results.innerHTML = payload.results_html;
      }
    }

    // Submit: vacío → usar página actual; 3+ letras → page 1
    if (form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        var val = (inputS && inputS.value) ? inputS.value.trim() : '';
        if (val.length > 0 && val.length < 3) { if(inputS) inputS.focus(); return false; }
        var pagedToSend = (val.length === 0) ? String(getCurrentPaged()) : '1';
        fetchPublic({ cpts:cpts, posts_per_page:String(ppp), ca_s:val, paged:pagedToSend }, updateUI);
      });
    }

    // Live search: vacío → mantener página actual; 3+ letras → page 1
    if (inputS){
      var typingTimer, delay=400;
      inputS.addEventListener('input', function(){
        clearTimeout(typingTimer);
        var val = (inputS.value || '').trim();
        if (val.length > 0 && val.length < 3) return; // no dispares si 1–2 letras
        typingTimer = setTimeout(function(){
          var pagedToSend = (val.length === 0) ? String(getCurrentPaged()) : '1';
          fetchPublic({ cpts:cpts, posts_per_page:String(ppp), ca_s:val, paged:pagedToSend }, updateUI);
        }, delay);
      });
    }
  });
})();
</script>
<?php
}

/* =========================================================
 * AJAX (búsqueda en vivo) — respeta página actual cuando input vacío
 * ========================================================= */
add_action('wp_ajax_ca_cap_fetch', 'ca_cap_fetch');
add_action('wp_ajax_nopriv_ca_cap_fetch', 'ca_cap_fetch');

function ca_cap_fetch(){
    if (!isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field($_POST['nonce']), 'ca_cap_nonce')) {
        wp_send_json_error(array('msg' => 'Invalid nonce'), 400);
    }

    $cpts_s = isset($_POST['cpts']) ? sanitize_text_field($_POST['cpts']) : '';
    $cpts   = array_values(array_filter(array_map('trim', explode(',', $cpts_s))));
    if (empty($cpts)) {
        $defs = function_exists('ca_tc_defaults') ? ca_tc_defaults() : ca_cap_autodefaults();
        $cpts = array($defs['cpts'] ?: 'company');
    }

    $ppp      = isset($_POST['posts_per_page']) ? max(1,(int)$_POST['posts_per_page']) : 96;
    $search   = isset($_POST['ca_s']) ? sanitize_text_field(wp_unslash($_POST['ca_s'])) : '';

    // Respetar la página enviada por el front (fallback a 1)
    $paged_in = isset($_POST['paged']) ? (int) $_POST['paged'] : 1;
    $paged    = ($paged_in > 0) ? $paged_in : 1;

    // Base del front recibido del JS para construir /page/N/ correcto
    $base_url = isset($_POST['base_url']) ? wp_unslash($_POST['base_url']) : '';
    $base_url = is_string($base_url) ? $base_url : '';
    // Sanitiza rudimentariamente: solo path
    $base_url = preg_replace('#https?://[^/]+#','', $base_url);

    $html = ca_cap_render_results($cpts, $ppp, $search, $paged, $base_url);
    wp_send_json_success(array('results_html' => $html));
}
