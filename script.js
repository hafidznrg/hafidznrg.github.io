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

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	console.log(scroll);
    
    // if (scroll> 70){
    //     $( '#navbar' ).addClass( 'scroll' )
    // }
    // else{
    //     $( '#navbar' ).removeClass( 'scroll' )
    // }
});

$( '#navbar .navbar-toggler' ).on('click', function() {
    // $( '#navbar .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
	if ($('#navbar .navbar-toggler').attr('aria-expanded') === 'true') {
		$( '#navbar .navbar-collapse .box-nav' ).addClass( 'nav-responsive' );
	};
});

// $("#wrapper").click( function() {
// 	$(".icon").toggleClass("close");
// });