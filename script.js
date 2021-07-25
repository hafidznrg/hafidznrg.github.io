$( '#navbar .navbar-nav a' ).on( 'click', function () {
	$( '#navbar .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).addClass( 'active' );
	let section = $( this ).attr( 'aria-label' );
	$( '.main' ).find( 'section' ).addClass( 'hidden' );
	$( '.main #'+ section ).removeClass( 'hidden' );
	// window.scrollTo(0,0);
	// $('html, body').animate({scrollTop: $(window).offset().top}, 0);
	$(window).scrollTop(0);
});

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
// 	console.log(scroll);
    
    // if (scroll> 70){
    //     $( '#navbar' ).addClass( 'scroll' )
    // }
    // else{
    //     $( '#navbar' ).removeClass( 'scroll' )
    // }
// });

$( '#navbar .navbar-toggler' ).on('click', function() {
	// console.log($( '#navbar' ).hasClass( 'bg-white' ));
	// if ($( '#navbar' ).hasClass( 'bg-white' )){
	// 	$( '#navbar' ).removeClass( 'bg-white' );
	// } else {
	// 	$( '#navbar' ).addClass( 'bg-white' );
	// }
	if ($('#navbar .navbar-toggler').attr('aria-expanded') === 'true') {
		$( '#navbar .navbar-collapse .box-nav' ).addClass( 'nav-responsive' );
		$( '#navbar' ).removeClass( 'fadeOut' ).addClass( ' bg-white fadeIn');
	} else {
		$( '#navbar .navbar-collapse .box-nav' ).removeClass( 'nav-responsive' );
		$( '#navbar' ).removeClass( ' bg-white fadeIn' ).addClass( 'fadeOut');
	};
});

// $("#wrapper").click( function() {
// 	$(".icon").toggleClass("close");
// });