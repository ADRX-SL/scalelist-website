<?php
/**
 * Plugin Name: Remove slug for public_company_usa (safe)
 * Description: Quita /public_company_usa/ de los permalinks y resuelve site.com/{slug} sólo cuando corresponde al CPT, sin romper archivos/paginación.
 * Author: Scalelist
 * Version: 1.0.1
 */

// 1) Remove /public_company_usa/ from generated permalinks.
add_filter('post_type_link', function ($permalink, $post, $leavename, $sample) {
    if ($post->post_type === 'public_company_usa') {
        // Remove direct CPT base
        $permalink = str_replace('/public_company_usa/', '/', $permalink);
        // Remove possible front prefix (e.g., /blog/public_company_usa/)
        $permalink = preg_replace('#/(?:[^/]+)/public_company_usa/#', '/', $permalink);
        // Normalize double slashes
        $permalink = preg_replace('#(?<!:)/{2,}#', '/', $permalink);
    }
    return $permalink;
}, 10, 4);

/**
 * 2) Safe resolution of root slugs:
 *    Sólo interviene cuando la URL es un slug simple y NO hay variables de archivo/paginación/categoría/etc.
 *    Prioriza páginas y posts; si no hay coincidencia, intenta con el CPT 'public_company_usa'.
 */
add_filter('request', function ($vars) {
    // Si ya viene un post_type o es una query compleja, no tocar
    if (!empty($vars['post_type'])) {
        return $vars;
    }

    // Capturamos sólo slugs simples: name o pagename
    $slug = '';
    if (!empty($vars['name']) && empty($vars['pagename'])) {
        $slug = $vars['name'];
    } elseif (!empty($vars['pagename']) && strpos($vars['pagename'], '/') === false) {
        // casos donde WP usa pagename
        $slug = $vars['pagename'];
    } else {
        return $vars; // no es un slug raíz simple
    }

    // Si existen variables que implican archivo/fecha/paginación/taxonomías, no intervenir
    $block_keys = [
        'paged','page','feed','withcomments','cpage','attachment',
        'hour','minute','second','year','monthnum','day',
        'category_name','author_name','post_format','rest_route'
    ];
    foreach ($block_keys as $k) {
        if (!empty($vars[$k])) {
            return $vars;
        }
    }

    // Reservadas típicas que no deben mapear a un CPT
    $reserved = [
        'wp-json','feed','comments','category','tag','author','search',
        'attachment','page'
    ];
    if (in_array($slug, $reserved, true)) {
        return $vars;
    }

    // Si existe una página con ese path, priorizarla
    if (get_page_by_path($slug, OBJECT, ['page'])) {
        return $vars;
    }

    // Si existe un post estándar con ese slug, priorizarlo
    if (get_page_by_path($slug, OBJECT, ['post'])) {
        return $vars;
    }

    // Si el "Posts page" (archivo del blog) usa ese slug, no tocar
    $posts_page_id = (int) get_option('page_for_posts');
    if ($posts_page_id) {
        $posts_page = get_post($posts_page_id);
        if ($posts_page && $posts_page->post_name === $slug) {
            return $vars;
        }
    }

    // Finalmente, intentar resolver al CPT
    $cpt = get_page_by_path($slug, OBJECT, ['public_company_usa']);
    if ($cpt) {
        $vars['post_type'] = 'public_company_usa';
        $vars['name'] = $slug;
        unset($vars['pagename']); // evitar rutas ambiguas
    }

    return $vars;
}, 10);

/**
 * 3) Flush de reglas una sola vez tras activar/subir el plugin
 *    (si lo usás como MU-plugin no hay activation hook, por eso este guardado con flag).
 */
add_action('admin_init', function () {
    $flag = 'pcusa_remove_slug_rules_flushed_safe';
    if (!get_option($flag)) {
        flush_rewrite_rules(false);
        update_option($flag, time());
    }
});

/**
 * Notas:
 * - Quitamos la regla global '^([^/]+)/?$' porque rompía archivos/paginación.
 * - Este enfoque respeta páginas, posts y la página de blog, y sólo cae al CPT si hay match real.
 * - Si cambiás la estructura de enlaces permanentes, re-guardar en Ajustes > Enlaces permanentes.
 */


/**
 * 4) 301 redirect: /public_company_usa/{slug}/  =>  /{slug}/
 *    Evita duplicados en GSC.
 */
add_action('template_redirect', function () {
    if (is_admin() || wp_doing_ajax() || defined('REST_REQUEST')) {
        return;
    }

    $request_path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

    // Solo rutas tipo public_company_usa/{slug}
    if (!preg_match('#^public_company_usa/([^/]+)$#', $request_path, $m)) {
        return;
    }

    $slug = sanitize_title($m[1]);

    // Verificamos que exista el CPT
    $cpt = get_page_by_path($slug, OBJECT, ['public_company_usa']);
    if (!$cpt) {
        return;
    }

    $target = home_url('/' . $slug . '/');

    wp_redirect($target, 301);
    exit;
});
