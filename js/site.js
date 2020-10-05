function setupSliders () {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const mainSlider = new Swiper('#header-slider.swiper-container', {
        speed: 400,
        autoplay: {
            delay: 5000,
        },
        width: vw,
        height: vh
    });

    mainSlider.autoplay.start();

    const productSlider = new Swiper('#product-slider.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000, //ms
        },
    });

    productSlider.autoplay.start();

    const productMobileSlider = new Swiper('#product-slider-mobile.swiper-container', {
      speed: 400,
      autoplay: {
          delay: 5000,
      },
      width: vw,
      height: vh
  });

  productMobileSlider.autoplay.start();
}

document.addEventListener('DOMContentLoaded', function (event) {
    setupSliders();
    AOS.init();
    setUpScroll();
});

function setUpScroll() {
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      // When in mobile
      if (this.hash.indexOf('-mobile') > 0) {
        document.querySelector('#menuToggle input').checked = false;
      }
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}




