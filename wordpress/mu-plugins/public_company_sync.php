<?php
/**
 * Plugin Name: Field → Taxonomy Sync (No Duplicates + Alias Normalize)
 * Description: Sincroniza metacampos ACF a taxonomías (revenue, industry, size) con alias y normalización de nombres. Evita duplicados por nombre o slug.
 * Author: Scalelist
 * Version: 1.1.0
 */

if (!defined('ABSPATH')) exit;

/* ==============================
 * CONFIGURACIÓN
 * ============================== */

/** CPTs fuente */
const FSYNC_CPTS = ['public_company_usa'];

/** Mapeos meta → taxonomía */
const FSYNC_MAP = [
    [
        'meta_key' => 'annual_revenue',
        'taxonomy' => 'revenue',
        'source_cpt' => 'revenue',
        'register_tax_if_missing' => false,
        'replace_terms' => true,
        'split_string' => false,
    ],
    [
        'meta_key' => 'industry',
        'taxonomy' => 'industry',
        'source_cpt' => 'industry',
        'register_tax_if_missing' => false,
        'replace_terms' => true,
        'split_string' => false,
    ],
    [
        'meta_key' => 'size',
        'taxonomy' => 'size',
        'source_cpt' => 'size',
        'register_tax_if_missing' => false,
        'replace_terms' => true,
        'split_string' => false,
    ],
];

/** Tamaño de lote */
const FSYNC_BATCH_SIZE = 2000;

/** Alias (clave normalizada → nombre canónico) */
const FSYNC_ALIASES = [
    // Ejemplos: podés agregar más libremente
    'u-s-a' => 'United States',
    'us' => 'United States',
    'united-states-of-america' => 'United States',

    'software-as-a-service' => 'SaaS',
    'saas' => 'SaaS',
    's-a-a-s' => 'SaaS',

    'fin-tech' => 'Fintech',
    'fintech' => 'Fintech',
    'fin tech' => 'Fintech',

    '500-1000' => '500–1,000',
    '1k-5k' => '1,000–5,000',
];

/* ==============================
 * UTILIDADES DE NORMALIZACIÓN
 * ============================== */

/** Genera una clave normalizada estable (minúsculas, sin acentos, solo a-z0-9 con guiones) */
function fsync_norm_key($s) {
    if (!is_string($s) || $s === '') return '';
    $s = remove_accents($s);
    $s = strtolower($s);
    $s = preg_replace('/[^a-z0-9]+/','-', $s);
    return trim($s, '-');
}

/** Aplica alias → devuelve nombre canónico si existe */
function fsync_normalize_label($name) {
    $key = fsync_norm_key($name);
    return FSYNC_ALIASES[$key] ?? trim($name);
}

/** Busca término existente por meta `_fsync_norm` o slug normalizado */
function fsync_find_term_by_norm($taxonomy, $norm_key) {
    if (!$norm_key) return false;
    $terms = get_terms([
        'taxonomy'   => $taxonomy,
        'hide_empty' => false,
        'number'     => 1,
        'meta_query' => [[
            'key'   => '_fsync_norm',
            'value' => $norm_key,
        ]],
    ]);
    if (!is_wp_error($terms) && !empty($terms)) return $terms[0];
    $by_slug = get_term_by('slug', $norm_key, $taxonomy);
    return ($by_slug && !is_wp_error($by_slug)) ? $by_slug : false;
}

/* ==============================
 * CORE SYNC
 * ============================== */

add_action('init', function () {
    foreach (FSYNC_MAP as $m) {
        if (!taxonomy_exists($m['taxonomy']) && !empty($m['register_tax_if_missing'])) {
            register_taxonomy(
                $m['taxonomy'],
                FSYNC_CPTS,
                [
                    'label'        => ucfirst($m['taxonomy']),
                    'public'       => true,
                    'hierarchical' => false,
                    'show_ui'      => true,
                    'show_in_rest' => true,
                    'rewrite'      => ['slug' => $m['taxonomy']],
                ]
            );
        }
    }
}, 5);

/**
 * Igual que fsync_get_values pero respeta $map['split_string'] para strings.
 */
