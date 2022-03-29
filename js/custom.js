$(function(){
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

      $('.news_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        prevArrow:'<i class="fas fa-chevron-left prev"></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
        
      });

});