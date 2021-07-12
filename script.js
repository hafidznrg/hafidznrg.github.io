$( '#navbar .navbar-nav div a' ).on( 'click', function () {
	if ($('#navbar .navbar-toggler').attr('aria-expanded') === 'false') {
		$( '#navbar .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
		$( this ).parent( 'div' ).addClass( 'active' );
	};
	$( '#navbar .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
	$( this ).parent( 'div' ).addClass( 'active' );
});

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
    
//     if (scroll> 70){
//         $( '#navbar' ).addClass( 'scroll' )
//     }
//     else{
//         $( '#navbar' ).removeClass( 'scroll' )
//     }
// });

$( '#navbar .navbar-toggler' ).on('click', function() {
    // $( '#navbar .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
	if ($('#navbar .navbar-toggler').attr('aria-expanded') === 'true') {
		$( '#navbar .navbar-collapse .box-nav' ).addClass( 'nav-responsive' );
	};
});

$("#wrapper").click( function() {
	$(".icon").toggleClass("close");
});