function fsync_get_values_for_map($post_id, $map) {
    $meta_key = $map['meta_key'];
    $raw = get_post_meta($post_id, $meta_key, true);
    if (empty($raw)) return [];

    // Arrays (ACF Relationship / Post Object): múltiples valores
    if (is_array($raw)) {
        $out = [];
        foreach ($raw as $item) {
            if (is_numeric($item)) $out[] = (int)$item;
            elseif (is_array($item) && isset($item['ID'])) $out[] = (int)$item['ID'];
            elseif (is_object($item) && isset($item->ID)) $out[] = (int)$item->ID;
            elseif (is_string($item) && $item !== '') $out[] = trim($item);
        }
        return array_values(array_filter($out, fn($v)=>$v!=='' && $v!==null));
    }

    // ID numérico simple
    if (is_numeric($raw)) return [(int)$raw];

    // String
    if (is_string($raw)) {
        $raw = trim($raw);
        if ($raw === '') return [];
        $split = array_key_exists('split_string', $map) ? (bool)$map['split_string'] : true;
        if ($split) {
            $parts = preg_split('/[,|;]+/', $raw);
            $parts = array_map('trim', $parts);
            return array_values(array_filter($parts, fn($v)=>$v!==''));
        }
        // NO dividir: devolver el string entero como un único valor
        return [$raw];
    }

    return [];
}

function fsync_ensure_term($ref, $taxonomy, $source_cpt = null) {
    $name = null;
    if (is_int($ref)) {
        $p = get_post($ref);
        if ($p) $name = trim($p->post_title);
    } elseif (is_string($ref)) {
        $name = trim($ref);
    }
    if (!$name) return new WP_Error('fsync_no_name', 'No se pudo resolver nombre.');

    $name = fsync_normalize_label($name);
    $norm = fsync_norm_key($name);

    if ($found = fsync_find_term_by_norm($taxonomy, $norm)) {
        if (!get_term_meta($found->term_id, '_fsync_norm', true)) {
            add_term_meta($found->term_id, '_fsync_norm', $norm, true);
        }
        return $found;
    }

    $by_name = get_term_by('name', $name, $taxonomy);
    if ($by_name && !is_wp_error($by_name)) {
        if (!get_term_meta($by_name->term_id, '_fsync_norm', true)) {
            add_term_meta($by_name->term_id, '_fsync_norm', $norm, true);
        }
        return $by_name;
    }

    $by_slug = get_term_by('slug', sanitize_title($name), $taxonomy);
    if ($by_slug && !is_wp_error($by_slug)) {
        if (!get_term_meta($by_slug->term_id, '_fsync_norm', true)) {
            add_term_meta($by_slug->term_id, '_fsync_norm', $norm, true);
        }
        return $by_slug;
    }

    $created = wp_insert_term($name, $taxonomy, ['slug' => $norm]);
    if (is_wp_error($created)) return $created;
    $term = get_term($created['term_id'], $taxonomy);
    if ($term && !is_wp_error($term)) {
        add_term_meta($term->term_id, '_fsync_norm', $norm, true);
    }
    return $term;
}

function fsync_assign_for_map($post_id, $map) {
    // Usa la versión que respeta split_string
    $values = fsync_get_values_for_map($post_id, $map);
    if (!$values) return ['post_id' => $post_id, 'taxonomy' => $map['taxonomy'], 'status' => 'no-meta'];

    $term_ids = [];
    foreach ($values as $ref) {
        $term = fsync_ensure_term($ref, $map['taxonomy'], $map['source_cpt'] ?? null);
        if ($term instanceof WP_Term) $term_ids[] = (int)$term->term_id;
    }

    $term_ids = array_unique($term_ids);
    if (!$term_ids) return ['post_id' => $post_id, 'taxonomy' => $map['taxonomy'], 'status' => 'no-terms'];

    if (!empty($map['replace_terms'])) {
        wp_set_post_terms($post_id, $term_ids, $map['taxonomy'], false);
    } else {
        foreach ($term_ids as $tid) wp_set_post_terms($post_id, [$tid], $map['taxonomy'], true);
    }

    return ['post_id' => $post_id, 'taxonomy' => $map['taxonomy'], 'assigned' => $term_ids, 'status' => 'ok'];
}

function fsync_assign_all_for_post($post_id) {
    $out = [];
    foreach (FSYNC_MAP as $map) $out[] = fsync_assign_for_map($post_id, $map);
    return $out;
}

function fsync_get_posts_batch($paged = 1, $per_page = FSYNC_BATCH_SIZE) {
    return new WP_Query([
        'post_type'      => FSYNC_CPTS,
        'post_status'    => 'any',
        'posts_per_page' => $per_page,
        'paged'          => max(1, (int)$paged),
        'fields'         => 'ids',
    ]);
}

