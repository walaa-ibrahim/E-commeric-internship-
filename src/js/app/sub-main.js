
//product view page 
if(window.location.pathname.includes('product-view.html')) {
	console.log('yes')
	/*if( $('body').css('direction') == 'rtl') {
		console.log('yes');
		$('.product-view__imgs-viewer .row').css('flexDirection', 'row-reverse')
	}*/
	//fire picZommer plugin
 	$('.picZoomer').picZoomer();
	var myImages= Array.from(document.querySelectorAll('.img-viewer'));
	var lightboxContainer=$('.product-view__box-ontainer');
	//console.log(myImages)
	//event of show lightboxContainer when click on img
	var currentImgIndx='';
	for (var i = 0; i < myImages.length; i++) {
		myImages[i].addEventListener('click', function(e){
			e.preventDefault;
			var imgSrc=e.target.src;
			currentImgIndx= myImages.indexOf(e.target);
			console.log(currentImgIndx);
			var imgSrc=e.target.src;
			//console.log(imgSrc)
			document.getElementById('lightboxContainer').innerHTML= "<div class='picZoomer'><img src='"+imgSrc+"'></div>";
			$('.picZoomer').picZoomer();
		});	//End Event when click on img
	};//End for loop
	// ==== Swiper Slider in product-view.html ==== //
	//fire swiper.js plugin in tablet screen
	var x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) { // If media query matches
			var swiper = new Swiper('.swiper-container', {
				// Default parameters
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				autoplay: {
					delay: 4500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				},
			});
		} 
	}// ====End Swiper Slider in product-view.html ==== //
   
   myFunction(x) // Call listener function at run time
   
	$('.wishlis').click(function () { 
	console.log('yes')
	$('.wishlis').toggleClass('wish-act')
	});

} 








