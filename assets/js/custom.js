/* =====================================
    Template Name: Orion Construction - Tailwind HTML5 Template
    Author Name: WebbyCrown
    Description: Orion Construction - Tailwind HTML5 Template.
    Version:1.0
========================================*/

/*======================================
[ JS Table of contents ]
01. General Open JS
    + Mobile menu
    + Mobile menu dropdown
    + AOS
    + Page scroll to Header sticky

02. Slider Open JS
    + What we do slider
    + Testimonial slider
    + Customer Reviews slider
    + Photos Gallery slider
    + Trending Attractions slider
    + Popular Tours slider
    + Testimonial full slider

03. Popup Open JS
    + Cookie popup js
    + Newsletter Popup JS
    + Our Teachers popup
    + Enquiry form Popup JS
04. Preloader JS
05. Isotope JS



========================================*/

(function ($) {
  journea_travel_agency = {
    init: function() {
      // Home one js
      this.general_open();
      this.slider_open();
      this.popup_open();
      this.Isotope_js();
      this.Preloader_js();

    },

    /*======================================
     01. General Open JS
    ========================================*/
    general_open: function() {

      /* Mobile menu */
      $(document).on("click", ".toggle-menu-button a, .mobile-menu .menu-close a", function(){
        $('.mobile-menu').toggleClass("open");
        //$(this).toggleClass("active");
      });

      $(document).on("click", ".mobile-toggle", function(){
        $('#navbar-default').toggleClass("open");
        $(this).toggleClass("active");
      });

      /* Mobile menu dropdown*/
      if( $(window).width() <= 991 ) {
      $(".main-menu ul > li").each(function (i) {
        if ($(this).has(".dropdown-menu").length)
        {
          $(this).find('.dropdown-menu').addClass("sub-menu");
          $(this).find('> a').after('<span class="caret-arrow"></span>');
          $(this).find('> .sub-menu').css('display', 'none');
        }
      });
      $('.main-menu ul li .caret-arrow').click(function () {
        var catSubUl = $(this).next('.sub-menu');
        var catSubli = $(this).closest('li');
        if (catSubUl.is(':hidden'))
        {
            //$("#window > ul > li .sub-menu").slideUp();
          catSubUl.slideDown();
            //$('.caret').removeClass('active');
          $(this).addClass('sub-active');
          catSubli.addClass('sub-active');
        }
        else
        {
          catSubUl.slideUp();
          $(this).removeClass('sub-active');
          catSubli.removeClass('sub-active');
        }
      });
    }

      /* Search Popup */
      $(document).on("click", ".search-icon a, .close-search", function(){
        $('body').toggleClass("search-active");
      });


      /* Page scroll to Header sticky */
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0){  
          $('.header').addClass("sticky-header");
        }
        else{
          $('.header').removeClass("sticky-header");
        }
      });


      $(".scroll-menu").on('click', 'a', function(event) {
            $('.scroll-menu a').removeClass("bg-primary-900 text-white");
            event.preventDefault();
            var full_url = this.href;
            var parts = full_url.split("#");
            var trgt = parts[1];
            var target_offset = $("#" + trgt).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop: target_top - 100 }, 0);
            $(this).addClass("bg-primary-900 text-white");
        });

if( $('#container').length > 0 ){
      $('#container').imagesLoaded({
        background: true
      });
}

        /*https://codepen.io/digvijayad/pen/RegBxg*/
      if ($('.repeater').length>0){
        $('.repeater').repeater({
            initEmpty: false,
            defaultValues: {
                'text-input': 'foo'
            },
            show: function () {
                $(this).slideDown();
            },
            hide: function (deleteElement) {
                if(confirm('Are you sure you want to delete this element?')) {
                    $(this).slideUp(deleteElement);
                }
            },
            ready: function (setIndexes) {
            },
            isFirstItemUndeletable: true
        });
      }
 
      


    },

    /*======================================
     02. Slider Open JS
    ========================================*/
    slider_open: function() {

      /* Testimonials slider */
      var swiper = new Swiper(".testimonials-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: ".testimonials-slider .swiper-button-next",
          prevEl: ".testimonials-slider .swiper-button-prev",
        },
      });

      /* Our Work slider */
      var swiper = new Swiper(".our-work-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".customers-purchased-section .swiper-button-next",
          prevEl: ".customers-purchased-section .swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1199: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
        },
      });

      /* Our Projects slider */
      var swiper = new Swiper(".our-projects-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".our-projects-slider .swiper-button-next",
          prevEl: ".our-projects-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });

      /* Our Blog Grid slider */
      var swiper = new Swiper(".blog-grid-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".blog-grid-slider .swiper-button-next",
          prevEl: ".blog-grid-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });

      /* Special offers & Discounts slider */
      var swiper = new Swiper(".our-gallery-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        autoplay:true,
        navigation: {
          nextEl: ".our-gallery-slider .swiper-button-next",
          prevEl: ".our-gallery-slider .swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

        },
      });

      /* Special offers & Discounts slider */
      var swiper = new Swiper(".project-detail-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        //loop: true,
        navigation: {
          nextEl: ".project-detail-slider .swiper-button-next",
          prevEl: ".project-detail-slider .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

        },
      });

      



    },

    /*======================================
     03. Popup Open JS
    ========================================*/
    popup_open: function() {
      
    },

    /*======================================
     04. Preloader JS
    ========================================*/
    Preloader_js: function() {
      //After 2s preloader is fadeOut
      $('.preloader').delay(2000).fadeOut('slow');
      setTimeout(function() {
      //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
      }, 2000); //Here you can change preloader time
    },

    /*======================================
     05. Isotope JS
    ========================================*/
    Isotope_js: function() {
      
    },

    


  };
  journea_travel_agency.init();

})(jQuery);

 $(document).ready(function () {
    $('.load-more-btn').on('click', function (e) {
      e.preventDefault();
      var $btn = $(this);
      var nextPage = $btn.data('next-page');

      $btn.find('.load-more-spinner').show();
      $btn.prop('disabled', true);

      $.ajax({
        url: window.location.pathname + '?page=' + nextPage,
        type: 'GET',
        dataType: 'html',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        success: function (response) {
          var $response = $('<div>').html(response);
          var $newItems = $response.find('.grid-append .grid-list-append');
          var $newButton = $response.find('.load-more-btn');

          if ($newItems.length) {
            $('.grid-append').append($newItems);
            if ($newButton.length) {
              $btn.data('next-page', $newButton.data('next-page'));
              $btn.find('.load-more-spinner').hide();
              $btn.prop('disabled', false);
            } else {
              $btn.remove();
            }
          } else {
            $btn.remove();
          }
        },
        error: function () {
          alert('Failed to load more services.');
          $btn.find('.load-more-spinner').hide();
          $btn.prop('disabled', false);
        }
      });
    });

    $(document).on('ajaxSuccess', function(event, context, response) {
      if (context.handler === 'onContactFormSubmit') {
        const res = response.result || response;

        $('#contact-form')[0].reset();
        $('#contact-success').html('<div class="text-green-600">' + res.message + '</div>');
      }

      if (context.handler === 'onSubscribe') {
        let $messageBox = $('#subscribe-success');

        if (response.status == 'success') {
          $('#subscribe-form')[0].reset();
          $messageBox
        .css('color', '#196f65') // green
        .text(response.message);
      } else if (response.status == 'error') {
        $messageBox
        .css('color', '#ff0000') // red
        .text(response.message);
      }
      }

    });

  });