/* ==============================
 * ADMIN PANTALLA
 * ============================== */
add_action('admin_menu', function () {
    add_management_page('Field → Tax Sync', 'Field → Tax Sync', 'manage_options', 'field-tax-sync', 'fsync_render_tools_page');
});

function fsync_render_tools_page() {
    if (!current_user_can('manage_options')) return;
    $paged = isset($_POST['fsync_paged']) ? max(1, (int)$_POST['fsync_paged']) : 1;
    $ran = []; $total = 0; $max = 0;
    $map_key = $_POST['fsync_map'] ?? 'all';

    if (isset($_POST['fsync_run'])) {
        check_admin_referer('fsync_run_nonce');
        $query = fsync_get_posts_batch($paged);
        $total = $query->found_posts; $max = $query->max_num_pages;

        foreach ($query->posts as $pid) {
            if ($map_key === 'all') {
                foreach (FSYNC_MAP as $m) $ran[] = fsync_assign_for_map($pid, $m);
            } else {
                foreach (FSYNC_MAP as $m) if ($m['taxonomy'] === $map_key) $ran[] = fsync_assign_for_map($pid, $m);
            }
        }
        $paged = ($paged < $max) ? $paged + 1 : 1;
    }

    ?>
    <div class="wrap">
        <h1>Field → Tax Sync</h1>
        <p><strong>CPTs:</strong> <?php echo esc_html(implode(', ', FSYNC_CPTS)); ?></p>

        <form method="post">
            <?php wp_nonce_field('fsync_run_nonce'); ?>
            <input type="hidden" name="fsync_paged" value="<?php echo (int)$paged; ?>">
            <select name="fsync_map">
                <option value="all">Todos</option>
                <?php foreach (FSYNC_MAP as $m): ?>
                    <option value="<?php echo esc_attr($m['taxonomy']); ?>" <?php selected($map_key,$m['taxonomy']); ?>>
                        <?php echo esc_html($m['meta_key'].' → '.$m['taxonomy']); ?>
                    </option>
                <?php endforeach; ?>
            </select>
            <button class="button button-primary" name="fsync_run" value="1">
                Run batch (<?php echo (int)FSYNC_BATCH_SIZE; ?>)
            </button>
        </form>

        <?php if ($ran): ?>
            <h2>Resultados</h2>
            <table class="widefat striped">
                <thead><tr><th>Post ID</th><th>Taxonomía</th><th>Status</th><th>Term IDs</th></tr></thead>
                <tbody>
                <?php foreach ($ran as $r): ?>
                    <tr>
                        <td><?php echo (int)$r['post_id']; ?></td>
                        <td><?php echo esc_html($r['taxonomy']); ?></td>
                        <td><?php echo esc_html($r['status']); ?></td>
                        <td><?php echo isset($r['assigned']) ? esc_html(implode(', ', $r['assigned'])) : ''; ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>

        <hr>
        <h2>WP-CLI</h2>
        <pre>wp field-sync run --map=all --limit=1000 --offset=0 --dry-run=1</pre>
    </div>
    <?php
}

/* ==============================
 * WP-CLI
 * ============================== */
if (defined('WP_CLI') && WP_CLI) {
    WP_CLI::add_command('field-sync', function ($args, $assoc) {
        $limit = (int)($assoc['limit'] ?? 1000);
        $offset = (int)($assoc['offset'] ?? 0);
        $dry = !empty($assoc['dry-run']);
        $map = $assoc['map'] ?? 'all';

        $q = new WP_Query([
            'post_type' => FSYNC_CPTS,
            'post_status' => 'any',
            'posts_per_page' => $limit,
            'offset' => $offset,
            'fields' => 'ids',
        ]);

        foreach ($q->posts as $pid) {
            $runs = ($map === 'all')
                ? fsync_assign_all_for_post($pid)
                : array_filter(array_map(fn($m)=>$m['taxonomy']===$map?fsync_assign_for_map($pid,$m):null, FSYNC_MAP));

            foreach ($runs as $r) {
                if ($dry) {
                    WP_CLI::log(sprintf('[dry] post %d tax=%s %s (%s)', $pid, $r['taxonomy'], implode(',', $r['assigned'] ?? []), $r['status']));
                } else {
                    WP_CLI::log(sprintf('post %d tax=%s %s (%s)', $pid, $r['taxonomy'], implode(',', $r['assigned'] ?? []), $r['status']));
                }
            }
        }
        WP_CLI::success('Sync completo.');
    });
}
