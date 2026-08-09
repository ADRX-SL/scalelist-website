<?php
/**
 * Plugin Name: ACF URL Normalizer (MU)
 * Description: Fuerza https:// en campos ACF tipo URL y corrige al guardar posts ceo/company.
 * Author: DR
 * Version: 1.0.1
 */

if (!defined('ABSPATH')) exit;

/**
 * Normaliza un string a URL https segura:
 * - http://  -> https://
 * - //dominio -> https://dominio
 * - dominio.tld[/ruta] -> https://dominio.tld[/ruta]
 * - Deja intactos mailto:, tel:, ftp:, etc.
 * - Vacía javascript:, data:
 */
function dr_normalize_to_https($value) {
    if (!is_string($value)) return $value;
    $value = trim($value);
    if ($value === '') return $value;

    // Si trae esquema (algo:...), decidir por tipo
    $pos = strpos($value, ':');
    if ($pos !== false) {
        $scheme = strtolower(substr($value, 0, $pos));
        if ($scheme === 'javascript' || $scheme === 'data') {
            return '';
        }
        if ($scheme === 'https') {
            return esc_url_raw($value, ['http','https']);
        }
        if ($scheme === 'http') {
            $value = 'https' . substr($value, 4); // http -> https
            return esc_url_raw($value, ['http','https']);
        }
        // mailto:, tel:, ftp:, etc. -> no tocar
        return esc_url_raw($value);
    }

    // URLs sin esquema
    if (strpos($value, '//') === 0) {
        // //example.com -> https://example.com
        $value = 'https:' . $value;
    } else {
        // example.com o example.com/path -> prepend https://
        if (preg_match('/^[\w.-]+\.[a-z]{2,}([\/?#].*)?$/i', $value)) {
            $value = 'https://' . ltrim($value, '/');
        } else {
            return $value; // no parece URL
        }
    }

    return esc_url_raw($value, ['http','https']);
}

/**
 * 1) Filtro ACF: normaliza CUALQUIER campo de tipo url cuando se guarda vía ACF.
 */
add_action('plugins_loaded', function () {
    if (!function_exists('acf_add_local_field_group')) return; // ACF no activo

    add_filter('acf/update_value/type=url', function($value) {
        if (empty($value)) return $value;
        return dr_normalize_to_https($value);
    }, 10, 1);
});

/**
 * 2) Fallback: al guardar posts ceo/company, corrige solo campos ACF tipo url
 *    (cubre imports o guardados que no pasen por el filtro de ACF).
 */
function dr_fix_acf_urls_on_save($post_id, $post) {
    $pt = get_post_type($post_id);
    if (!in_array($pt, ['ceo','company'], true)) return;
    if (!function_exists('acf_get_field_objects')) return;

    // Evitar loops
    remove_action('save_post_ceo', 'dr_fix_acf_urls_on_save', 10);
    remove_action('save_post_company', 'dr_fix_acf_urls_on_save', 10);

    $fields = acf_get_field_objects($post_id);
    if ($fields && is_array($fields)) {
        foreach ($fields as $field) {
            if (($field['type'] ?? '') !== 'url') continue;
            $key  = $field['key']  ?? '';
            $name = $field['name'] ?? '';
            if (!$key || !$name) continue;

            $raw = get_field($name, $post_id, false); // sin formatear
            if (!is_string($raw) || $raw === '') continue;

            $new = dr_normalize_to_https($raw);
            if ($new !== $raw) {
                update_field($key, $new, $post_id);
            }
        }
    }

    // Restaurar hooks
    add_action('save_post_ceo', 'dr_fix_acf_urls_on_save', 10, 2);
    add_action('save_post_company', 'dr_fix_acf_urls_on_save', 10, 2);
}
add_action('save_post_ceo', 'dr_fix_acf_urls_on_save', 10, 2);
add_action('save_post_company', 'dr_fix_acf_urls_on_save', 10, 2);

