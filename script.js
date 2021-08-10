$( '#navbar .navbar-nav a' ).on( 'click', function () {
	$( '#navbar .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
	$( this ).addClass( 'active' );
	let section = $( this ).attr( 'aria-label' );
	$( '.main' ).find( 'section' ).addClass( 'hidden' );
	$( '.main #'+ section ).removeClass( 'hidden' );
	$(window).scrollTop(0);
});

$( '#navbar .navbar-toggler' ).on('click', function() {
	if ($('#navbar .navbar-toggler').attr('aria-expanded') === 'true') {
		// $( '#navbar .nav-link' ).addClass('my-3');
		$( '#navbar' ).addClass( 'nav-responsive fadeIn' ).removeClass( 'fadeOut' );
	} else {
		// $( '#navbar .nav-link' ).removeClass('my-3');
		$( '#navbar' ).removeClass( 'nav-responsive fadeIn' ).addClass( 'fadeOut' );
	};
});

$( '#contact .submit-button' ).on('click', function() {
	// console.log("terkirim");
})

// Belum bisa implementasinya
// var form = document.getElementById("myform");
    
//     async function handleSubmit(event) {
//       event.preventDefault();
//       var status = document.getElementById("my-form-status");
//       var data = new FormData(event.target);
//       fetch(event.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//       }).then(response => {
//         status.innerHTML = "Thanks for your submission!";
//         form.reset()
//       }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//       });
//     }
//     form.addEventListener("submit", handleSubmit)