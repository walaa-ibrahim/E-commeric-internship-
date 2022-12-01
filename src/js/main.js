const nav = document.querySelector('.fixed-menu')
const navMenu = document.querySelector('.nav_menu')
const menuToggler = document.querySelector('.menu-toggler')
const navMenuItem = document.querySelectorAll('.nav_menu-item')
const navMenuName = document.querySelectorAll(".nav_submenu1-name")
const menuCloser = document.querySelectorAll('.menu-closer')
const signingMenu = document.querySelector('.signing_menu')
const signingToggler = document.querySelector('.signing_toggler')
if (window.location.pathname.includes('index.html')){
  nav.style.borderBottom='1px solid transparent'
}else{
  nav.style.borderBottom='1px solid #E5E5E5'
}
// Hanlding Events of the navbar Main Menu Items 
navMenuItem.forEach(item => {

  // Hover/Unhover Event on the Main Menu Items in the large screens
  // Open & Close SubMenus Area 
  item.onmouseover = function() {
	if (window.innerWidth >= 768.9) {
	  this.querySelector('.nav_submenus').classList.add('active')
	} 
  }

  item.onmouseleave = function() {
	if (window.innerWidth >= 768.9) {
	  this.querySelector('.nav_submenus').classList.remove('active')
	} 
  }

  // Click Event on the Main Menu Items in the small screens
  // Open SubMenus Area (<li> names only)
  item.onclick = function(e) {
	e.stopPropagation()
	if (window.innerWidth < 768.9 && !this.querySelector('.nav_submenu1').className.includes('active')) {
	  this.querySelector('.nav_submenu1').classList.add('active')
	} 

  }
})

// Click Event on the Submenu Items in small screen 
// Open last Submenu 
navMenuName.forEach(name => {
  name.onclick = function(e) {
	e.stopPropagation()
	if (window.innerWidth < 768.9 && !this.nextElementSibling.className.includes('active')) {
	  this.nextElementSibling.classList.add('active')
	}
  }
})

// Click Event on the closer button of Menus
menuCloser.forEach(item => {
  item.onclick = function(e) {
	e.stopPropagation()
	if (this.parentElement.className.includes('active')) {
		this.parentElement.classList.remove('active')
		
	}
  }
})

// Event click on the Menu Toggler
// Open & Close Nav Menu in small screens
menuToggler.onclick = function(e) {
  e.stopPropagation()
  if (!navMenu.className.includes('active')) {
	navMenu.classList.add('active')
	this.classList.add('active')
  }

  else {
	navMenu.classList.remove('active')
	this.classList.remove('active')
  }
}


// Open & Close Signing Menu on icon click
signingToggler.onclick = function(e) {
  e.stopPropagation()
  if (!signingMenu.className.includes('active')) {
	signingMenu.classList.add('active')
	this.classList.add('active')
  }
  else {
	signingMenu.classList.remove('active')
	this.classList.remove('active')
  }
}

// Event Click on the window to close the opened Menu
window.onclick = () => {

  // close the nav menu in small screen
  if (navMenu.className.includes('active')) {
	navMenu.classList.remove('active')
	menuToggler.classList.remove('active')
	navMenu.querySelectorAll('.active').forEach(ele => {
	  ele.classList.remove('active')
	})
  }

  // close the signing menu
  if (signingMenu.className.includes('active')) {
	signingMenu.classList.remove('active')
	signingToggler.classList.remove('active')
  }
}

// Event Keydown on the window to close the opened Menu
window.onkeydown = function(e) {

  // close the nav menu in small screen
  if (e.keyCode === 27 && navMenu.className.includes('active')) {
	navMenu.classList.remove('active')
	menuToggler.classList.remove('active')
	navMenu.querySelectorAll('.active').forEach(ele => {
	  ele.classList.remove('active')
	})
  }

  // close the signing menu
  if (e.keyCode === 27 && signingMenu.className.includes('active')) {
	signingMenu.classList.remove('active')
	signingToggler.classList.remove('active')
  }
}

// Change the background color of navbar on window scroll
if (window.location.pathname.includes('index.html')){
  nav.classList.add('nav-style');
  
}

