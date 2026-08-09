<?php
/**
 * Plugin Name: Country Meta → Taxonomy Sync
 * Description: Syncs a meta field "country" from multiple CPTs into the "country" taxonomy. Handles text, IDs, and ACF relationship values.
 * Author: Scalelist
 * Version: 1.0.0
 */

/**
 * ==== CONFIG ====
 * Add here the CPT slugs that carry the "country" meta.
 * Example uses common CPTs you mentioned; adjust as needed.
 */
const CSYNC_CPTS = ['public_company_usa', 'company', 'ceo'];

/**
 * Meta key that stores the country info.
 */
const CSYNC_META_KEY = 'country';

/**
 * Target taxonomy slug. Must exist or allow the plugin to register it.
 */
const CSYNC_TAX = 'country';

/**
 * If true, the plugin will register a minimal "country" taxonomy (in case it doesn't exist).
 * Set to false if you already register it elsewhere.
 */
const CSYNC_REGISTER_TAX_IF_MISSING = false;

/**
 * When assigning terms:
 *  - true  = replace existing country terms
 *  - false = append (keep existing and add new)
 */
const CSYNC_REPLACE_TERMS = true;

/**
 * Batch size for the admin tool.
 */
const CSYNC_BATCH_SIZE = 2000;

/** ===== END CONFIG ===== */


/** Register taxonomy if missing (safe, no-op if it already exists) */
add_action('init', function () {
    if (!taxonomy_exists(CSYNC_TAX) && CSYNC_REGISTER_TAX_IF_MISSING) {
        register_taxonomy(
            CSYNC_TAX,
            CSYNC_CPTS,
            [
                'label'        => 'Countries',
                'public'       => true,
                'hierarchical' => false,
                'show_ui'      => true,
                'show_in_rest' => true,
                'rewrite'      => ['slug' => 'country'],
            ]
        );
    }
}, 5);


/**
 * Normalize "country" value from meta into an array of strings (names) or integers (IDs of country CPT).
 * Supported inputs:
 *  - ACF Relationship/Posts: array of post IDs or arrays with ['ID'=>..]
 *  - Numeric ID: single post ID pointing to a "country" CPT
 *  - String: single name like "Argentina" or comma/pipe separated "Argentina, Brazil"
 */
function csync_get_country_values($post_id) {
    $raw = get_post_meta($post_id, CSYNC_META_KEY, true);

    if (empty($raw)) return [];

    // ACF relationship may be array of IDs or arrays/objects
    if (is_array($raw)) {
        $out = [];
        foreach ($raw as $item) {
            if (is_numeric($item)) {
                $out[] = (int) $item;
            } elseif (is_array($item) && isset($item['ID'])) {
                $out[] = (int) $item['ID'];
            } elseif (is_object($item) && isset($item->ID)) {
                $out[] = (int) $item->ID;
            } elseif (is_string($item) && $item !== '') {
                $out[] = trim($item);
            }
        }
        return array_values(array_filter($out));
    }

    // Single numeric ID
    if (is_numeric($raw)) {
        return [(int) $raw];
    }

    // String list (comma/pipe/semicolon)
    if (is_string($raw)) {
        $parts = preg_split('/[,|;]+/', $raw);
        $parts = array_map('trim', $parts);
        $parts = array_filter($parts, fn($v) => $v !== '');
        return array_values($parts);
    }

    return [];
}

/**
 * Ensure a taxonomy term exists for a given "country" reference.
 * $country_ref can be:
 *  - int (post ID of CPT "country" → use its post_title as term)
 *  - string (country name directly)
 * Returns WP_Term|WP_Error
 */
function csync_ensure_country_term($country_ref) {
    $name = null;

    if (is_int($country_ref)) {
        $p = get_post($country_ref);
        if ($p && $p->post_type === 'country') {
            $name = trim($p->post_title);
        } else {
            // If the ID does not point to a "country" CPT, try to use its title anyway
            if ($p) $name = trim($p->post_title);
        }
    } elseif (is_string($country_ref)) {
        $name = trim($country_ref);
    }

    if (!$name) {
        return new WP_Error('csync_no_name', 'Could not resolve country name.');
    }

    // Try to find existing term (by name)
    $term = get_term_by('name', $name, CSYNC_TAX);
    if ($term && !is_wp_error($term)) {
        return $term;
    }

    // Fallback: also try by slug (common if you already created terms)
    $slug = sanitize_title($name);
    $term_by_slug = get_term_by('slug', $slug, CSYNC_TAX);
    if ($term_by_slug && !is_wp_error($term_by_slug)) {
        return $term_by_slug;
    }

    // Create new term
    $created = wp_insert_term($name, CSYNC_TAX, ['slug' => $slug]);
    if (is_wp_error($created)) return $created;

    return get_term($created['term_id'], CSYNC_TAX);
}

/**
 * Assign terms to one post, returns array with result details.
 */
function csync_assign_countries_to_post($post_id) {
    $values = csync_get_country_values($post_id);
    if (!$values) {
        return ['post_id' => $post_id, 'assigned' => [], 'status' => 'no-meta'];
    }

    $term_ids = [];
    foreach ($values as $ref) {
        $term = csync_ensure_country_term($ref);
        if ($term instanceof WP_Term) {
            $term_ids[] = (int) $term->term_id;
        }
    }
    $term_ids = array_values(array_unique($term_ids));

    if (!$term_ids) {
        return ['post_id' => $post_id, 'assigned' => [], 'status' => 'no-terms'];
    }

    // Replace or Append
    if (CSYNC_REPLACE_TERMS) {
        wp_set_post_terms($post_id, $term_ids, CSYNC_TAX, false);
    } else {
        foreach ($term_ids as $tid) {
            wp_set_post_terms($post_id, [$tid], CSYNC_TAX, true);
        }
    }

    return ['post_id' => $post_id, 'assigned' => $term_ids, 'status' => 'ok'];
}

