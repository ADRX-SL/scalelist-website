<?php

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'hello-elementor','hello-elementor','hello-elementor-theme-style' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

// END ENQUEUE PARENT ACTION

// Remove Hello Theme meta description
add_action( 'after_setup_theme', function() {
    remove_action( 'wp_head', 'hello_elementor_add_description_meta', 1 );
});

//INSTALL NECESSARY SCRIPTS
function add_theme_script() {
 //wp_enqueue_script("jquery-script", get_stylesheet_directory_uri() . '/includes/jquery-3.4.1.min.js', "all");
 wp_enqueue_script("owl-script", get_stylesheet_directory_uri() . '/includes/vendor/owl-carousel/js/owl.carousel.min.js', "all");
 wp_enqueue_script("app-script", get_stylesheet_directory_uri() . '/js/app.js', "all");
}
//add_action( 'wp_enqueue_scripts', 'add_theme_script' );
add_action( 'wp_footer', 'add_theme_script' );


//INSTALL NECESSARY STYLES
function add_theme_style() {
	wp_enqueue_style("app-css", get_stylesheet_directory_uri() . '/css/main.css', "all");
	wp_enqueue_style("owl-css", get_stylesheet_directory_uri() . '/includes/vendor/owl-carousel/css/owl.carousel.min.css', "all");
}
add_action("wp_enqueue_scripts", "add_theme_style");

//REMOVE QUERY STRING FROM STATIC RESOURCES
// function remove_cssjs_ver( $src ) {
//  if( strpos( $src, '?ver=' ) )
//  $src = remove_query_arg( 'ver', $src );
//  return $src;
// }
// add_filter( 'style_loader_src', 'remove_cssjs_ver', 10, 2 );
// add_filter( 'script_loader_src', 'remove_cssjs_ver', 10, 2 );

//CHANGE THE PATH URL OF ADMIN LOGIN
add_filter( 'login_headerurl', 'custom_loginlogo_url' );
function custom_loginlogo_url($url) {
	return 'https://scalelist.com/';
}

//CHANGE THE LOGO OF ADMIN LOGO
function logo() { 
?> 
	<style type="text/css"> 
		.login #login h1 a {
		 background-image: url('../wp-content/uploads/2023/10/scalist-logo-svg.svg');
		 width: 100%;
		 background-size: contain;
		 height: 100px;
		}
         
	</style>
<?php 
} add_action( 'login_enqueue_scripts', 'logo' );

// function add_file_types_to_uploads($file_types){
// 	$new_filetypes = array();
// 	$new_filetypes['svg'] = 'image/svg+xml';
// 	$file_types = array_merge($file_types, $new_filetypes );
// 	return $file_types;
// }
// add_filter('upload_mimes', 'add_file_types_to_uploads');

// include ('custom-shortcode.php');

function custom_post_type_sort_by_date($query) {
    if (is_admin() && $query->is_main_query() && $query->get('post_type') === 'testimonial') {
        $query->set('orderby', 'date'); 
        $query->set('order', 'DESC');
    }
}
add_action('pre_get_posts', 'custom_post_type_sort_by_date');


function enqueue_init_session_script() {
    wp_enqueue_script('init-session', get_stylesheet_directory_uri() . '/js/init-session.js', array('jquery'), null, true);
    
    // Localize script to pass nonce
    wp_localize_script('init-session', 'wpApiSettings', array(
        'nonce' => wp_create_nonce('wp_rest')
    ));
}
// add_action('wp_enqueue_scripts', 'enqueue_init_session_script');

add_action( 'elementor/query/testimonials_slider_2', function( $query ) {
        $query->set( 'tax_query', [
            [
                'taxonomy' => 'listed', // o tu custom taxonomy
                'field'    => 'term_id',
                'terms'    => 718,
            ],
        ]);
});

add_action( 'elementor/query/testimonials_grid_3', function( $query ) {
        $query->set( 'tax_query', [
            [
                'taxonomy' => 'listed', // o tu custom taxonomy
                'field'    => 'term_id',
                'terms'    => 717,
            ],
        ]);
});

add_action( 'elementor/query/testimonials_grid_2', function( $query ) {
        $query->set( 'tax_query', [
            [
                'taxonomy' => 'listed', // o tu custom taxonomy
                'field'    => 'term_id',
                'terms'    => 39,
            ],
        ]);
});

add_action( 'elementor/query/testimonials_grid', function( $query ) {
        $query->set( 'tax_query', [
            [
                'taxonomy' => 'listed', // o tu custom taxonomy
                'field'    => 'term_id',
                'terms'    => 31,
            ],
        ]);
});

add_action( 'elementor/query/testimonials_slider', function( $query ) {
        $query->set( 'tax_query', [
            [
                'taxonomy' => 'listed', // o tu custom taxonomy
                'field'    => 'term_id',
                'terms'    => 32,
            ],
        ]);
});

function spark_animation_shortcode() {
    ob_start();
    ?>
    <div id="root"></div>
    <?php
    return ob_get_clean();
}
add_shortcode('spark_animation', 'spark_animation_shortcode');

