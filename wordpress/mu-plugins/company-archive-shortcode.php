<?php
/**
 * Plugin Name: Company Archive – Top Countries (AJAX + Loader, Title-only Search, Custom Cards + Pagination)
 * Description: [company_archive] con chips Top Countries, búsqueda en vivo (mín 3 letras). En archive: busca por título. En single-country: busca por ACF (company_name|name). Select “search-aware”, agrupado por país, botón “View all…”, loader, cache y paginación en single-country.
 * Version: 1.6.3
 * Author: Scalelist
 */

if (!defined('ABSPATH')) exit;

/* =======================
 * Defaults (auto CPT + Tax)
 * ======================= */
function ca_tc_defaults() {
    $current_post_type = '';
    $current_taxonomy  = '';

    // --- Detectar el CPT actual ---
    if (is_post_type_archive()) {
        $current_post_type = get_query_var('post_type');
    } elseif (is_tax() || is_category() || is_tag()) {
        $queried_object = get_queried_object();
        if (!empty($queried_object->taxonomy)) {
            $tax_obj = get_taxonomy($queried_object->taxonomy);
            if (!empty($tax_obj->object_type)) {
                $current_post_type = reset($tax_obj->object_type);
            }
        }
    } elseif (is_singular()) {
        $current_post_type = get_post_type();
    }

    // --- Detectar la taxonomía actual ---
    if (is_tax()) {
        $queried_object = get_queried_object();
        $current_taxonomy = $queried_object->taxonomy;
    } elseif ($current_post_type) {
        // Si no estamos en una taxonomía, buscar la primera asociada al CPT
        $taxonomies = get_object_taxonomies($current_post_type);
        $current_taxonomy = !empty($taxonomies) ? reset($taxonomies) : '';
    }

    return array(
        'cpts'               => $current_post_type ?: 'company',
        'tax'                => $current_taxonomy ?: 'country',
        'posts_per_country'  => 20,
        'top_countries'      => 10,
        'placeholder_svg'    => '',
        'enable_ajax'        => 1,
        'title_prefix'       => 'Top Lead Generation Companies in',
        'count_cache_secs'   => 600,
        'lock_country'       => '',
        'all_countries_url'  => '',
        'hide_chips_when_locked'  => 1,
        'hide_select_when_locked' => 1,
    );
}


/* =======================
 * Title-only search filter (AND entre palabras de 3+)
 * (se usa en listado general)
 * ======================= */
add_filter('posts_search', function ($search, $wp_query) {
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
}, 10, 2);

/* =======================
 * Single-country: búsqueda en ACF company_name | name (AND 3+)
 * ======================= */
add_filter('posts_join', function($join, $q){
    if (!$q->get('ca_company_name_s')) return $join;
    global $wpdb;
    $join .= " LEFT JOIN {$wpdb->postmeta} AS ca_meta_name
               ON ({$wpdb->posts}.ID = ca_meta_name.post_id
               AND (ca_meta_name.meta_key = 'company_name' OR ca_meta_name.meta_key = 'name'))";
    return $join;
}, 10, 2);

add_filter('posts_where', function($where, $q){
    $needle = (string) $q->get('ca_company_name_s');
    if ($needle === '') return $where;

    global $wpdb;
    $terms = preg_split('/\s+/', $needle, -1, PREG_SPLIT_NO_EMPTY);
    if (!$terms) return $where;

    $clauses = array();
    foreach ($terms as $t) {
        $t = trim($t);
        if ((function_exists('mb_strlen') ? mb_strlen($t) : strlen($t)) < 3) continue;
        $like = '%' . $wpdb->esc_like($t) . '%';
        $clauses[] = $wpdb->prepare("ca_meta_name.meta_value LIKE %s", $like);
    }
    if (!$clauses) return $where;

    $where .= ' AND (' . implode(' AND ', $clauses) . ') ';
    return $where;
}, 10, 2);

add_filter('posts_distinct', function($distinct, $q){
    if ($q->get('ca_company_name_s')) return 'DISTINCT';
    return $distinct;
}, 10, 2);

