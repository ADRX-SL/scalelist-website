<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$viewport_content = apply_filters( 'hello_elementor_viewport_content', 'width=device-width, initial-scale=1' );
$enable_skip_link = apply_filters( 'hello_elementor_enable_skip_link', true );
$skip_link_url = apply_filters( 'hello_elementor_skip_link_url', '#content' );
?>
<!doctype html>

<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="<?php echo esc_attr( $viewport_content ); ?>">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<!-- Intercom -->
	<script>
	  window.intercomSettings = { app_id: "va9omxmp" };
	</script>
	<script>
	  (function() {
		var w = window; var ic = w.Intercom;
		if (typeof ic === "function") { ic('reattach_activator'); ic('update', intercomSettings); }
		else {
		  var d = document; var i = function(){ i.c(arguments); }; i.q = []; i.c = function(args){ i.q.push(args); };
		  w.Intercom = i;
		  function l(){
			var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true;
			s.src = 'https://widget.intercom.io/widget/va9omxmp';
			var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
		  }
		  if (document.readyState === 'complete') l();
		  else if (w.attachEvent) w.attachEvent('onload', l);
		  else w.addEventListener('load', l, false);
		}
	  })();
	</script>
	<!-- End Intercom -->

	<!-- Google Tag Manager -->
	<script>
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KTCTBTN3');
	</script>
	<!-- End Google Tag Manager -->
	
	<?php wp_head(); ?>
	
	<!-- Reb2B -->
	<script>
	  !function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;
	  reb2b.methods=["identify","collect"];reb2b.factory=function(m){return function(){var a=[].slice.call(arguments);a.unshift(m);reb2b.push(a);return reb2b;}};
	  for(var i=0;i<reb2b.methods.length;i++){var k=reb2b.methods[i];reb2b[k]=reb2b.factory(k);}
	  reb2b.load=function(key){var s=document.createElement("script");s.type="text/javascript";s.async=true;
	  s.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/reb2b.js.gz";
	  var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(s,f);};
	  reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("46DJ4HM5JL61");}();
	</script>
	<!-- End Reb2B -->	
	
	<!-- Microsoft Clarity (ideal mover a GTM; si no, dejar aquí) -->
	<script>
	  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
	  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
	  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "fyrwyqzlpz");
	</script>
	<!-- End Microsoft Clarity -->
	
	<style>
	  .micro-monthly,.micro-annual{opacity:0;width:10%!important;}
	</style>
	
	<script>
	  window.addEventListener("message", (event) => {
		// (optional) restrict to only accept from your subdomain
		if (event.origin !== "https://app.scalelist.com") return;

		if (event.data?.type === "iframeHeight") {
		  document.querySelector("iframe").style.height =
			event.data.height + "px";
		}
	  });
	</script>
	<script
	  defer
	  data-website-id="dfid_69016cfec0d1160fad9dce59"
	  data-domain="scalelist.com"
	  src="https://datafa.st/js/script.js"
	></script>
</head>
	
<body <?php body_class(); ?>>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTCTBTN3"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->	
	
<?php wp_body_open(); ?>
	
<?php if ( $enable_skip_link ) { ?>
<a class="skip-link screen-reader-text" href="<?php echo esc_url( $skip_link_url ); ?>"><?php echo esc_html__( 'Skip to content', 'hello-elementor' ); ?></a>
<?php } ?>

<?php
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'header' ) ) {
	if ( did_action( 'elementor/loaded' ) && hello_header_footer_experiment_active() ) {
		get_template_part( 'template-parts/dynamic-header' );
	} else {
		get_template_part( 'template-parts/header' );
	}
}