function spark_enqueue_scripts() {
    if ( is_page(4491) ) { // ✅ solo en la página con ID 4491
        wp_enqueue_style(
            'spark-style',
            get_stylesheet_directory_uri() . '/react-app/assets/index.css'
        );
        wp_enqueue_script(
            'spark-script',
            get_stylesheet_directory_uri() . '/react-app/assets/index.js',
            [],
            null,
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'spark_enqueue_scripts');

function spark_animation_shortcode_2() {
    ob_start();
    ?>

    <style>
        /* Reset and base styles */
        .live-monitoring-widget * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .live-monitoring-widget {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f9fafb;
            padding: 2rem;
        }

        .live-monitoring-container {
            max-width: 1152px;
            margin: 0 auto;
        }

        .live-monitoring-card {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            border: 1px solid #e5e7eb;
            overflow: hidden;
        }

        .live-monitoring-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .live-monitoring-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #111827;
        }

        .notification-bell {
            position: relative;
        }

        .bell-icon {
            width: 1.25rem;
            height: 1.25rem;
            color: #9ca3af;
            transition: all 0.3s ease;
        }

        .bell-icon.active {
            color: #ef4444;
        }

        .bell-icon.shaking {
            animation: shake 0.6s ease-in-out;
        }

        .notification-badge {
            position: absolute;
            top: -0.5rem;
            right: -0.5rem;
            background-color: #ef4444;
            color: white;
            font-size: 0.75rem;
            border-radius: 50%;
            width: 1.25rem;
            height: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            animation: scaleIn 0.3s ease-out;
        }

        .live-monitoring-table {
            width: 100%;
            overflow-x: auto;
        }

        .monitoring-table {
            width: 100%;
            border-collapse: collapse;
        }

        .table-header {
            background-color: #f9fafb;
        }

        .table-header th {
            padding: 10px 15px;
            text-align: left;
            font-size: 0.75rem;
            font-weight: 500;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .table-row {
            transition: all 0.3s ease;
            border-bottom: 1px solid #e5e7eb;
        }

        .table-row.scanning {
            background-color: #eff6ff;
        }

        .table-row:last-child {
            border-bottom: none;
        }

        .table-cell {
            padding: 10px 15px;
            white-space: nowrap;
            font-size: 0.875rem;
            transition: all 0.5s ease;
        }

        .table-cell.name {
            font-weight: 500;
            color: #111827;
        }

        .table-cell.details {
            color: #6b7280;
        }

        .table-cell.outdated {
            text-decoration: line-through;
            opacity: 0.6;
        }

        .status-pill {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            transition: all 0.5s ease;
        }

        .status-pill.checking {
            background-color: #f3f4f6;
            color: #6b7280;
        }

        .status-pill.up-to-date {
            background-color: #dcfce7;
            color: #166534;
            animation: fadeIn 0.5s ease-out;
        }

        .status-pill.outdated {
            background-color: #fee2e2;
            color: #991b1b;
            animation: fadeIn 0.5s ease-out;
        }

        .status-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 0.375rem;
        }

        .status-dot.green {
            background-color: #22c55e;
        }

        .status-dot.red {
            background-color: #ef4444;
        }

        .spinner {
            width: 0.75rem;
            height: 0.75rem;
            border: 2px solid #e5e7eb;
            border-top: 2px solid #6b7280;
            border-radius: 50%;
            margin-right: 0.375rem;
            animation: spin 1s linear infinite;
        }

        /* Animations */
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes shake {

            0%,
            100% {
                transform: translateX(0);
            }

            10%,
            30%,
            50%,
            70%,
            90% {
                transform: translateX(-2px);
            }

            20%,
            40%,
            60%,
            80% {
                transform: translateX(2px);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }

            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes scaleIn {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }

            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        .monitoring-table th,
        .monitoring-table .name,
        .monitoring-table .details {
            max-width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .live-monitoring-widget {
                padding: 1rem;
            }

            .live-monitoring-header {
                padding: 1rem;
            }

            .table-cell {
                padding: 0.75rem;
                font-size: 0.8rem;
            }

            .table-header th {
                padding: 0.5rem 0.75rem;
            }
			
            /* Hide columns 2, 3, and 4 on mobile */
            .monitoring-table th:nth-child(3),
            .monitoring-table th:nth-child(4),
            .monitoring-table td:nth-child(3),
            .monitoring-table td:nth-child(4) {
                display: none;
            }			
			
        }
		
		@media (max-width: 400px) {
            /* Hide columns 2, 3, and 4 on mobile */
            .monitoring-table th:nth-child(2),
            .monitoring-table th:nth-child(3),
            .monitoring-table th:nth-child(4),
            .monitoring-table td:nth-child(2),
            .monitoring-table td:nth-child(3),
            .monitoring-table td:nth-child(4) {
                display: none;
            }				
		}
				
    </style>



    <div class="live-monitoring-widget">
        <div class="live-monitoring-container">
            <div class="live-monitoring-card">
                <!-- Header -->
                <div class="live-monitoring-header">
                    <h2 class="live-monitoring-title">Live Monitoring</h2>
                    <div class="notification-bell">
                        <svg class="bell-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <div class="notification-badge" id="notificationBadge" style="display: none;">0</div>
                    </div>
                </div>

                <!-- Table -->
                <div class="live-monitoring-table">
                    <table class="monitoring-table">
                        <thead class="table-header">
                            <tr>
                                <th>Name</th>
                                <th>Work Email</th>
                                <th>Role</th>
                                <th>Company</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody id="contactsTable">
                            <!-- Contacts will be inserted here by JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Contact data
        const contacts = [{
                id: 1,
                name: "Sarah Chen",
                workEmail: "s.chen@oldtech.com",
                role: "VP Sales",
                company: "OldTech Inc"
            },
            {
                id: 2,
                name: "Mike Johnson",
                workEmail: "m.johnson@growth.co",
                role: "Director",
                company: "GrowthCo"
            },
            {
                id: 3,
                name: "Alex Rivera",
                workEmail: "a.rivera@legacy.com",
                role: "Head of Marketing",
                company: "Legacy Corp"
            },
            {
                id: 4,
                name: "Emma Davis",
                workEmail: "e.davis@techstart.io",
                role: "CEO",
                company: "TechStart"
            },
            {
                id: 5,
                name: "John Smith",
                workEmail: "j.smith@vintage.net",
                role: "CTO",
                company: "Vintage Solutions"
            },
            {
                id: 6,
                name: "Lisa Wang",
                workEmail: "l.wang@innovate.com",
                role: "Product Manager",
                company: "Innovate Ltd"
            }/*,
            {
                id: 7,
                name: "David Brown",
                workEmail: "d.brown@oldschool.biz",
                role: "Sales Director",
                company: "OldSchool Inc"
            },
            {
                id: 8,
                name: "Amy Wilson",
                workEmail: "a.wilson@future.co",
                role: "VP Engineering",
                company: "Future Co"
            },
            {
                id: 9,
                name: "Tom Garcia",
                workEmail: "t.garcia@nextgen.io",
                role: "COO",
                company: "NextGen"
            },
            {
                id: 10,
                name: "Rachel Lee",
                workEmail: "r.lee@moderntech.com",
                role: "CMO",
                company: "ModernTech"
            }*/
        ];

        // Outdated contact IDs
        const outdatedRowIds = [1, 3, 5]; // Sarah Chen, Alex Rivera, John Smith, David Brown

        // Animation state
        let currentScanRow = null;
        let completedRows = new Set();
        let outdatedCount = 0;
        let animationTimeout;

        // DOM elements
        const contactsTable = document.getElementById('contactsTable');
        const notificationBadge = document.getElementById('notificationBadge');
        const bellIcon = document.querySelector('.bell-icon');

        // Initialize the table
        function initializeTable() {
            contactsTable.innerHTML = '';
            contacts.forEach(contact => {
                const row = document.createElement('tr');
                row.className = 'table-row';
                row.id = `row-${contact.id}`;

                row.innerHTML = `
                    <td class="table-cell name">${contact.name}</td>
                    <td class="table-cell details" id="email-${contact.id}">${contact.workEmail}</td>
                    <td class="table-cell details" id="role-${contact.id}">${contact.role}</td>
                    <td class="table-cell details" id="company-${contact.id}">${contact.company}</td>
                    <td class="table-cell">
                        <div class="status-pill checking" id="status-${contact.id}">
                            <div class="spinner"></div>
                            Checking...
                        </div>
                    </td>
                `;

                contactsTable.appendChild(row);
            });
        }

        // Update status pill
        function updateStatus(contactId, status) {
            const statusElement = document.getElementById(`status-${contactId}`);
            const row = document.getElementById(`row-${contactId}`);

            if (status === 'up-to-date') {
                statusElement.className = 'status-pill up-to-date';
                statusElement.innerHTML = '<div class="status-dot green"></div>Up to date';
            } else if (status === 'outdated') {
                statusElement.className = 'status-pill outdated';
                statusElement.innerHTML = '<div class="status-dot red"></div>Outdated';

                // Add strikethrough to email, role, and company
                document.getElementById(`email-${contactId}`).classList.add('outdated');
                document.getElementById(`role-${contactId}`).classList.add('outdated');
                document.getElementById(`company-${contactId}`).classList.add('outdated');

                // Update notification
                outdatedCount++;
                updateNotificationBell();
            }

            // Remove scanning state
            row.classList.remove('scanning');
        }

        // Update notification bell
        function updateNotificationBell() {
            if (outdatedCount > 0) {
                bellIcon.classList.add('active', 'shaking');
                notificationBadge.textContent = outdatedCount;
                notificationBadge.style.display = 'flex';

                // Remove shaking after animation
                setTimeout(() => {
                    bellIcon.classList.remove('shaking');
                }, 600);
            } else {
                bellIcon.classList.remove('active');
                notificationBadge.style.display = 'none';
            }
        }

        // Reset animation state
        function resetAnimation() {
            currentScanRow = null;
            completedRows.clear();
            outdatedCount = 0;

            // Reset notification bell
            bellIcon.classList.remove('active', 'shaking');
            notificationBadge.style.display = 'none';

            // Reset all rows
            contacts.forEach(contact => {
                const row = document.getElementById(`row-${contact.id}`);
                const statusElement = document.getElementById(`status-${contact.id}`);

                row.classList.remove('scanning');
                statusElement.className = 'status-pill checking';
                statusElement.innerHTML = '<div class="spinner"></div>Checking...';

                // Remove strikethroughs
                document.getElementById(`email-${contact.id}`).classList.remove('outdated');
                document.getElementById(`role-${contact.id}`).classList.remove('outdated');
                document.getElementById(`company-${contact.id}`).classList.remove('outdated');
            });
        }

        // Animate single row
        function animateRow(contactId) {
            const row = document.getElementById(`row-${contactId}`);
            row.classList.add('scanning');

            setTimeout(() => {
                completedRows.add(contactId);

                if (outdatedRowIds.includes(contactId)) {
                    updateStatus(contactId, 'outdated');
                } else {
                    updateStatus(contactId, 'up-to-date');
                }

                // Continue to next row or finish
                if (contactId < 6) {
                    animationTimeout = setTimeout(() => animateRow(contactId + 1), 800);
                } else {
                    // Animation complete, pause then restart
                    animationTimeout = setTimeout(() => {
                        resetAnimation();
                        startAnimation();
                    }, 2500);
                }
            }, 800);
        }

        // Start animation sequence
        function startAnimation() {
            // Brief delay before starting
            animationTimeout = setTimeout(() => {
                animateRow(1);
            }, 500);
        }

        // Initialize and start
        function init() {
            initializeTable();

            // Start first animation after brief delay
            setTimeout(startAnimation, 500);
        }

        // Start when page loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        // Cleanup function for WordPress compatibility
        window.liveMonitoringCleanup = function() {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
        };
    </script>

    <?php
    return ob_get_clean();
}
add_shortcode('spark_animation_2', 'spark_animation_shortcode_2');


/**
 * CEO Fields - Preserving existing data structure
 * Custom fields for CEO post type maintaining original field types
 */
add_action('acf/init', function() {
    if( function_exists('acf_add_local_field_group') ) {
        acf_add_local_field_group(array(
            'key' => 'group_ceo_fields',
            'title' => 'CEO Fields',
            'fields' => array(
                array(
                    'key' => 'field_csv_0_profile_url',
                    'label' => 'Profile Image',
                    'name' => 'profile_image_url',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                ),				
                array(
                    'key' => 'field_csv_1_name',
                    'label' => 'Name',
                    'name' => 'name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_2_company_table_data',
                    'label' => 'Company Table Data',
                    'name' => 'company_table_data',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_3_facebook_company_url',
                    'label' => 'Facebook company URL',
                    'name' => 'facebook_company_url',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_csv_4_crunchbase_url',
                    'label' => 'Crunchbase URL',
                    'name' => 'crunchbase_url',
                    'type' => 'url',
                ),				
                array(
                    'key' => 'field_csv_5_specialties',
                    'label' => 'Specialties',
                    'name' => 'specialties',
                    'type' => 'textarea',
                    'rows' => 4,
                ),
                array(
                    'key' => 'field_csv_6_description',
                    'label' => 'Description',
                    'name' => 'description',
                    'type' => 'textarea',
                    'rows' => 5,
                ),
                array(
                    'key' => 'field_csv_7_team_size',
                    'label' => 'Team Size',
                    'name' => 'team_size',
                    'type' => 'number',
                ),
                array(
                    'key' => 'field_csv_8_logo_url',
                    'label' => 'Logo',
                    'name' => 'logo_url',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_csv_9_industry',
                    'label' => 'Industry',
                    'name' => 'industry',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_10_company_name',
                    'label' => 'Company Name',
                    'name' => 'company_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_11_type',
                    'label' => 'Type',
                    'name' => 'type',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_12_linkedin_profile',
                    'label' => 'LinkedIn Profile',
                    'name' => 'linkedin_profile',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_csv_13_job_title',
                    'label' => 'Job Title',
                    'name' => 'job_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_14_full_name',
                    'label' => 'Full Name',
                    'name' => 'full_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_15_first_name',
                    'label' => 'First Name',
                    'name' => 'first_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_16_last_name',
                    'label' => 'Last Name',
                    'name' => 'last_name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_17_location',
                    'label' => 'Location',
                    'name' => 'location',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_18_company_domain',
                    'label' => 'Company Domain',
                    'name' => 'company_domain',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_19_website',
                    'label' => 'Website',
                    'name' => 'website',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_csv_20_linkedin_company_url',
                    'label' => 'LinkedIn Company URL',
                    'name' => 'linkedin_company_url',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_csv_21_batch',
                    'label' => 'Batch',
                    'name' => 'batch',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_22_status',
                    'label' => 'Status',
                    'name' => 'status',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_csv_23_founded',
                    'label' => 'Founded',
                    'name' => 'founded',
                    'type' => 'text',
                ),				
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'ceo',
                    ),
                ),
            ),
        ));
    }
});

