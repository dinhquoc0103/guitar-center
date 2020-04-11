

(function ($) {
    // USE STRICT
    // file js viết cho slide slick
    "use strict";

        /*[ Slick1 ] slide1 : slide full width màn hình
        ===========================================================*/
        var itemSlick1 = $('.slick1').find('.item-slick1');
        var action1 = [];
        var action2 = [];
        var action3 = [];
        var cap1Slide1 = [];
        var cap2Slide1 = [];
        var btnSlide1 = [];

        for(var i=0; i<itemSlick1.length; i++) {
          cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');
          cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');
          btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');
        }


        $('.slick1').on('init', function(){

            action1[0] = setTimeout(function(){
                $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');
            },200);

            action2[0] = setTimeout(function(){
                $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');
            },1000);

            action3[0] = setTimeout(function(){
                $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');
            },1800);              
        });


        $('.slick1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: false,
            appendDots: $('.wrap-slick1-dots'),
            dotsClass:'slick1-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick1'),
            prevArrow:'<button class="arrow-slick1 prev-slick1"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick1 next-slick1"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',  
        });

        $('.slick1').on('afterChange', function(event, slick, currentSlide){ 
            for(var i=0; i<itemSlick1.length; i++) {

              clearTimeout(action1[i]);
              clearTimeout(action2[i]);
              clearTimeout(action3[i]);


              $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');
              $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');
              $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');

            }

            action1[currentSlide] = setTimeout(function(){
                $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');
            },200);

            action2[currentSlide] = setTimeout(function(){
                $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');
            },1000);

            action3[currentSlide] = setTimeout(function(){
                $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');
            },1800);            
        });
        // kết thức slide full width màn hình 

        
        /*[ Slick2 ] slide sản phẩm mới
        ===========================================================*/
        $('.slick2').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $('.wrap-slick2'),
            prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',  
            
            responsive: [
              //màn hình kích thước 1200 trở lên hiện 4 sản phẩm
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                //màn hình kích thước 992 trở lên hiện 3 sản phẩm
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                //màn hình kích thước 768 trở lên hiện 2 sản phẩm
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                //màn hình kích thước 576 trở lên hiện 1 sản phẩm
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]    
        });
        // kết thúc slide2: slide sản phẩm mới



         /*[ Slick4 ] slide sản phẩm  đang giảm giá
        ===========================================================*/
        $('.slick4').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 6000,
          arrows: true,
          appendArrows: $('.wrap-slick4'),
          prevArrow:'<button class="arrow-slick4 prev-slick4"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:'<button class="arrow-slick4 next-slick4"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',  
          
          responsive: [
            //màn hình kích thước 1200 trở lên hiện 4 sản phẩm
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              //màn hình kích thước 992 trở lên hiện 3 sản phẩm
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              //màn hình kích thước 768 trở lên hiện 2 sản phẩm
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              //màn hình kích thước 576 trở lên hiện 1 sản phẩm
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]    
      });
      // kết thúc slide4: slide sản phẩm đang giảm giá

      /*[ Slick4 ] slide sản phẩm  đang giảm giá
        ===========================================================*/
        $('.slick5').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 6000,
          arrows: true,
          appendArrows: $('.wrap-slick5'),
          prevArrow:'<button class="arrow-slick5 prev-slick5"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:'<button class="arrow-slick5 next-slick5"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',  
          
          responsive: [
            //màn hình kích thước 1200 trở lên hiện 4 sản phẩm
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              //màn hình kích thước 992 trở lên hiện 3 sản phẩm
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              //màn hình kích thước 768 trở lên hiện 2 sản phẩm
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              //màn hình kích thước 576 trở lên hiện 1 sản phẩm
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]    
      });
      // kết thúc slide5: slide sản phẩm đang giảm giá

        /*[ Slick3 ] slide chi tiết sản phẩm*/
        $('.slick3').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: true,
            appendDots: $('.wrap-slick3-dots'),
            dotsClass:'slick3-dots',
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: false,
            customPaging: function(slick, index) {
                var portrait = $(slick.$slides[index]).data('thumb');
                return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
            },  
        });

        

})(jQuery);