// ===== Admin Tool: Tools -> Fix ACF URLs (funciona con o sin ACF) =====
if (is_admin()) {
    add_action('admin_menu', function () {
        add_management_page(
            'Fix ACF URLs',
            'Fix ACF URLs',
            'manage_options',
            'dr-fix-acf-urls',
            'dr_fix_acf_urls_admin_page'
        );
    });

    // Mapeo de campos URL por post type (según tus grupos ACF)
    function dr_get_url_fields_map() {
        return [
            'ceo' => [
                'facebook_company_url',
                'crunchbase_url',
                'linkedin_profile',
                'website',
                'linkedin_company_url',
            ],
            'company' => [
                'website',
                'linkedin',
                'facebook',
                'crunchbase',
                'clutch_url',
                'g2_url',
                'linkedin_profile',
            ],
        ];
    }

    // Normalizador (mismo que usa el plugin)
    if (!function_exists('dr_normalize_to_https')) {
        function dr_normalize_to_https($value) {
            if (!is_string($value)) return $value;
            $value = trim($value);
            if ($value === '') return $value;

            // Con esquema
            $pos = strpos($value, ':');
            if ($pos !== false) {
                $scheme = strtolower(substr($value, 0, $pos));
                if ($scheme === 'javascript' || $scheme === 'data') return '';
                if ($scheme === 'https') return esc_url_raw($value, ['http','https']);
                if ($scheme === 'http')  return esc_url_raw('https' . substr($value, 4), ['http','https']);
                // mailto, tel, ftp, etc -> dejar
                return esc_url_raw($value);
            }

            // Sin esquema
            if (strpos($value, '//') === 0) {
                $value = 'https:' . $value;
            } else {
                if (preg_match('/^[\w.-]+\.[a-z]{2,}([\/?#].*)?$/i', $value)) {
                    $value = 'https://' . ltrim($value, '/');
                } else {
                    return $value;
                }
            }
            return esc_url_raw($value, ['http','https']);
        }
    }

    function dr_fix_acf_urls_admin_page() {
        if (!current_user_can('manage_options')) return;

        $ran = false;
        $result = [];

        if (isset($_POST['dr_run_fix']) && check_admin_referer('dr_fix_acf_urls_run')) {
            $ran = true;
            $post_types = isset($_POST['dr_post_types']) && is_array($_POST['dr_post_types'])
                ? array_map('sanitize_text_field', $_POST['dr_post_types'])
                : ['ceo','company'];

            $result = dr_run_fix_urls_batch_without_acf($post_types);
        }

        $acf_detected = function_exists('acf_add_local_field_group'); // solo informativo
        ?>
        <div class="wrap">
            <h1>Fix ACF URLs (https)</h1>
            <p>Corrige todas las URLs (campos meta listados abajo) en los post types seleccionados, forzando <code>https://</code>. Este batch <strong>no depende</strong> de ACF.</p>

            <p><strong>Estado ACF:</strong> <?php echo $acf_detected ? 'Detectado' : 'No detectado'; ?></p>

            <form method="post">
                <?php wp_nonce_field('dr_fix_acf_urls_run'); ?>

                <h2>Post types a procesar</h2>
                <label><input type="checkbox" name="dr_post_types[]" value="ceo" checked> ceo</label>
                <label style="margin-left:12px;"><input type="checkbox" name="dr_post_types[]" value="company" checked> company</label>

                <h2 style="margin-top:18px;">Campos URL a corregir</h2>
                <pre><?php echo esc_html(print_r(dr_get_url_fields_map(), true)); ?></pre>

                <p><button class="button button-primary" name="dr_run_fix" value="1">Ejecutar corrección</button></p>
            </form>

            <?php if ($ran): ?>
                <h2>Resultado</h2>
                <ul>
                    <li><strong>Posts procesados:</strong> <?php echo intval($result['posts_processed'] ?? 0); ?></li>
                    <li><strong>URLs corregidas:</strong> <?php echo intval($result['urls_fixed'] ?? 0); ?></li>
                </ul>
                <?php if (!empty($result['log'])): ?>
                    <h3>Detalle</h3>
                    <pre style="max-height:320px;overflow:auto;"><?php echo esc_html(implode("\n", $result['log'])); ?></pre>
                <?php endif; ?>
            <?php endif; ?>
        </div>
        <?php
    }

    /**
     * Batch que NO usa funciones de ACF.
     * Recorre meta por nombre usando el mapa de campos URL.
     */
    function dr_run_fix_urls_batch_without_acf($post_types = ['ceo','company']) {
        $map = dr_get_url_fields_map();
        $post_types = array_values(array_intersect($post_types, array_keys($map)));
        if (empty($post_types)) {
            return ['posts_processed' => 0, 'urls_fixed' => 0, 'log' => ['Sin post types válidos.']];
        }

        $q = new WP_Query([
            'post_type'      => $post_types,
            'post_status'    => 'any',
            'posts_per_page' => -1,
            'fields'         => 'ids',
            'no_found_rows'  => true,
        ]);

        $posts_processed = 0;
        $urls_fixed = 0;
        $log = [];

        foreach ($q->posts as $post_id) {
            $posts_processed++;
            $pt = get_post_type($post_id);
            $url_fields = $map[$pt] ?? [];
            $changed = 0;

            foreach ($url_fields as $meta_key) {
                // ACF guarda el valor en el meta del "name"
                $raw = get_post_meta($post_id, $meta_key, true);
                if (!is_string($raw) || $raw === '') continue;

                $new = dr_normalize_to_https($raw);
                if ($new !== $raw) {
                    update_post_meta($post_id, $meta_key, $new);
                    $changed++;
                }
            }

            if ($changed) {
                $urls_fixed += $changed;
                $log[] = "Post {$post_id} ({$pt}): {$changed} URL(s) corregidas.";
            }
        }

        return [
            'posts_processed' => $posts_processed,
            'urls_fixed'      => $urls_fixed,
            'log'             => $log,
        ];
    }
}