/**
 * Company Fields - Preserving existing data structure
 * Custom fields for company post type maintaining original field types
 */
add_action('acf/init', function() {
    if( function_exists('acf_add_local_field_group') ) {
        acf_add_local_field_group(array(
            'key' => 'group_company_details',
            'title' => 'Company Details',
            'fields' => array(
                array(
                    'key' => 'field_company_logo',
                    'label' => 'Logo',
                    'name' => 'logo_url',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_company_name',
                    'label' => 'Company Name',
                    'name' => 'company_name',
                    'type' => 'text',
                ),
				array(
                    'key' => 'field_company_industry',
                    'label' => 'Industry',
                    'name' => 'industry',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_company_location',
                    'label' => 'Location',
                    'name' => 'location',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_company_website',
                    'label' => 'Website',
                    'name' => 'website',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_business_description',
                    'label' => 'Business Description',
                    'name' => 'business_description',
                    'type' => 'wysiwyg',
                ),				
                array(
                    'key' => 'field_company_linkedin',
                    'label' => 'LinkedIn',
                    'name' => 'linkedin',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_company_linkedin_description',
                    'label' => 'LinkedIn Description',
                    'name' => 'linkedin_description',
                    'type' => 'textarea',
                    'rows' => 3,
                ),				
                array(
                    'key' => 'field_company_facebook',
                    'label' => 'Facebook',
                    'name' => 'facebook',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_company_crunchbase',
                    'label' => 'Crunchbase',
                    'name' => 'crunchbase',
                    'type' => 'url',
                ),		
                array(
                    'key' => 'field_company_clutch',
                    'label' => 'Clutch URL',
                    'name' => 'clutch_url',
                    'type' => 'url',
                ),	
                array(
                    'key' => 'field_company_g2',
                    'label' => 'G2 URL',
                    'name' => 'g2_url',
                    'type' => 'url',
                ),					
                array(
                    'key' => 'field_company_employee_count',
                    'label' => 'Employee Count',
                    'name' => 'employee_count',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_company_follower_count',
                    'label' => 'Follower Count',
                    'name' => 'follower_count',
                    'type' => 'text',
                ),	
                array(
                    'key' => 'field_company_anual_revenue_count',
                    'label' => 'Annual Revenue',
                    'name' => 'anual_revenue',
                    'type' => 'text',
                ),					
                array(
                    'key' => 'field_company_minimum_project_size',
                    'label' => 'Minimum Project Size',
                    'name' => 'minimum_project_size',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_company_average_hourly_rate',
                    'label' => 'Average Hourly Rate',
                    'name' => 'average_hourly_rate',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_company_country',
                    'label' => 'Country',
                    'name' => 'country',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_company_specialities',
                    'label' => 'Specialities',
                    'name' => 'specialities',
                    'type' => 'text',
                ),			
                array(
                    'key' => 'field_company_fullname',
                    'label' => 'Fullname',
                    'name' => 'fullname',
                    'type' => 'text',
                ),		
                array(
                    'key' => 'field_company_firstname',
                    'label' => 'Firstname',
                    'name' => 'firstname',
                    'type' => 'text',
                ),		
                array(
                    'key' => 'field_company_lastname',
                    'label' => 'Lastname',
                    'name' => 'lastname',
                    'type' => 'text',
                ),			
               array(
                    'key' => 'field_company_workemail',
                    'label' => 'Workemail',
                    'name' => 'workemail',
                    'type' => 'text',
                ),	
               array(
                    'key' => 'field_company_workemail',
                    'label' => 'Workemail',
                    'name' => 'workemail',
                    'type' => 'text',
                ),			
                array(
                    'key' => 'field_company_linkedin_profile',
                    'label' => 'LinkedIn Profile',
                    'name' => 'linkedin_profile',
                    'type' => 'url',
                ),	
               array(
                    'key' => 'field_company_jobtitle',
                    'label' => 'Job Title',
                    'name' => 'jobtitle',
                    'type' => 'text',
                ),	
               array(
                    'key' => 'field_company_type',
                    'label' => 'Type',
                    'name' => 'type',
                    'type' => 'text',
                ),					
                array(
                    'key' => 'field_company_profile',
                    'label' => 'Profile',
                    'name' => 'profile_url',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                ),
				
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'company',
                    ),
                ),
            ),
        ));
    }
});

add_shortcode('profile_summary', function ($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF not active
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'profile_summary');

    $pid = $atts['post_id'];

    // Fetch and trim ACF fields
    $fullname    = trim((string) get_field('name', $pid));
    $job_title   = trim((string) get_field('job_title', $pid));
    $company     = trim((string) get_field('company_name', $pid));
    $type        = trim((string) get_field('type', $pid));
    $industry    = trim((string) get_field('industry', $pid));
    $location    = trim((string) get_field('location', $pid));
    $specialties = trim((string) get_field('specialties', $pid));

    $parts = [];

    // 1️⃣ Name + Job title + Company
    if ($fullname !== '') {
        $first = esc_html($fullname);

        if ($job_title !== '') {
            $first .= ' is ' . esc_html($job_title);
        } else {
            $first .= ' works';
		}

        if ($company !== '') {
            $first .= ' at ' . esc_html($company);
        } else {
            $first .= ' at a company';
		}

        $parts[] = $first;
    }

    // 2️⃣ Company type + Industry
    if ($company !== '' && ($type !== '' || $industry !== '')) {
        $second = '';

        if ($type !== '') {
            $second .= ', a ' . esc_html($type) . ' company';
        } else{
            $second .= ', a company';			
		}

        if ($industry !== '') {
            $second .= ' in the ' . esc_html($industry) . ' sector';
        }

        $parts[] = $second . '.';
    } else {
        $second = '.';		
        $parts[] = $second;		
	}

    // 3️⃣ Location + Specialties
    if ($location !== '' || $specialties !== '') {
        $third = '';

        if ($location !== '') {
            $third .= ' Based in ' . esc_html($location);
            if ($company !== '') {
                $third .= ', ' . esc_html($company);
            }
        } elseif ($company !== '') {
            $third .= ' '.esc_html($company);
        }

        if ($specialties !== '') {
            $third .= ($third !== '' ? ' specializes in ' : 'Specializes in ') . esc_html($specialties);
        }

        $parts[] = rtrim($third, ', ') . '.';
    }

    // Combine all non-empty parts
    $output = implode('', array_filter($parts));

    return wp_kses_post($output);
});

add_shortcode('get_company_alt', function($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF no está activo
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'get_company_alt');

    $pid = $atts['post_id'];

    // Obtener los campos ACF
    $company_name = get_field('company_name', $pid);
    if ( ! $company_name ) {
        $company_name = get_field('name', $pid);
    }

    $industry = get_field('industry', $pid);

    // Si no hay nombre de compañía, no generar nada
    if ( ! $company_name ) return '';

    // Generar salida (la industria es opcional)
    $output = esc_html($company_name) . ' company logo';
    if ( $industry ) {
        $output .= ' — ' . esc_html($industry);
    }

    return $output;
});


