<?php 

/*
The custom-shortcode.php file is where you define these 
custom shortcodes and their corresponding functionality.
*/


function carousel() {
?>

<div class="reviews-container">
    <div class="review-inner rating-word">
        <div class="expanded-content">
            <h3>TESTIMONIALS</h3>
            <h2>Don’t take our word for it. See what our clients have to say.</h2>
            <div class="custom-owl-nav">
                <button type="button" role="presentation" class="owl-prev customPrevBtn"><i class="fa fa-arrow-left"></i></button>								
                <button type="button" role="presentation" class="owl-next customNextBtn"><i class="fa fa-arrow-right"></i></button>				
            </div>
            <?php
                $home_url_with_slash = trailingslashit(home_url());
                $custom_link = "reviews";
                $formatted_link = $home_url_with_slash . $custom_link;
            ?>
            <a href="<?php echo $formatted_link; ?>" class="elementor-button">Read more Reviews</a>
        </div>
    </div>
    <div class="review-inner rating-row">
        <?php
            $args = array(
                'post_type'      => 'testimonial',
                'posts_per_page' => -1,
                'order'          => 'DESC',
                'orderby'        => 'date',
                'tax_query'      => array(
                    array(
                        'taxonomy' => 'taxonomy_here',
                        'field'    => 'slug',
                        'terms'    => 'terms_here',
                    ),
                ),
            );
        ?>
        <div id="google-testi" class="owl-carousel owl-theme">
        <?php
            $custom_query = new WP_Query( $args );
            if ( $custom_query->have_posts() ) {
                while ( $custom_query->have_posts() ) {
                    $custom_query->the_post();
                    ?>
                        <div class="owl-cont">
                            <div class="testi-content">
                                <p><?php echo get_field('testimonial'); ?></p>
                            </div>
                            <div class="testi-meta">
                                <img src="<?php echo get_field('photo'); ?>">
                                <h6><?php echo get_field('name'); ?></h6>
                            </div>
                        </div>
                <?php
                }
            } else {
                echo "No Testimonials";
            }
            
            // Restore original Post Data
            wp_reset_postdata();
        ?>
        </div>
    </div>
</div>
<?php
}

add_shortcode('custom_carousel', 'carousel');

function embed_map () {
?>
    <iframe style="border: 0;" src="<?php echo get_field('google_map_embed'); ?>" width="700" height="350" allowfullscreen="allowfullscreen"></iframe>
<?php 
}
add_shortcode("map_embed", "embed_map");
?>



<!--  google tag manager -->
<script id='gtagmanager'>
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
												  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-TDF483N9');
	document.dispatchEvent(new Event('onGtmLoaded'));
</script>
<script id='gtagscript' src='https://www.googletagmanager.com/gtag/js?id=G-W7MTZ398TK'></script>
<script id='gtag' >
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-W7MTZ398TK');
	document.dispatchEvent(new Event('onGtagLoaded'));
</script>
<noscript> 
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDF483N9" height="0" width="0" style="display: none; visibility: hidden;" />
</noscript>
<!--  google tag manager -->

<!-- Microsoft Clarity  -->
<script id='microsoft-clarity' strategy='lazyOnload'>
(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "fyrwyqzlpz");
</script>
<!-- Microsoft Clarity -->