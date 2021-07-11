$( '#navbar .navbar-nav div a' ).on( 'click', function () {
	if ($('#navbar .navbar-toggler').attr('aria-expanded') === 'false') {
		$( '#navbar .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
		$( this ).parent( 'div' ).addClass( 'active' );
	};
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
    $( '#navbar .navbar-nav' ).find( 'div.active' ).removeClass( 'active' );
});

$("#wrapper").click( function() {
	$(".icon").toggleClass("close");
});