window.onscroll = () => {
  if (window.pageYOffset > 100) {
  nav.classList.add('scrolled')
  }

  else {
  nav.classList.remove('scrolled')
  }
}
var forgetPass= document.querySelector('.forget-pass')
forgetPass.addEventListener('click',function(){
  document.querySelector('.modal-body').innerHTML=`
  <!--sign up section-->
    <section class="sign-up login">
      <!--Container-->
      <div class="container">
        <div class="sign-up__content">
          <div class="sign-up__content-header text-center">
            <h3>Forgot your password?</h3>
              <p class="dummy-text text-center">Enter your email or phone number<br/>  and recover your account</p>
          </div>
          <form action="" method="" id="myForm">
            <div class="form-group mb-3">
              <input type="email" class="form-control user-mail" name="uEmail" placeholder="Email">
              <div class="alert alert-danger my-2" id="mail-lert">Please Enter Right Mail</div>
            </div>
            <div class="or"><p>OR</p></div>
            <div class="form-group mb-3">
                <input id="phone" name="phone" type="tel" class="form-control" placeholder="Phone number">
            </div>
            <button class="sign-btn" type="submit">Reset Password</button>
          </form>
        </div>
      </div><!--End Container-->
    </section><!--sign up section-->
  `
})
//console.log(forgetPass)

// ========================================================================= //

// ========================================================================= //
// ========================================================================= //
// ======================== Swiper Slider in index.html =============================== //
if (window.location.pathname.includes('index.html')){
    const swiperSlider = document.querySelector('.swiper-container')
    const scrollbarWrapper = document.querySelector('.scrollbar_indicator-wrapper')
    const scrollbarIndicator = document.querySelector('.scrollbar-indicator')
    const nextBtn = document.querySelector('.swiper-next')
    const prevBtn = document.querySelector('.swiper-prev')
    const slides = [1, 2, 3]
    const indicatorHeight = scrollbarWrapper.clientHeight / slides.length
    let currentIndex = 1
 
    // Initialize swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
        breakpoints : {
        992 : {
          allowTouchMove: false
        }
      }
  
    });

 // Set the height of the scrollbar indicator
 scrollbarIndicator.style.height = `${indicatorHeight}px`
 // Click event to slide right and left
 prevBtn.onclick = function() {
   if (currentIndex !== slides.length) {
	 currentIndex++
	 scrollbarIndicator.style.top = `${indicatorHeight + scrollbarIndicator.offsetTop}px`
   }
   else {
	 currentIndex = 1
	 scrollbarIndicator.style.top = '0px'
   }
   this.classList.add('active')
   nextBtn.classList.remove('active')
 }
 
 nextBtn.onclick = function() {
   if (currentIndex !== 1) {
	 currentIndex--
	 scrollbarIndicator.style.top = `${scrollbarIndicator.offsetTop - indicatorHeight}px`
   }
   else {
	 currentIndex = slides.length
	 scrollbarIndicator.style.top = `${(indicatorHeight * slides.length) - indicatorHeight}px`
   }
   this.classList.add('active')
   prevBtn.classList.remove('active')
 }
 /* selected for you section carousel start*/

}
$('.selected-for-you__carousel').owlCarousel({
  rtl: $('body').css('direction') == 'rtl' ? true : false,
  loop:true,
  margin:10,
  responsiveClass:true,
  dots:false,
  nav:false,
  responsive:{
      0:{
          items:2.6,
          autoplay:true,
          
          autoplayTimeout:3500
      },
      480:{
      items:2.6,
      autoplay:true,
          autoplayTimeout:3500
      },
      768:{
      items:2.6,
      autoplay:true,
      autoplayTimeout:3500,
      },
      1000:{
          items:4.4,
          autoplay:false,
      }
  }
});
/* selected for you section carousel end*/

//##################### Shopping.html page #######################//
if (window.location.pathname.includes('shopping.html')){
  const prodRemover = document.querySelectorAll('.product_remove')
    prodRemover.forEach(item => {
    item.onclick = function() {
        this.parentElement.remove()
    }
})
}