add_shortcode('get_profile_alt', function($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF no está activo
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'get_profile_alt');

    $pid = $atts['post_id'];

    // Obtener los campos ACF
    $full_name    = trim((string) get_field('full_name', $pid));
    $job_title    = trim((string) get_field('job_title', $pid));
    $company_name = trim((string) get_field('company_name', $pid));
    $industry     = trim((string) get_field('industry', $pid));

    // Si no hay nombre ni cargo, no generar nada
    if ( ! $full_name && ! $job_title && ! $company_name && ! $industry ) return '';

    // Armar partes dinámicamente
    $parts = [];

    if ( $full_name ) {
        $parts[] = esc_html($full_name);
    }

    if ( $job_title ) {
        $parts[] = esc_html($job_title);
    }

    if ( $company_name ) {
        $parts[] = esc_html($company_name);
    }

    // Combinar
    $output = implode(' - ', $parts);

    // Agregar industria si existe (separado con guion largo)
    if ( $industry ) {
        $output .= ' — ' . esc_html($industry);
    }

    return $output;
});


add_shortcode('get_ceo_title', function ($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF no activo
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'get_ceo_title');

    $pid = $atts['post_id'];

    // ACF fields (solo estos son variables)
    $full_name    = trim((string) get_field('full_name', $pid));
    $job_title    = trim((string) get_field('job_title', $pid));
    $company_name = trim((string) get_field('company_table_data', $pid));

    // Construcción dinámica sin separadores “colgando”
    $first_part = '';

    if ($full_name !== '') {
        $first_part = esc_html($full_name);
    }

    if ($job_title !== '') {
        if ($first_part !== '') {
            $first_part .= ' — ' . esc_html($job_title);
        } else {
            $first_part = esc_html($job_title);
        }
    }

    if ($company_name !== '') {
        if ($first_part !== '') {
            $first_part .= ' at ' . esc_html($company_name);
        } else {
            // Si solo hay empresa, mostramos solo el nombre (sin "at")
            $first_part = esc_html($company_name);
        }
    }

    // Siempre que haya algo en first_part, agregamos el literal " | Email & Phone Number"
    if ($first_part !== '') {
        return $first_part . ' | Email & Phone Number';
    }

    // Si no hay ninguna variable con contenido, devolvemos solo el literal
    return 'Email & Phone Number';
});

add_shortcode('get_ceo_description', function ($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF no activo
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'get_ceo_description');

    $pid = $atts['post_id'];

    // Obtener campos ACF
    $full_name     = trim((string) get_field('full_name', $pid));
    $job_title     = trim((string) get_field('job_title', $pid));
    $company_name  = trim((string) get_field('company_table_data', $pid));
    $location       = trim((string) get_field('location', $pid));

    $output = '';

    // Estructura: {full_name} is {job_title} at {company_table_data}, based in {country}.
    if ($full_name !== '') {
        $output .= esc_html($full_name);
    }

    if ($job_title !== '') {
        $output .= ($output ? ' is ' : 'Is ') . esc_html($job_title);
    }

    if ($company_name !== '') {
        $output .= ($job_title ? ' at ' : ' at ') . esc_html($company_name);
    }

    if ($location !== '') {
        $output .= ($company_name || $job_title ? ', based in ' : 'Based in ') . esc_html($location);
    }

    if ($output !== '') {
        $output .= '.';
    }

    return trim($output);
});

add_shortcode('get_ceo_about', function ($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF no activo
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'get_ceo_about');

    $pid = $atts['post_id'];

    // Campos ACF
    $full_name   = trim((string) get_field('full_name', $pid));
    $job_title   = trim((string) get_field('job_title', $pid));
    $company     = trim((string) get_field('company_table_data', $pid));
    $type        = trim((string) get_field('type', $pid));
    $industry    = trim((string) get_field('industry', $pid));
    $location    = trim((string) get_field('location', $pid));
    $specialties = trim((string) get_field('specialties', $pid));
    $founded     = trim((string) get_field('founded', $pid));
    $team_size   = trim((string) get_field('team_size', $pid));
    $batch       = trim((string) get_field('batch', $pid));

    // --- PRIMER PÁRRAFO ---
    $part1 = [];

    if ($full_name) {
        $sentence = esc_html($full_name);

        if ($job_title) {
            $sentence .= ' is ' . esc_html($job_title);
        }

        if ($company) {
            $sentence .= ' at ' . esc_html($company);
        }

        $extra = [];

        if ($type) {
            $extra[] = 'a ' . esc_html($type) . ' company';
        }

        if ($industry) {
            $extra[] = 'in the ' . esc_html($industry) . ' space';
        }

        if (!empty($extra)) {
            $sentence .= ', ' . implode(' ', $extra);
        }

        if ($location) {
            $sentence .= '. Based in ' . esc_html($location);
        }

        if ($specialties) {
            $sentence .= ', the team focuses on ' . esc_html($specialties);
        }

        if ($founded || $team_size || $batch) {
            $sentence .= '.';
            $extra2 = [];

            if ($founded) {
                $extra2[] = 'Founded in ' . esc_html($founded);
            }

            if ($company && $team_size) {
                $extra2[] = esc_html($company) . ' counts about ' . esc_html($team_size) . ' employees';
            }

            if ($batch) {
                $extra2[] = 'and is part of ' . esc_html($batch);
            }

            if (!empty($extra2)) {
                $sentence .= ' ' . implode(' ', $extra2) . '.';
            }
        }

        $part1[] = $sentence;
    }

    // --- SEGUNDO PÁRRAFO ---
    $part2 = '';
    if ($full_name && $company) {
        $part2 = esc_html($full_name) . ' helps drive ' . esc_html($company) . '\'s growth and execution — improving processes, scaling operations, and shaping strategy.';
    }

    // --- TERCER PÁRRAFO ---
    $part3 = 'You can find verified contact details for ';
    if ($full_name) {
        $part3 .= esc_html($full_name) . ' ';
    }
    $part3 .= 'through <a href="https://app.scalelist.com/auth/signup?redirectUrl=%252Fapp%252Fdashboard" target="_blank">Scalelist</a>. Scalelist provides up to 90% verified accuracy and <a href="https://scalelist.com/monitoring/" target="_blank">updates contact data weekly</a>, so sales and marketing teams always reach the right decision-makers at the right time.';

    // --- SALIDA FINAL ---
    $output = implode("\n\n", array_filter([$part1 ? implode('', $part1) : '', $part2, $part3]));

    return wpautop(trim($output));
});

add_shortcode('get_company_about', function ($atts = []) {
    if ( ! function_exists('get_field') ) {
        return ''; // ACF no activo
    }

    $atts = shortcode_atts([
        'post_id' => get_the_ID(),
    ], $atts, 'get_company_about');

    $pid = (int) $atts['post_id'];

    /**
     * =====================================================
     * PRIORIDAD: Business Description (WYSIWYG)
     * Fallback SOLO si está vacío
     * =====================================================
     */
    $business_description_raw = (string) get_field('business_description', $pid);

    // Considerar vacío aunque tenga HTML, <br>, &nbsp;, etc.
    $business_description_plain = trim(
        wp_strip_all_tags(
            str_replace('&nbsp;', ' ', $business_description_raw)
        )
    );

    if ($business_description_plain !== '') {
        // Respeta el formato del editor (p, br, etc.)
        return wpautop($business_description_raw);
        // Alternativa más WP-like (si la necesitás):
        // return apply_filters('the_content', $business_description_raw);
    }

    /**
     * =====================================================
     * FALLBACK: texto dinámico actual
     * =====================================================
     */

    // ACF fields
    $company   = trim((string) get_field('company_name', $pid));
    $location  = trim((string) get_field('location', $pid));
    $country   = trim((string) get_field('country', $pid));
    $industry  = trim((string) get_field('industry', $pid));
    $employees = trim((string) get_field('employee_count', $pid));
    $website   = trim((string) get_field('website', $pid));

    // Normaliza URL agregando https:// si falta
    $normalize_url = function ($url) {
        if ($url === '') return '';
        if (!preg_match('~^https?://~i', $url)) {
            $url = 'https://' . ltrim($url, '/');
        }
        return $url;
    };

    $website = $normalize_url($website);

    // Helpers (escapes)
    $company_h   = $company !== '' ? esc_html($company) : '';
    $location_h  = $location !== '' ? esc_html($location) : '';
    $country_h   = $country !== '' ? esc_html($country) : '';
    $industry_h  = $industry !== '' ? esc_html($industry) : '';
    $employees_h = $employees !== '' ? esc_html($employees) : '';
    $website_h   = $website !== '' ? esc_url($website) : '';

    // Construye el nombre de empresa con link si hay website
    $company_display = $company_h;
    if ($company_h && $website_h) {
        $company_display = '<a href="' . $website_h . '" target="_blank" rel="noopener">' . $company_h . '</a>';
    }

    /**
     * ---------- PÁRRAFO 1 ----------
     */
    if ($company_h) {
        $p1 = '<span class="light-blue">' . $company_display . '</span> is a leading lead generation company in the B2B space';
    } else {
        $p1 = 'This company is a leading lead generation company in the B2B space';
    }

    if ($location_h || $country_h) {
        $p1 .= ', headquartered in ';
        if ($location_h && $country_h) {
            $p1 .= $location_h . ', ' . $country_h;
        } else {
            $p1 .= $location_h ?: $country_h;
        }
    }

    if ($industry_h) {
        $p1 .= ', with a strong focus on the ' . $industry_h . ' sector';
    }

    $p1 .= '.';

    $p1 .= ' Unlike generic marketing agencies, ' . ($company_h ? $company_h : 'the company')
        . ' employs data-driven strategies to connect clients with decision-makers eager to engage, fostering measurable growth and sustained revenue.';

    /**
     * ---------- PÁRRAFO 2 ----------
     */
    if ($employees_h !== '') {
        $p2 = 'With a team of ' . $employees_h . ' skilled professionals, ';
    } else {
        $p2 = 'With a skilled team, ';
    }

    $p2 .= ($company_h ?: 'the company') . ' offers tailored lead generation services across diverse industries';

    if ($country_h) {
        $p2 .= ', emphasizing ' . $country_h . '-based and global campaigns';
    }

    $p2 .= '. Their approach integrates advanced targeting, proprietary data tools, and innovative technology to identify and nurture prospects, ensuring clients receive leads ready for conversion and improved ROI.';

    /**
     * ---------- SALIDA ----------
     */
    return wpautop($p1 . "\n\n" . $p2);
});


