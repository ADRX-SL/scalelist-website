(function($){
//    var owl = $('#google-testi');
//    owl.owlCarousel({
// 		loop:true,
//         items: 3,
// 		margin:15,
// 		autoplay: true,
// 		nav:true,
// 		items: 1,
// 		dots: false,
// 		slideBy: 1,
// 		responsive:{
// 			0:{
// 				items:1,
// 				dots: true,
// 				nav: false
// 			},
//             1024:{
// 				items: 2,
// 				dots: true,
// 				nav: false
// 			},
//             1366:{
// 				items: 3,
// 				dots: true,
// 				nav: false
// 			}
// 		}
// 	});
//     $(".owl-next").click(function() {
//         owl.trigger('next.owl.carousel');
//       });
  
//       // Custom prev button
//       $(".owl-prev").click(function() {
//         owl.trigger('prev.owl.carousel');
//       });
// 	  $('.is-search-form input[type="search"]').attr('placeholder', 'Search blog...');

$("#openCrisp, .contact-header a").click(function() {
    // Trigger Crisp chat open
    $crisp.push(['do', 'chat:open']);
});
})(jQuery);