/* =======================
 * Nombre visible (ACF company_name | name | post_title)
 * ======================= */
function ca_tc_display_name($post_id) {
    $name = '';
    if (function_exists('get_field')) {
        $name = (string) get_field('company_name', $post_id);
        if ($name === '') $name = (string) get_field('name', $post_id);
    }
    if ($name === '') $name = get_the_title($post_id);
    return trim($name);
}

/* =======================
 * Inicial (primera letra) para avatar
 * ======================= */
function ca_tc_initial_letter($str) {
    $s = trim((string)$str);
    if ($s === '') return '#';
    $first = function_exists('mb_substr') ? mb_substr($s, 0, 1) : substr($s, 0, 1);
    return strtoupper($first);
}

/* =======================
 * Logo desde ACF (company_logo / logo_url) o null
 * ======================= */
function ca_tc_get_logo($post_id, $size = 'medium') {
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

/* =======================
 * Conteos por país (across CPTs) con cache (title-only aware)
 * ======================= */
function ca_tc_terms_counts($tax, $cpts, $search) {
    $terms = get_terms(array('taxonomy' => $tax, 'hide_empty' => false));
    if (is_wp_error($terms) || empty($terms)) return array();

    $key_base  = $tax . '|' . implode(',', $cpts) . '|' . trim((string)$search);
    $cache_key = 'ca_tc_counts_' . md5($key_base);
    $cached    = get_transient($cache_key);
    if ($cached !== false && is_array($cached)) return $cached;

    $with = array();
    foreach ($terms as $t) {
        $count = 0;
        foreach ($cpts as $pt) {
            $args = array(
                'post_type'        => $pt,
                'posts_per_page'   => 1,
                'fields'           => 'ids',
                'no_found_rows'    => false,
                'tax_query'        => array(array(
                    'taxonomy' => $tax,
                    'field'    => 'term_id',
                    'terms'    => array($t->term_id),
                )),
                'ca_title_only_s'  => true,
            );
            if ($search !== '') $args['s'] = $search;

            $q = new WP_Query($args);
            $count += (int) $q->found_posts;
            wp_reset_postdata();
        }
        $t->ca_count = $count;
        $with[] = $t;
    }

    $defs = ca_tc_defaults();
    set_transient($cache_key, $with, (int)$defs['count_cache_secs']);
    return $with;
}

/* =======================
 * Render: card
 * ======================= */
function ca_tc_render_card($pid) {
    $name = ca_tc_display_name($pid);
    $perma = get_permalink($pid);
    $logo  = ca_tc_get_logo($pid);

    ob_start(); ?>
    <a class="ca-card" href="<?php echo esc_url($perma); ?>">
        <div class="ca-card-media">
            <?php if ($logo && $logo['type'] === 'url'): ?>
                <img loading="lazy" src="<?php echo esc_url($logo['value']); ?>" alt="<?php echo esc_attr($name); ?>">
            <?php else: ?>
                <div class="ca-avatar" aria-hidden="true"><?php echo esc_html(ca_tc_initial_letter($name)); ?></div>
            <?php endif; ?>
        </div>
        <div class="ca-card-title"><?php echo esc_html($name); ?></div>
    </a>
    <?php
    return ob_get_clean();
}

/* =======================
 * Render: paginación
 * ======================= */
function ca_tc_render_pagination($term_link, $current, $total) {
    if ($total <= 1) return '';
    $base_link = trailingslashit($term_link) . 'page/%#%/';
    $html = paginate_links(array(
        'base'      => $base_link,
        'format'    => '%#%',
        'current'   => max(1, (int)$current),
        'total'     => max(1, (int)$total),
        'type'      => 'list',
        'prev_next' => true,
        'mid_size'  => 2,
        'end_size'  => 1,
    ));
    if (!$html) return '';
    return '<nav class="ca-pagination">'.$html.'</nav>';
}

/* =======================
 * Render: resultados agrupados
 * ======================= */
function ca_tc_render_results($tax, $cpts, $term_ids, $ppc, $search, $title_prefix) {
    ob_start();
    $any = false;

    // Single-country → paginación + búsqueda por ACF
    if (!empty($term_ids) && count($term_ids) === 1) {
        $t = get_term((int)$term_ids[0], $tax);
        if ($t && !is_wp_error($t)) {

            // Current page: soportar AJAX (paged en POST)
            $paged = get_query_var('paged') ? (int)get_query_var('paged') : 1;
            if ($paged < 1) $paged = 1;
            if (defined('DOING_AJAX') && DOING_AJAX && isset($_POST['paged'])) {
                $p = (int) $_POST['paged'];
                if ($p > 0) $paged = $p;
            }

            // Total
            $count_q = new WP_Query(array(
                'post_type'         => $cpts,
                'posts_per_page'    => 1,
                'no_found_rows'     => false,
                'fields'            => 'ids',
                'tax_query'         => array(array(
                    'taxonomy' => $tax,
                    'field'    => 'term_id',
                    'terms'    => array($t->term_id),
                )),
                'ca_company_name_s' => $search,
            ));
            $total_all = (int)$count_q->found_posts;
            wp_reset_postdata();

            $q = new WP_Query(array(
                'post_type'         => $cpts,
                'posts_per_page'    => (int)$ppc,
                'no_found_rows'     => false,
                'orderby'           => 'title',
                'order'             => 'ASC',
                'tax_query'         => array(array(
                    'taxonomy' => $tax,
                    'field'    => 'term_id',
                    'terms'    => array($t->term_id),
                )),
                'ca_company_name_s' => $search,
                'paged'             => $paged,
            ));

            if ($q->have_posts()) {
                $any = true;
                echo '<div class="ca-country-block">';
                echo '<div class="ca-heading">';
                echo '<div class="ca-subtitle">Showing ' . $total_all . ' companies in <strong>' . esc_html($t->name) . '</strong></div>';
                echo '</div>';                
                echo '<h2 class="ca-country-title">Top Lead Generation Companies in <span class="blue">' . esc_html($t->name) . '</span></h2>';
                echo '<div class="ca-grid">';
                foreach ($q->posts as $pid) {
                    echo ca_tc_render_card($pid);
                }
                echo '</div>';

                $term_link = get_term_link($t);
                if (!is_wp_error($term_link)) {
                    echo ca_tc_render_pagination($term_link, $paged, (int)$q->max_num_pages);
                }
                echo '</div>';
            }
            wp_reset_postdata();
        }

        if (!$any) echo '<div class="ca-empty">No companies match your filters.</div>';
        return ob_get_clean();
    }

    // Archive (múltiples países) — búsqueda por título
    if (empty($term_ids)) {
        echo '<div class="ca-empty">No companies found.</div>';
    } else {
        foreach ($term_ids as $tid) {
            $term = get_term((int)$tid, $tax);
            if (!$term || is_wp_error($term)) continue;

            $q = new WP_Query(array(
                'post_type'       => $cpts,
                'posts_per_page'  => (int)$ppc,
                'no_found_rows'   => false,
                'orderby'         => 'title',
                'order'           => 'ASC',
                'tax_query'       => array(array(
                    'taxonomy' => $tax,
                    'field'    => 'term_id',
                    'terms'    => array($term->term_id),
                )),
                's'               => $search,
                'ca_title_only_s' => true,
            ));

            if (!$q->have_posts()) { wp_reset_postdata(); continue; }

            $any = true;

            echo '<div class="ca-country-block">';
            echo '<div class="ca-country-title">Top Lead Generation Companies in <span class="blue">' . esc_html($term->name) . '</span></div>';

            echo '<div class="ca-grid">';
            foreach ($q->posts as $pid) {
                echo ca_tc_render_card($pid);
            }
            echo '</div>';

            $term_link = get_term_link($term);
            if (!is_wp_error($term_link)) {
                if ($ppc > 0 && $q->found_posts > $ppc) {
                echo '<div class="ca-viewall">';
                echo '<a class="ca-chip" href="' . esc_url($term_link) . '">View all companies in ' . esc_html($term->name) . '</a>';
                    $remaining = (int)$q->found_posts - (int)$ppc;
                    echo ' <span class="ca-legend">(+'.$remaining.' more)</span>';
                echo '</div>';
                }
            }

            echo '</div>';
            wp_reset_postdata();
        }

        if (!$any) echo '<div class="ca-empty">No companies match your filters.</div>';
    }

    return ob_get_clean();
}

/* =======================
 * Shortcode principal
 * ======================= */
add_shortcode('company_archive', function($atts){
    $d = ca_tc_defaults();
    $a = shortcode_atts($d, $atts, 'company_archive');

    $cpts = array_values(array_filter(array_map('trim', explode(',', (string)$a['cpts']))));
    $tax  = sanitize_key($a['tax']);
    $ppc  = (int)$a['posts_per_country'];
    $title_prefix = (string)$a['title_prefix'];

    // Filtros (fallback GET)
    $search = isset($_GET['ca_s']) ? sanitize_text_field(wp_unslash($_GET['ca_s'])) : '';
    $term   = isset($_GET['ca_country']) ? sanitize_text_field(wp_unslash($_GET['ca_country'])) : '';

    // ---- Resolver país bloqueado (si aplica)
    $locked_term_id = 0;
    $is_locked = false;

    $lock_attr = isset($a['lock_country']) ? trim((string)$a['lock_country']) : '';
    if ($lock_attr !== '') {
        if ($lock_attr === 'current' && is_tax($tax)) {
            $qo = get_queried_object();
            if ($qo && !is_wp_error($qo) && !empty($qo->term_id)) {
                $locked_term_id = (int)$qo->term_id;
            }
        } else {
            if (ctype_digit($lock_attr)) {
                $t = get_term((int)$lock_attr, $tax);
            } else {
                $t = get_term_by('slug', $lock_attr, $tax);
            }
            if ($t && !is_wp_error($t)) $locked_term_id = (int)$t->term_id;
        }
    }

    if ($locked_term_id > 0) {
        $is_locked = true;
        $term = (string)$locked_term_id;
    }

    // Chips: top globales (FIX: condición de activo correcta)
    $all_counts = ca_tc_terms_counts($tax, $cpts, '');
    usort($all_counts, function($a, $b){
        $da = isset($a->ca_count) ? (int)$a->ca_count : 0;
        $db = isset($b->ca_count) ? (int)$b->ca_count : 0;
        if ($da === $db) return strcasecmp($a->name, $b->name);
        return ($db - $da);
    });
    $top_terms = array_slice($all_counts, 0, (int)$a['top_countries']);
    $chips_html = '';
    foreach ($top_terms as $t) {
        $is_active = ((string)$term === (string)$t->term_id) || ((string)$term === (string)$t->slug); // FIX
        $chips_html .= '<button type="button" class="ca-chip'.($is_active ? ' is-active' : '').'" data-term="'.(int)$t->term_id.'">'.esc_html($t->name).'</button>';
    }

    // Select: search-aware
    $search_counts = ca_tc_terms_counts($tax, $cpts, $search);
    usort($search_counts, function($a, $b){ return strcasecmp($a->name, $b->name); });

    if ($is_locked && $locked_term_id) {
        $t = get_term($locked_term_id, $tax);
        if ($t && !is_wp_error($t)) {
            $options_html  = '<option value="'.esc_attr($locked_term_id).'" selected>'.esc_html($t->name).'</option>';
        } else {
            $options_html = '<option value="">All countries</option>';
        }
    } else {
        $options_html = '<option value="">All countries</option>';
        foreach ($search_counts as $t) {
            if ((int)$t->ca_count <= 0) continue;
            $sel = (((string)$term === (string)$t->term_id) || ((string)$term === (string)$t->slug)) ? ' selected' : '';
            $options_html .= '<option value="'.esc_attr($t->term_id).'"'.$sel.'>'.esc_html($t->name).' ('.(int)$t->ca_count.')</option>';
        }
    }

    // Países a renderizar
    if ($is_locked) {
        $term_ids = array($locked_term_id);
    } else {
        $term_ids = array();
        if ($term !== '') {
            foreach ($search_counts as $t) {
                if (((string)$term === (string)$t->term_id) || ((string)$term === (string)$t->slug)) { $term_ids = array((int)$t->term_id); break; }
            }
            if (empty($term_ids)) {
                $t = get_term_by(is_numeric($term) ? 'id' : 'slug', $term, $tax);
                if ($t && !is_wp_error($t)) $term_ids = array((int)$t->term_id);
            }
        } else {
            foreach ($search_counts as $t) { if ((int)$t->ca_count > 0) $term_ids[] = (int)$t->term_id; }
            usort($term_ids, function($a_id, $b_id){
                $a = get_term($a_id); $b = get_term($b_id);
                return strcasecmp($a ? $a->name : '', $b ? $b->name : '');
            });
        }
    }

    // Estilos (los tuyos)
    ob_start(); ?>
    <style>
      .ca-archive{--gap:16px}
      .ca-controls{display:grid;gap:var(--gap);margin-bottom:12px;padding:24px;box-shadow:0 3px 10px rgba(0,0,0,.07);border-radius:8px;}
      .ca-controls .row{display:grid;gap:8px;grid-template-columns:1fr}
      @media (min-width:768px){.ca-controls .row{grid-template-columns:1fr 340px;align-items:end}}
      .ca-input,.ca-select{font-size:14px!important;min-height:44px!important;padding:10px 12px!important;border:1px solid #e2e8f0!important;border-radius:8px!important;width:100%}

      .ca-chips{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
      .ca-chip{font-weight:400!important;color:#000!important;font-size:13px!important;padding:4px 10px 3px 10px!important;border:1px solid #cbd5e1!important;border-radius:50px!important;background:transparent!important;cursor:pointer;text-decoration:none;transition:background-color .15s,color .15s}
      .ca-chip:hover,.ca-chip.is-active{background:var( --e-global-color-primary )!important;color:#fff!important;border-color:var( --e-global-color-primary );}

      .ca-legend{color:#000;font-size:14px}
      .ca-subtitle{color:#000;font-size:14px}
      .ca-title{font-size:1.6rem;margin:0}.ca-title span{color:#2563eb}

      .ca-results{display:grid;gap:48px;padding-top:48px;}
      .ca-country-block{display:grid;gap:32px}
      .ca-country-title{
		    font-family: var(--e-global-typography-e846bed-font-family), Sans-serif;font-size: var(--e-global-typography-e846bed-font-size);font-weight: var(--e-global-typography-e846bed-font-weight);line-height: var(--e-global-typography-e846bed-line-height);margin-top: 0;margin-bottom: 8px;
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
      .ca-card-title{font-weight:500;line-height:1.2; color:#000; font-size:14px;}

      #ca-loader{display:none;place-items:center;min-height:80px;margin:10px 0}
      #ca-loader .spinner{width:36px;height:36px;border:3px solid #cbd5e1;border-top-color:#2563eb;border-radius:50%;animation:ca-spin .8s linear infinite}
      @keyframes ca-spin{to{transform:rotate(360deg)}}
      .ca-results.is-loading{opacity:.4;pointer-events:none;transition:opacity .2s}

      .ca-viewall{margin-top:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}

/* ===== Pagination (Company Archive) ===== */
.ca-pagination { 
  margin-top: 14px;
}
.ca-pagination .page-numbers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-pagination .page-numbers li > a.page-numbers,
.ca-pagination .page-numbers li > span.page-numbers {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 38px; height: 38px; padding: 4px 12px 2px 12px;
  border: 1px solid #cbd5e1; border-radius: 999px; font-size: 13px; line-height: 1;
  text-decoration: none; color: #0f172a; background: #fff;
  transition: background-color .15s, color .15s, border-color .15s, box-shadow .15s;
}
.ca-pagination .page-numbers li > a.page-numbers:hover {
  background: var(--e-global-color-primary); color: #fff; border-color: var(--e-global-color-primary);
}
.ca-pagination .page-numbers li > a.page-numbers:focus-visible {
  outline: 2px solid var(--e-global-color-primary); outline-offset: 2px;
}
.ca-pagination .page-numbers li > .page-numbers.current,
.ca-pagination .page-numbers li > .page-numbers[aria-current="page"] {
  background: var(--e-global-color-primary); color: #fff; border-color: var(--e-global-color-primary); cursor: default;
}
.ca-pagination .page-numbers li > .page-numbers.dots { border-color: transparent; background: transparent; color: #94a3b8; min-width: auto; padding: 0 6px; }
.ca-pagination .page-numbers li > .page-numbers.dots:before{display:none!important;}
.ca-pagination .page-numbers li > a.prev, .ca-pagination .page-numbers li > a.next { padding: 0 14px; font-weight: 500; }
@media (max-width: 480px) {
  .ca-pagination .page-numbers { gap: 6px; }
  .ca-pagination .page-numbers li > a.page-numbers, .ca-pagination .page-numbers li > span.page-numbers {
    min-width: 34px; height: 34px; padding: 0 10px; font-size: 12px;
  }
}
    </style>
    <?php $styles = ob_get_clean();

    // Resultados iniciales
    $results_html = ca_tc_render_results($tax, $cpts, $term_ids, $ppc, $search, $title_prefix);

    // HTML
    ob_start(); ?>
    <div class="ca-archive"
     data-enable-ajax="<?php echo (int)$a['enable_ajax']; ?>"
     data-tax="<?php echo esc_attr($tax); ?>"
     data-cpts="<?php echo esc_attr(implode(',', $cpts)); ?>"
     data-ppc="<?php echo (int)$ppc; ?>"
     data-title-prefix="<?php echo esc_attr($title_prefix); ?>"
     data-locked="<?php echo $is_locked ? '1' : '0'; ?>"
     data-locked-term="<?php echo (int)$locked_term_id; ?>"
     data-all-url="<?php echo esc_attr((string)$a['all_countries_url']); ?>">

      <?php echo $styles; ?>

      <form id="ca-controls" class="ca-controls" method="get">
        <div class="row">
          <div>
            <input id="ca_s" class="ca-input" type="search" name="ca_s" value="<?php echo esc_attr($search); ?>" placeholder="Search companies…">
          </div>
          <div <?php if ($is_locked && (int)$a['hide_select_when_locked']) echo 'style="display:none"'; ?>>
            <select id="ca_country" name="ca_country" class="ca-select">
              <?php echo $options_html; ?>
            </select>
          </div>
        </div>

        <div class="ca-chips" id="ca-chips" <?php if ($is_locked && (int)$a['hide_chips_when_locked']) echo 'style="display:none"'; ?>>
          <span class="ca-legend" style="margin-right:6px;">Top countries:</span>
          <?php echo $chips_html; ?>
        </div>
      </form>

      <div id="ca-loader" aria-hidden="true"><div class="spinner"></div></div>

      <?php if ($is_locked && !empty($a['all_countries_url'])): ?>
        <div class="ca-viewall"><a class="ca-chip" href="<?php echo esc_url($a['all_countries_url']); ?>">All countries</a></div>
      <?php endif; ?>

      <div class="ca-results" id="ca-results">
        <?php echo $results_html; ?>
      </div>
    </div>
    <?php

    // JS
    if ((int)$a['enable_ajax']) {
        add_action('wp_footer', function(){
            static $done = false; if ($done) return; $done = true;
            $nonce = wp_create_nonce('ca_tc_nonce');
            $ajax  = admin_url('admin-ajax.php'); ?>
<script>
(function(){
  var blocks = document.querySelectorAll('.ca-archive[data-enable-ajax="1"]');
  if(!blocks.length) return;

  blocks.forEach(function(root){
    var form   = root.querySelector('#ca-controls');
    var inputS = root.querySelector('#ca_s');
    var select = root.querySelector('#ca_country');
    var chips  = root.querySelector('#ca-chips');
    var results= root.querySelector('#ca-results');
    var loader = root.querySelector('#ca-loader');

    var tax  = root.getAttribute('data-tax') || 'country';
    var cpts = root.getAttribute('data-cpts') || '';
    var ppc  = parseInt(root.getAttribute('data-ppc') || '20', 10);

    var isLocked   = (root.getAttribute('data-locked') === '1');
    var lockedTerm = parseInt(root.getAttribute('data-locked-term') || '0', 10);

    function showL(){ if(loader) loader.style.display='grid'; if(results) results.classList.add('is-loading'); }
    function hideL(){ if(loader) loader.style.display='none'; if(results) results.classList.remove('is-loading'); }

    function fetchArchive(params, cb){
      showL();
      var data = new FormData();
      data.append('action','ca_tc_fetch');
      data.append('nonce','<?php echo esc_js($nonce); ?>');
      for (var k in params){ if(params.hasOwnProperty(k)) data.append(k, params[k]); }
      data.append('locked', isLocked ? '1' : '0');
      data.append('locked_term', String(lockedTerm || '0'));
      fetch('<?php echo esc_url($ajax); ?>', { method:'POST', body:data, credentials:'same-origin' })
        .then(function(r){ return r.json(); })
        .then(function(json){
          hideL();
          if (!json || !json.success) throw new Error('Request failed');
          cb(json.data);
        })
        .catch(function(e){
          hideL();
          console.error('Company Archive AJAX error:', e);
          if (form) form.submit();
        });
    }

    function updateUI(payload){
      if (payload.options_html !== undefined && select){
        select.innerHTML = payload.options_html;
      }
      if (payload.current_term !== undefined && select){
        // FIX: reflejar país actual ('' = All countries)
        select.value = String(payload.current_term);
      }
      if (payload.results_html !== undefined && results){
        results.innerHTML = payload.results_html;
      }
      if (payload.current_term !== undefined && chips){
        var buttons = chips.querySelectorAll('.ca-chip[data-term]');
        for (var i=0;i<buttons.length;i++){
          var id = buttons[i].getAttribute('data-term') || '';
          if (String(id) === String(payload.current_term)) buttons[i].classList.add('is-active');
          else buttons[i].classList.remove('is-active');
        }
      }
    }

    // Chips (no operan si está bloqueado)
    if (chips){
      chips.addEventListener('click', function(ev){
        if (isLocked) return;
        var btn = ev.target.closest('.ca-chip[data-term]');
        if (!btn) return;
        ev.preventDefault();

        var term = btn.getAttribute('data-term') || '';
        var isActive = btn.classList.contains('is-active');
        var target = isActive ? '' : term;

        fetchArchive({
          tax: tax, cpts: cpts, posts_per_country: ppc,
          ca_s: (inputS && inputS.value) ? inputS.value : '',
          ca_country: target,
          paged: 1  // reset de página al filtrar
        }, updateUI);
      });
    }

    // Submit por Enter
    if (form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        fetchArchive({
          tax: tax, cpts: cpts, posts_per_country: ppc,
          ca_s: (inputS && inputS.value) ? inputS.value : '',
          ca_country: (select && select.value) ? select.value : '',
          paged: 1 // reset de página
        }, updateUI);
      });
    }

    // Live search (min 3 chars; 0 = reset)
    if (inputS){
      var typingTimer, delay=400, minChars=3;
      inputS.addEventListener('input', function(){
        clearTimeout(typingTimer);
        var val = (inputS.value || '').trim();
        if (val.length < minChars && val.length !== 0) return;
        typingTimer = setTimeout(function(){
          fetchArchive({
            tax: tax, cpts: cpts, posts_per_country: ppc,
            ca_s: val,
            ca_country: (select && select.value) ? select.value : '',
            paged: 1 // reset de página
          }, updateUI);
        }, delay);
      });
    }

    // Cambio de select (deshabilitado si está bloqueado)
    if (select && !isLocked){
      select.addEventListener('change', function(){
        fetchArchive({
          tax: tax, cpts: cpts, posts_per_country: ppc,
          ca_s: (inputS && inputS.value) ? inputS.value : '',
          ca_country: select.value || '',
          paged: 1 // reset de página
        }, updateUI);
      });
    }
  });
})();
</script>
<?php
        });
    }

    return ob_get_clean();
});

/* =======================
 * AJAX
 * ======================= */
add_action('wp_ajax_ca_tc_fetch', 'ca_tc_fetch');
add_action('wp_ajax_nopriv_ca_tc_fetch', 'ca_tc_fetch');

function ca_tc_fetch() {
    if (!isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field($_POST['nonce']), 'ca_tc_nonce')) {
        wp_send_json_error(array('msg' => 'Invalid nonce'), 400);
    }

    $tax    = isset($_POST['tax']) ? sanitize_key($_POST['tax']) : 'country';
    $cpts_s = isset($_POST['cpts']) ? sanitize_text_field($_POST['cpts']) : '';
    $cpts   = array_values(array_filter(array_map('trim', explode(',', $cpts_s))));
    if (empty($cpts)) $cpts = array_values(array_filter(array_map('trim', explode(',', ca_tc_defaults()['cpts']))));

    $ppc    = isset($_POST['posts_per_country']) ? (int)$_POST['posts_per_country'] : (int)ca_tc_defaults()['posts_per_country'];
    $search = isset($_POST['ca_s']) ? sanitize_text_field(wp_unslash($_POST['ca_s'])) : '';
    $term   = isset($_POST['ca_country']) ? sanitize_text_field(wp_unslash($_POST['ca_country'])) : '';

    // Forzar país bloqueado si aplica
    $locked      = isset($_POST['locked']) ? (int) $_POST['locked'] : 0;
    $locked_term = isset($_POST['locked_term']) ? (int) $_POST['locked_term'] : 0;
    if ($locked && $locked_term > 0) {
        $term = (string) $locked_term;
    }

    // Select: search-aware
    $search_counts = ca_tc_terms_counts($tax, $cpts, $search);
    usort($search_counts, function($a, $b){ return strcasecmp($a->name, $b->name); });

    $options_html = '<option value="">All countries</option>';
    foreach ($search_counts as $t) {
        if ((int)$t->ca_count <= 0) continue;
        $sel = (((string)$term === (string)$t->term_id) || ((string)$term === (string)$t->slug)) ? ' selected' : '';
        $options_html .= '<option value="'.esc_attr($t->term_id).'"'.$sel.'>'.esc_html($t->name).' ('.(int)$t->ca_count.')</option>';
    }

    // Países a renderizar
    $term_ids = array();
    if ($term !== '') {
        foreach ($search_counts as $t) {
            if (((string)$term === (string)$t->term_id) || ((string)$term === (string)$t->slug)) { $term_ids = array((int)$t->term_id); break; }
        }
        if (empty($term_ids)) {
            $t = get_term_by(is_numeric($term) ? 'id' : 'slug', $term, $tax);
            if ($t && !is_wp_error($t)) $term_ids = array((int)$t->term_id);
        }
    } else {
        foreach ($search_counts as $t) { if ((int)$t->ca_count > 0) $term_ids[] = (int)$t->term_id; }
        usort($term_ids, function($a_id, $b_id){
            $a = get_term($a_id); $b = get_term($b_id);
            return strcasecmp($a ? $a->name : '', $b ? $b->name : '');
        });
    }

    $html = ca_tc_render_results($tax, $cpts, $term_ids, $ppc, $search, ca_tc_defaults()['title_prefix']);

    wp_send_json_success(array(
        'options_html' => $options_html,
        'results_html' => $html,
        'current_term' => $term, // '' = All countries
    ));
}