/**
 * Public Company (USA) Fields - Preserving existing data structure
 * Custom fields for public_company_usa post type maintaining original field types
 */
add_action('acf/init', function() {
    if( function_exists('acf_add_local_field_group') ) {
        acf_add_local_field_group(array(
            'key' => 'group_public_company_usa_details',
            'title' => 'Public Company (USA) – Details',
            'fields' => array(
                array(
                    'key' => 'field_pcu_company_logo',
                    'label' => 'Company Logo',
                    'name' => 'company_logo',
                    'type' => 'image',
                    'return_format' => 'array',
                    'preview_size' => 'medium',
                    'library' => 'all',
                ),
                array(
                    'key' => 'field_pcu_annual_revenue',
                    'label' => 'Annual Revenue',
                    'name' => 'annual_revenue',
                    'type' => 'text',
                ),
				array(
                    'key' => 'field_pcu_name',
                    'label' => 'Name',
                    'name' => 'name',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_pcu_description',
                    'label' => 'Description',
                    'name' => 'description',
                    'type' => 'textarea',
                    'rows' => 5,
                    'new_lines' => 'wpautop',
                ),
                array(
                    'key' => 'field_pcu_industry',
                    'label' => 'Industry',
                    'name' => 'industry',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_pcu_size',
                    'label' => 'Size',
                    'name' => 'size',
                    'type' => 'text',
                    'placeholder' => 'e.g., 10,001+ employees',
                ),
                array(
                    'key' => 'field_pcu_type',
                    'label' => 'Type',
                    'name' => 'type',
                    'type' => 'text',
                    'placeholder' => 'e.g., Public Company',
                ),
                array(
                    'key' => 'field_pcu_location',
                    'label' => 'Location',
                    'name' => 'location',
                    'type' => 'text',
                    'placeholder' => 'City, State',
                ),
                array(
                    'key' => 'field_pcu_country',
                    'label' => 'Country',
                    'name' => 'country',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_pcu_website',
                    'label' => 'Website',
                    'name' => 'website',
                    'type' => 'url',
                ),
                array(
                    'key' => 'field_pcu_linkedin_url',
                    'label' => 'LinkedIn URL',
                    'name' => 'linkedin_url',
                    'type' => 'url',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'public_company_usa', 
                    ),
                ),
            ),
        ));
    }
});

add_action('pmxi_saved_post', function ($post_id) {
    if (get_post_type($post_id) !== 'ceo') return;

    $first_name    = trim((string) get_field('first_name', $post_id));
    $last_name     = trim((string) get_field('last_name', $post_id));
    $job_title     = trim((string) get_field('job_title', $post_id));
    $company_name  = trim((string) get_field('company_name', $post_id));
    $location      = trim((string) get_field('location', $post_id));
    $industry      = trim((string) get_field('industry', $post_id));

    // --- TITLE ---
    $seo_title = trim("$first_name $last_name");
    if ($seo_title) {
        $seo_title .= ' Email & Phone Number';
        if ($job_title) $seo_title .= " - $job_title";
        //if ($company_name) $seo_title .= " at $company_name";
    }

    // --- DESCRIPTION ---
    $desc = '';
    if ($first_name || $last_name) {
        $desc .= trim("$first_name $last_name") . ' email and phone number. ';
    }
    if ($first_name && $job_title && $company_name) {
        $desc .= "$first_name is the $job_title at $company_name";
    }
    if ($location) $desc .= ", based in $location";
    if ($industry) $desc .= ", specialised in $industry";
    $desc = rtrim($desc, ', ') . '.';

    // Recorte SEO-friendly
    if (function_exists('mb_substr') && mb_strlen($desc) > 140) {
        $desc = rtrim(mb_substr($desc, 0, 137)) . '…';
    }

    // --- FOCUS KEYWORD ---
    $focus_kw = trim("$first_name $last_name");
    if ($company_name) $focus_kw .= " $company_name";
    $focus_kw = trim($focus_kw . ' Email & Phone Number');

    // --- GUARDAR EN YOAST ---
    update_post_meta($post_id, '_yoast_wpseo_title', sanitize_text_field($seo_title));
    update_post_meta($post_id, '_yoast_wpseo_metadesc', sanitize_text_field($desc));
    update_post_meta($post_id, '_yoast_wpseo_focuskw', sanitize_text_field($focus_kw));
    update_post_meta($post_id, '_yoast_wpseo_focuskw_text', sanitize_text_field($focus_kw));
});

add_action('pmxi_saved_post', function ($post_id) {
    if (get_post_type($post_id) !== 'company') return;

    // ACF fields
    $company = trim((string) get_field('company_name', $post_id));
    $country = trim((string) get_field('country', $post_id));

    // --- TITLE ---
    // "Top Lead Generation Company in {country} {company}"
    $seo_title = $company . ' - Top Lead Generation Company';
    if ($country !== '') $seo_title .= ' in ' . $country;
    $seo_title = trim($seo_title);

    // --- DESCRIPTION ---
    // "{Company} is a top lead generation company in {Country}. View profile, team size, revenue, and verified emails."
    $desc = '';
    if ($company !== '') {
        $desc = $company . ' is a top lead generation company';
        if ($country !== '') $desc .= ' in ' . $country;
        $desc .= '.';
    } else {
        // Fallback si falta company_name
        $desc = 'This is a top lead generation company' . ($country ? ' in ' . $country : '') . '.';
    }
    $desc .= ' View profile, team size, revenue, and verified emails.';

    // Recorte SEO-friendly (~155 chars)
    if (function_exists('mb_substr') && mb_strlen($desc) > 140) {
        $desc = rtrim(mb_substr($desc, 0, 137)) . '…';
    }

    // --- FOCUS KEYWORD ---
    $focus_kw = trim($company);
    if ($country) $focus_kw .= ' ' . $country;
    $focus_kw = trim($focus_kw . ' Lead Generation Company');

    // --- GUARDAR EN YOAST ---
    update_post_meta($post_id, '_yoast_wpseo_title', sanitize_text_field($seo_title));
    update_post_meta($post_id, '_yoast_wpseo_metadesc', sanitize_text_field($desc));
    update_post_meta($post_id, '_yoast_wpseo_focuskw', sanitize_text_field($focus_kw));
    update_post_meta($post_id, '_yoast_wpseo_focuskw_text', sanitize_text_field($focus_kw));
});

add_action('pmxi_saved_post', function ($post_id) {
    if (get_post_type($post_id) !== 'public_company_usa') return;

    // --- ACF fields ---
    $company_name = trim((string) get_field('name', $post_id));
    if (!$company_name) return;

    // --- YOAST SEO ---
    // Title
    $seo_title = $company_name . ' Email Format';

    // Meta Description (recortada si supera 140 caracteres)
    $meta_desc = 'Find ' . $company_name . ' email format and verified contacts. Get accurate emails and company info instantly with Scalelist.';
    if (function_exists('mb_substr') && mb_strlen($meta_desc) > 140) {
        $meta_desc = rtrim(mb_substr($meta_desc, 0, 137)) . '…';
    }

    // --- FOCUS KEYWORD ---
    $focus_kw = trim($company_name . ' Email & Phone Number');

    // --- Guardar en Yoast ---
    update_post_meta($post_id, '_yoast_wpseo_title', sanitize_text_field($seo_title));
    update_post_meta($post_id, '_yoast_wpseo_metadesc', sanitize_text_field($meta_desc));
    update_post_meta($post_id, '_yoast_wpseo_focuskw', sanitize_text_field($focus_kw));
    update_post_meta($post_id, '_yoast_wpseo_focuskw_text', sanitize_text_field($focus_kw));
});