/**
 * Query posts for our CPT list in batches.
 */
function csync_get_posts_batch($paged = 1, $per_page = CSYNC_BATCH_SIZE) {
    $q = new WP_Query([
        'post_type'      => CSYNC_CPTS,
        'post_status'    => 'any',
        'posts_per_page' => $per_page,
        'paged'          => max(1, (int)$paged),
        'fields'         => 'ids',
        'no_found_rows'  => false,
    ]);
    return $q;
}

/**
 * Admin screen under Tools → Country Sync
 */
add_action('admin_menu', function () {
    add_management_page(
        'Country Sync',
        'Country Sync',
        'manage_options',
        'country-sync',
        'csync_render_tools_page'
    );
});

function csync_render_tools_page() {
    if (!current_user_can('manage_options')) return;

    $paged = isset($_POST['csync_paged']) ? max(1, (int)$_POST['csync_paged']) : 1;
    $ran   = [];
    $total = 0; $max = 0;

    if (isset($_POST['csync_run'])) {
        check_admin_referer('csync_run_nonce');

        $query = csync_get_posts_batch($paged);
        $total = (int) $query->found_posts;
        $max   = (int) $query->max_num_pages;

        foreach ($query->posts as $pid) {
            $ran[] = csync_assign_countries_to_post($pid);
        }

        // Next page hint
        if ($paged < $max) {
            $paged++;
        } else {
            $paged = 1; // reset
        }
    }

    ?>
    <div class="wrap">
        <h1>Country Sync</h1>
        <p><strong>Meta key:</strong> <code><?php echo esc_html(CSYNC_META_KEY); ?></code> → <strong>Taxonomy:</strong> <code><?php echo esc_html(CSYNC_TAX); ?></code></p>
        <p><strong>CPTs:</strong> <?php echo esc_html(implode(', ', CSYNC_CPTS)); ?></p>
        <p><strong>Mode:</strong> <?php echo CSYNC_REPLACE_TERMS ? 'Replace existing terms' : 'Append to existing terms'; ?></p>

        <form method="post">
            <?php wp_nonce_field('csync_run_nonce'); ?>
            <input type="hidden" name="csync_paged" value="<?php echo (int)$paged; ?>">
            <p>
                <button class="button button-primary" name="csync_run" value="1">Run batch (<?php echo (int)CSYNC_BATCH_SIZE; ?>)</button>
                <?php if ($total): ?>
                    <span style="margin-left:8px;">Processed page <?php echo (int)($_POST['csync_paged'] ?? 1); ?> of <?php echo (int)$max; ?> (total posts: <?php echo (int)$total; ?>)</span>
                <?php endif; ?>
            </p>
        </form>

        <?php if ($ran): ?>
            <h2>Last Run Results</h2>
            <table class="widefat striped">
                <thead><tr><th>Post ID</th><th>Status</th><th>Assigned Term IDs</th></tr></thead>
                <tbody>
                <?php foreach ($ran as $row): ?>
                    <tr>
                        <td><?php echo (int)$row['post_id']; ?></td>
                        <td><?php echo esc_html($row['status']); ?></td>
                        <td><?php echo esc_html(implode(', ', $row['assigned'])); ?></td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>

        <hr>
        <h2>WP-CLI</h2>
        <p>You can also run it via WP-CLI:</p>
        <pre>wp country-sync run --limit=1000 --offset=0 --dry-run=0</pre>
    </div>
    <?php
}

/**
 * WP-CLI command: wp country-sync run --limit=1000 --offset=0 --dry-run=1
 */
if (defined('WP_CLI') && WP_CLI) {
    WP_CLI::add_command('country-sync', function ($args, $assoc_args) {
        $limit   = isset($assoc_args['limit']) ? (int)$assoc_args['limit'] : 1000;
        $offset  = isset($assoc_args['offset']) ? (int)$assoc_args['offset'] : 0;
        $dry_run = !empty($assoc_args['dry-run']);

        $q = new WP_Query([
            'post_type'      => CSYNC_CPTS,
            'post_status'    => 'any',
            'posts_per_page' => $limit,
            'offset'         => $offset,
            'fields'         => 'ids',
            'no_found_rows'  => true,
        ]);

        $ok = $no_meta = $no_terms = 0;
        foreach ($q->posts as $pid) {
            $result = csync_assign_countries_to_post($pid);
            if ($dry_run) {
                WP_CLI::log(sprintf('[dry] post %d → %s (%s)',
                    $pid,
                    implode(',', $result['assigned']),
                    $result['status']
                ));
            } else {
                if ($result['status'] === 'ok')   $ok++;
                if ($result['status'] === 'no-meta')  $no_meta++;
                if ($result['status'] === 'no-terms') $no_terms++;
            }
        }

        if (!$dry_run) {
            WP_CLI::success(sprintf('Done. ok=%d no-meta=%d no-terms=%d', $ok, $no_meta, $no_terms));
        } else {
            WP_CLI::success('Dry run completed.');
        }
    });
}