/**
 * Shortcode: [avatar]
 * Muestra un avatar circular con la inicial del campo "name", "company_name" o el título del post.
 * Si existe un logo (ACF: logo, company_logo o logo_url), no muestra nada.
 */

if (!defined('ABSPATH')) exit;

function avatar_shortcode() {
    // 🔹 Configuración base
    $size  = 80;
    $bg    = '#e2e8f0';
    $color = '#334155';

    // 🔹 Si hay un logo, no mostrar nada
    if (function_exists('get_field')) {
        $logo_fields = ['logo', 'company_logo', 'logo_url'];
        foreach ($logo_fields as $field) {
            $logo = get_field($field);
            if (!empty($logo)) {
                // Si hay una imagen o URL → no mostrar avatar
                if (is_array($logo) && !empty($logo['url'])) return '';
                if (is_string($logo) && filter_var($logo, FILTER_VALIDATE_URL)) return '';
                if (is_numeric($logo)) return '';
            }
        }
    }

    // 🔹 Obtener el nombre (en orden de prioridad)
    $name = '';
    if (function_exists('get_field')) {
        $name = get_field('name');
        if (empty($name)) {
            $name = get_field('company_name');
        }
    }

    // Si sigue vacío, usa el título del post
    if (empty($name)) {
        $name = get_the_title();
    }

    // 🔹 Generar la inicial
    $initial = '';
    if (!empty($name)) {
        $initial = function_exists('mb_substr')
            ? mb_strtoupper(mb_substr($name, 0, 1))
            : strtoupper(substr($name, 0, 1));
    }

    // Si no hay inicial, no muestra nada
    if (empty($initial)) {
        return '';
    }

    // 🔹 Renderizar HTML
    ob_start(); ?>
    <div class="ca-avatar"
         style="width:<?php echo $size; ?>px;
                height:<?php echo $size; ?>px;
                border-radius:8px;
                display:inline-flex;
                align-items:center;
                justify-content:center;
                background:<?php echo $bg; ?>;
                color:<?php echo $color; ?>;
                font-weight:700;
                font-size:<?php echo round($size * 0.45); ?>px;
                text-transform:uppercase;
                user-select:none;">
        <?php echo esc_html($initial); ?>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('avatar', 'avatar_shortcode');

/* =========================================================
   CANONICAL FIX — ARCHIVE: public_company_usa
   ========================================================= */
add_filter('wpseo_canonical', function($canonical) {
    // Ajustá el slug del CPT si hace falta
    if (is_post_type_archive('public_company_usa')) {
        $paged = get_query_var('paged');

        // Página 1 del archive
        if ($paged < 2) {
            return home_url('/public-companies-usa/');
        }

        // Páginas 2, 3, 4...
        return home_url('/public-companies-usa/page/' . $paged . '/');
    }

    return $canonical;
});


/* =========================================================
   CANONICAL FIX — ARCHIVE: company
   ========================================================= */
add_filter( 'wpseo_canonical', function( $canonical ) {
    if ( is_post_type_archive( 'company' ) ) {

		// Página 1 del archive
        if ($paged < 2) {
            return home_url('/company/');
        }

        // Páginas 2, 3, 4...
        return home_url('/company/page/' . $paged . '/');
    }
    return $canonical;
});

// Corregir rel="prev" para el archive public_company_usa
add_filter( 'wpseo_prev_rel_link', function( $url ) {
    if ( is_post_type_archive( 'public_company_usa' ) && $url ) {
        // Reemplaza el slug interno por el slug público correcto
        $url = str_replace( 'public_company_usa', 'public-companies-usa', $url );
    }
    return $url;
} );

// Corregir rel="next" para el archive public_company_usa
add_filter( 'wpseo_next_rel_link', function( $url ) {
    if ( is_post_type_archive( 'public_company_usa' ) && $url ) {
        // Reemplaza el slug interno por el slug público correcto
        $url = str_replace( 'public_company_usa', 'public-companies-usa', $url );
    }
    return $url;
} );


/**
 * Shortcodes de listas simples por CPT
 * Muestran solo los nombres/títulos con enlace para SEO
 */

if (!defined('ABSPATH')) exit;

/**
 * Render genérico de lista por CPT con enlaces
 *
 * $opts:
 * - posts_per_page (int)  Cantidad de resultados, -1 = todos
 * - offset         (int)  Desplazamiento inicial
 */
function sl_render_simple_list($cpt, $opts = array()){
    $defaults = array(
        'posts_per_page' => -1,
        'offset'         => 0,
    );
    $opts = wp_parse_args($opts, $defaults);

    // Sanitizar
    $posts_per_page = intval($opts['posts_per_page']);
    if ($posts_per_page === 0) {
        $posts_per_page = -1; // si pasan 0, lo tomo como "todos"
    }
    $offset = max(0, intval($opts['offset']));

    $q = new WP_Query(array(
        'post_type'      => $cpt,
        'posts_per_page' => $posts_per_page,
        'offset'         => $offset,
        'orderby'        => 'title',
        'order'          => 'ASC',
        'fields'         => 'ids',
        'no_found_rows'  => true,
    ));

    if(!$q->have_posts()) return '<p>No records found.</p>';

    ob_start();
    echo '<ul class="sl-simple-list">';
    foreach($q->posts as $pid){
        $name = get_the_title($pid);
        $link = get_permalink($pid);

        echo '<li><a href="' . esc_url($link) . '" target="_blank" rel="noopener noreferrer">'
             . esc_html($name) .
             '</a></li>';
    }
    echo '</ul>';

    return ob_get_clean();
}

/**
 * Shortcode: [ceo_list]
 * Acepta:
 *   [ceo_list limit="100" offset="0"]
 */
function sl_shortcode_ceo($atts = array()){
    $atts = shortcode_atts(array(
        'limit'  => -1,
        'offset' => 0,
    ), $atts, 'ceo_list');

    $opts = array(
        'posts_per_page' => intval($atts['limit']),
        'offset'         => intval($atts['offset']),
    );

    return sl_render_simple_list('ceo', $opts);
}
add_shortcode('ceo_list', 'sl_shortcode_ceo');

/**
 * Shortcode: [company_list]
 * Acepta:
 *   [company_list limit="50" offset="50"]
 */
function sl_shortcode_company($atts = array()){
    $atts = shortcode_atts(array(
        'limit'  => -1,
        'offset' => 0,
    ), $atts, 'company_list');

    $opts = array(
        'posts_per_page' => intval($atts['limit']),
        'offset'         => intval($atts['offset']),
    );

    return sl_render_simple_list('company', $opts);
}
add_shortcode('company_list', 'sl_shortcode_company');

/**
 * Shortcode: [public_company_usa_list]
 * Acepta:
 *   [public_company_usa_list limit="100" offset="200"]
 */
function sl_shortcode_pcusa($atts = array()){
    $atts = shortcode_atts(array(
        'limit'  => -1,
        'offset' => 0,
    ), $atts, 'public_company_usa_list');

    $opts = array(
        'posts_per_page' => intval($atts['limit']),
        'offset'         => intval($atts['offset']),
    );

    return sl_render_simple_list('public_company_usa', $opts);
}
add_shortcode('public_company_usa_list', 'sl_shortcode_pcusa');

// Change the URL format of each “alternatives” blog post to “/blog/[competitor]-alternatives” instead of “/top-[X]-alternatives-to-competitor-in-2026/”

add_action('init', function () {

    $rewrites = [
        'findymail-alternatives'        => 'top-9-alternatives-to-findymail-in-2026',
        'fullenrich-alternatives'      => 'top-9-alternatives-to-fullenrich-in-2026',
        'apollo-alternatives'          => 'top-9-alternatives-to-apollo-io-in-2026',
        'evaboot-alternatives'         => 'top-9-alternatives-to-evaboot-in-2026',
        'lusha-alternatives'           => 'top-8-alternatives-to-lusha-in-2026',
        'prospecto-alternatives'       => 'top-9-alternatives-to-prospeo-io-in-2026',
        'skrapp-alternatives'          => 'top-9-alternatives-to-skrapp-io-in-2026',
        'hunter-alternatives'          => 'top-9-alternatives-to-hunter-in-2026',
        'zoominfo-alternatives'        => 'zoominfo-alternatives-in-2026',
        'seamless-ai-alternatives'     => 'top-9-alternatives-to-seamless-ai-in-2026',
        'surfe-alternatives'           => 'top-10-alternatives-to-surfe-in-2026',
        'snov-alternatives'            => 'top-9-alternatives-to-snov-io-in-2026',
        'kaspr-alternatives'           => 'top-9-alternatives-to-kaspr-in-2026',
        'cognism-alternatives'         => 'top-9-alternatives-to-cognism-in-2026',
        'amplemarket-alternatives'     => 'top-9-alternatives-to-amplemarket-in-2026',
        'anymail-finder-alternatives'  => 'top-9-alternatives-to-anymail-finder-in-2026',
        'contactout-alternatives'      => 'top-8-alternatives-to-contactout-in-2026',
        'datagma-alternatives'         => 'top-8-alternatives-to-datagma-in-2026',
        'enrow-alternatives'           => 'top-9-alternatives-to-enrow-in-2026',
        'get-prospect-alternatives'    => 'top-9-alternatives-to-getprospect-in-2026',
        'icypeas-alternatives'         => 'top-9-alternatives-to-icypeas-in-2026',
        'lead-magic-alternatives'      => 'top-9-alternatives-to-lead-magic-in-2026',
        'leadfuze-alternatives'        => 'top-9-alternatives-to-leadfuze-in-2026',
        'saleshandy-alternatives'      => 'top-9-alternatives-to-saleshandy-email-finder-in-2026',
        'swordfish-alternatives'       => 'top-9-swordfish-ai-alternatives-in-2026',
        'rocketreach-alternatives'     => 'top-9-rocketreach-alternatives-in-2026',
        'uplead-alternatives'          => 'top-9-uplead-alternatives-in-2026',
        'dropcontact-alternatives'     => 'top-9-alternatives-to-dropcontact-in-2026',
        'phantombuster-alternatives'   => 'top-9-alternatives-to-phantombuster-in-2026',
    ];

    foreach ($rewrites as $new_slug => $old_slug) {
        add_rewrite_rule(
            '^blog/' . $new_slug . '/?$',
            'index.php?name=' . $old_slug,
            'top'
        );
    }
});


// Delete your data form sent to slack channel
add_action('elementor_pro/forms/new_record', function($record, $handler) {

    // Only target specific form by form ID (safer)
    $form_name = $record->get_form_settings('form_name');

    if ($form_name !== 'New Form') {
        return;
    }

    $fields = $record->get('fields');

    // Safe extraction using updated IDs
    $first_name = $fields['first_name']['value'] ?? '';
    $last_name  = $fields['last_name']['value'] ?? '';
    $email      = $fields['email']['value'] ?? '';
    $phone      = $fields['phone']['value'] ?? 'Not Provided';

    $webhook_url = ( defined( 'SCALELIST_SLACK_WEBHOOK_1' ) ? SCALELIST_SLACK_WEBHOOK_1 : '' );

    $body = wp_json_encode([
        'text' => "🚨 A user is requesting to delete their information:\n\n" .
                  "First Name: {$first_name}\n" .
                  "Last Name: {$last_name}\n" .
                  "Email: {$email}\n" .
                  "Phone: {$phone}"
    ]);

    // Non-blocking request
    wp_remote_post($webhook_url, [
        'headers'  => ['Content-Type' => 'application/json'],
        'body'     => $body,
        'timeout'  => 5,
        'blocking' => false,
    ]);

}, 10, 2);

// Sales Questionnaire form integration with Hubspot
add_action( 'elementor_pro/forms/new_record', function( $record, $handler ) {

    if ( 'questionnaire-form' !== $record->get_form_settings( 'form_name' ) ) {
        return;
    }

    // =========================
    // GET FORM DATA
    // =========================
    $raw_fields = $record->get( 'fields' );
    $data = [];

    foreach ( $raw_fields as $id => $field ) {
        $data[$id] = $field['value'] ?? '';
    }

    $email = $data['email'] ?? '';

    if ( empty($email) ) {
        error_log('HubSpot: Email missing');
        return;
    }

    $token = ( defined( 'SCALELIST_HUBSPOT_TOKEN_1' ) ? SCALELIST_HUBSPOT_TOKEN_1 : '' );

    // =========================
    // REGION FIX
    // =========================
    $region_value = '';

    $all_fields = $record->get('fields');

    if ( isset($all_fields['region']) ) {

        $raw = $all_fields['region']['value'];

        if ( is_array($raw) ) {
            $regions = $raw;
        } else {
            $regions = explode(',', $raw);
        }

        $regions = array_map('trim', $regions);
        $regions = array_filter($regions);
        $regions = array_unique($regions);

        $region_value = implode(', ', $regions);
    }

    // =========================
    // 1. CREATE CONTACT
    // =========================
    $contact_id = null;

    $contact_response = wp_remote_post(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        [
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type'  => 'application/json',
            ],
            'body' => wp_json_encode([
                'properties' => [
                    'email'     => $email,
                    'firstname' => $data['first_name'] ?? '',
                    'lastname'  => $data['last_name'] ?? '',
                    'phone'     => $data['phone_number'] ?? '',
                    'country'   => $region_value,
                    'number_of_users' => $data['number_users'] ?? '',
                    'additional_details___questions' => $data['additional_questions'] ?? '',
                    'company_url' => $data['company_url'] ?? '',
                ]
            ])
        ]
    );

    if ( !is_wp_error($contact_response) ) {
        $body = json_decode( wp_remote_retrieve_body($contact_response), true );
        $contact_id = $body['id'] ?? null;
    }

    // =========================
    // SEARCH CONTACT (Fallback)
    // =========================
    if ( !$contact_id ) {

        $search = wp_remote_post(
            'https://api.hubapi.com/crm/v3/objects/contacts/search',
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type'  => 'application/json',
                ],
                'body' => wp_json_encode([
                    'filterGroups' => [[
                        'filters' => [[
                            'propertyName' => 'email',
                            'operator' => 'EQ',
                            'value' => $email
                        ]]
                    ]]
                ])
            ]
        );

        if ( !is_wp_error($search) ) {
            $search_body = json_decode( wp_remote_retrieve_body($search), true );
            $contact_id = $search_body['results'][0]['id'] ?? null;
        }
    }

    if ( !$contact_id ) {
        error_log('HubSpot FAIL: Contact not found');
        return;
    }

    // =========================
    // UPDATE CONTACT
    // =========================
    wp_remote_request(
        "https://api.hubapi.com/crm/v3/objects/contacts/{$contact_id}",
        [
            'method' => 'PATCH',
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type'  => 'application/json',
            ],
            'body' => wp_json_encode([
                'properties' => [
                    'firstname' => $data['first_name'] ?? '',
                    'lastname'  => $data['last_name'] ?? '',
                    'phone'     => $data['phone_number'] ?? '',
                    'country'   => $region_value,
                    'number_of_users' => $data['number_users'] ?? '',
                    'additional_details___questions' => $data['additional_questions'] ?? '',
                    'company_url' => $data['company_url'] ?? '',
                ]
            ])
        ]
    );

// =========================
// 4. CREATE DEAL (FINAL FIXED + CLOSE DATE)
// =========================

$deal_name = !empty($data['company_url']) 
    ? $data['company_url'] 
    : trim(($data['first_name'] ?? '') . ' ' . ($data['last_name'] ?? ''));

// ✅ YOUR VERIFIED VALUES
$hubspot_owner_id = '774109894';

// Calculate Close Date: Today + 30 days in MM/DD/YYYY
$close_date = date('Y-m-d', strtotime('+30 days'));

$deal_response = wp_remote_post(
    'https://api.hubapi.com/crm/v3/objects/deals',
    [
        'headers' => [
            'Authorization' => 'Bearer ' . $token,
            'Content-Type'  => 'application/json',
        ],
        'body' => wp_json_encode([
            'properties' => [
                'dealname'         => $deal_name,
                'pipeline'         => 'default',
                'dealstage'        => '226844145',
                'hubspot_owner_id' => $hubspot_owner_id,
                'dealtype'         => 'newbusiness',
                'hs_priority'      => 'low',
                'closedate'        => $close_date   // ✅ Added Close Date
            ]
        ])
    ]
);

// ❗ DO NOT BREAK FLOW IF DEAL FAILS
$deal_id = null;

if ( !is_wp_error($deal_response) ) {

    $deal_body = json_decode( wp_remote_retrieve_body($deal_response), true );
    $deal_id = $deal_body['id'] ?? null;

    if (!$deal_id) {
        error_log('Deal creation failed: ' . print_r($deal_body, true));
    }

} else {
    error_log('Deal API Error: ' . $deal_response->get_error_message());
}
    // =========================
    // ASSOCIATE DEAL ↔ CONTACT
    // =========================
    if ($deal_id) {
        wp_remote_request(
            "https://api.hubapi.com/crm/v3/objects/deals/{$deal_id}/associations/contacts/{$contact_id}/3",
            [
                'method'  => 'PUT',
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type'  => 'application/json',
                ]
            ]
        );
    }
	
	// =========================
    // SLACK INTEGRATION
    // =========================
    $slack_webhook_url = ( defined( 'SCALELIST_SLACK_WEBHOOK_2' ) ? SCALELIST_SLACK_WEBHOOK_2 : '' );

    if ( !empty( $slack_webhook_url ) && strpos( $slack_webhook_url, 'YOUR/WEBHOOK' ) === false ) {
        
        $first_name = $data['first_name'] ?? '';
        $last_name  = $data['last_name'] ?? '';
        $phone      = $data['phone_number'] ?? 'N/A';
        $company    = $data['company_url'] ?? 'N/A';
        $users      = $data['number_users'] ?? 'N/A';
        $questions  = $data['additional_questions'] ?? 'N/A';

        // Construct the line-by-line format cleanly
        $message_text  = "*Name:*\n" . trim($first_name . ' ' . $last_name) . "\n\n\n";
        $message_text .= "*Email:*\n" . $email . "\n\n\n";
        $message_text .= "*Phone:*\n" . $phone . "\n\n\n";
        $message_text .= "*Company URL:*\n" . $company . "\n\n\n";
        $message_text .= "*Number of Users:*\n" . $users . "\n\n\n";
        $message_text .= "*Region:*\n" . (!empty($region_value) ? $region_value : 'N/A') . "\n\n\n";
        $message_text .= "*Additional Details / Questions:*\n" . $questions;

        // Prepare the updated payload structures
        $slack_payload = [
            'text' => '🚀 Sales Questionnaire Submitted!',
            'blocks' => [
                [
                    'type' => 'header',
                    'text' => [
                        'type' => 'plain_text',
                        'text' => '🚀 Sales Questionnaire Submission',
                        'emoji' => true
                    ]
                ],
                [
                    'type' => 'section',
                    'text' => [
                        'type' => 'mrkdwn',
                        'text' => $message_text
                    ]
                ],
                [
                    'type' => 'divider'
                ],
                [
                    'type' => 'context',
                    'elements' => [
                        [
                            'type' => 'mrkdwn',
                            'text' => "Sent from Get a Demo - Sale Questionnaire Form"
                        ]
                    ]
                ]
            ]
        ];

        // Send payload to Slack
        $slack_response = wp_remote_post(
            $slack_webhook_url,
            [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'body'        => wp_json_encode( $slack_payload ),
                'method'      => 'POST',
                'data_format' => 'body',
            ]
        );

        if ( is_wp_error( $slack_response ) ) {
            error_log( 'Slack API Error: ' . $slack_response->get_error_message() );
        }
    }

}, 10, 2 );



// Handle Outbound Agency Questionnaire Submission to Slack & HubSpot //

add_action('wp_ajax_submit_scalelist_form', 'scalelist_send_to_slack_and_hubspot');
add_action('wp_ajax_nopriv_submit_scalelist_form', 'scalelist_send_to_slack_and_hubspot');

function scalelist_send_to_slack_and_hubspot() {
    // --- CONFIGURATION ---
    $slack_webhook_url = ( defined( 'SCALELIST_SLACK_WEBHOOK_2' ) ? SCALELIST_SLACK_WEBHOOK_2 : '' );
    $hubspot_token     = ( defined( 'SCALELIST_HUBSPOT_TOKEN_2' ) ? SCALELIST_HUBSPOT_TOKEN_2 : '' );
    $pipeline_stage    = '226844145'; 

    // Extract values
    $first_name       = sanitize_text_field($_POST['first_name']);
    $last_name        = sanitize_text_field($_POST['last_name']);
    $email            = sanitize_email($_POST['email']); 
    $company          = sanitize_text_field($_POST['company']);
    $job_title        = sanitize_text_field($_POST['job_title']);
    $phone            = sanitize_text_field($_POST['phone']);
    $use_case         = sanitize_text_field($_POST['use_case']);
    $sales_reps       = sanitize_text_field($_POST['sales_reps']);
    $using_software   = sanitize_text_field($_POST['using_software']);
    $company_size     = sanitize_text_field($_POST['company_size']);
    $monthly_contacts = sanitize_text_field($_POST['monthly_contacts']);

    $full_name = $first_name . ' ' . $last_name;

    // ----------------------------------------------------
    // 1. SLACK NOTIFICATION
    // ----------------------------------------------------
    $data = [
        'Use Case'        => $use_case,
        'Sales Reps'      => $sales_reps,
        'Full Name'       => $full_name,
        'Email'           => $email,
        'Company'         => $company,
        'Job Title'       => $job_title,
        'Phone'           => $phone,
        'Current Soft.'   => $using_software,
        'Company Size'    => $company_size,
        'Monthly Reach'   => $monthly_contacts,
    ];

    $blocks = [
        ["type" => "section", "text" => ["type" => "mrkdwn", "text" => "🚀 *Outbound Agency Questionnaire Submission*"]],
        ["type" => "divider"]
    ];
    foreach ($data as $label => $value) {
        $blocks[] = ["type" => "section", "text" => ["type" => "mrkdwn", "text" => "*{$label}:*\n{$value}\n\n"]];
    }
    $blocks[] = ["type" => "divider"];

    wp_remote_post($slack_webhook_url, [
        'method'  => 'POST',
        'headers' => ['Content-Type' => 'application/json'],
        'body'    => json_encode(["blocks" => $blocks]),
        'timeout' => 10,
    ]);

    // ----------------------------------------------------
    // 2. HUBSPOT CRM SYNCHRONIZATION WITH DUPLICATE HANDLING
    // ----------------------------------------------------
    $auth_header = 'Bearer ' . $hubspot_token;
    $contact_id = null;

    // Contact parameters payload
    $contact_payload = [
        'properties' => [
            'firstname' => $first_name,
            'lastname'  => $last_name,
            'email'     => $email,
            'phone'     => $phone,
            'company'   => $company,
            'jobtitle'  => $job_title
        ]
    ];

    // Try creating the Contact
    $contact_response = wp_remote_post('https://api.hubapi.com/crm/v3/objects/contacts', [
        'headers' => ['Authorization' => $auth_header, 'Content-Type' => 'application/json'],
        'body'    => json_encode($contact_payload),
        'timeout' => 15,
    ]);

    $res_code = wp_remote_retrieve_response_code($contact_response);
    $contact_body = json_decode(wp_remote_retrieve_body($contact_response), true);

    if ($res_code === 409 || (isset($contact_body['category']) && $contact_body['category'] === 'CONFLICT')) {
        // FIXED: Changed preg_include to preg_match
        if (preg_match('/ID:\s*(\d+)/', $contact_body['message'], $matches)) {
            $contact_id = $matches[1];
        } else if (isset($contact_body['message']) && preg_match('/id:\s*(\d+)/i', $contact_body['message'], $matches)) {
            $contact_id = $matches[1];
        }
        
        // Update the existing profile data safely so information remains fresh
        if ($contact_id) {
            wp_remote_post("https://api.hubapi.com/crm/v3/objects/contacts/{$contact_id}", [
                'method'  => 'PATCH',
                'headers' => ['Authorization' => $auth_header, 'Content-Type' => 'application/json'],
                'body'    => json_encode($contact_payload),
                'timeout' => 10,
            ]);
        }
    } else if (!is_wp_error($contact_response) && isset($contact_body['id'])) {
        // Fresh entry created successfully
        $contact_id = $contact_body['id'];
    }

    // Create Pipeline Deal Card
    $deal_payload = [
        'properties' => [
            'dealname'         => $company,
            'dealstage'        => $pipeline_stage,
            'pipeline'         => 'default', 
            'description'      => "Use Case: {$use_case}\nSales Reps: {$sales_reps}\nUsing Software: {$using_software}\nCompany Size: {$company_size}\nMonthly Reach: {$monthly_contacts}",            
        ]
    ];

    // Link contact safely using updated ID target paths
    if ($contact_id) {
        $deal_payload['associations'] = [[
            'to' => ['id' => $contact_id],
            'types' => [[
                'associationCategory' => 'HUBSPOT_DEFINED',
                'associationTypeId'   => 3 
            ]]
        ]];
    }

    $deal_response = wp_remote_post('https://api.hubapi.com/crm/v3/objects/deals', [
        'headers' => ['Authorization' => $auth_header, 'Content-Type' => 'application/json'],
        'body'    => json_encode($deal_payload),
        'timeout' => 15,
    ]);

    // Send final resolution data status response back to front end javascript
    if (is_wp_error($deal_response)) {
        wp_send_json_error('HubSpot Deal object execution failed.');
    } else {
        $deal_res_code = wp_remote_retrieve_response_code($deal_response);
        if ($deal_res_code >= 200 && $deal_res_code < 300) {
            wp_send_json_success();
        } else {
            $error_msg = wp_remote_retrieve_body($deal_response);
            wp_send_json_error('HubSpot API Response ' . $deal_res_code . ': ' . $error_msg);
        }
    }
    wp_die();
}



