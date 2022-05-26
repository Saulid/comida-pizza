//head-slide
$('.h-sl-sub').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  cssEase: 'linear',
  asNavFor: '.h-r-li'
});
$('.h-r-li').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.h-sl-sub',
  dots: false,
  centerMode: false,
  arrows: false,
  focusOnSelect: true,
  vertical: true,
});



//branches-slide
$('.bran-sl-cnt').slick({

  centerMode: true,
  centerPadding: '16%',
  slidesToShow: 1.67,
  arrows: false,
  asNavFor: '',
  responsive: [
    {
      breakpoint: 1326,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '8%',
        slidesToShow: 1.67
      }
    },
    {
      breakpoint: 1040,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '26px',
        slidesToShow: 1.66
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5%',
        slidesToShow: 1.66
      }
    },
    {
      breakpoint: 641,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0%',
        slidesToShow: 1.54
      }
    }
  ]
});

$('.bran-slter-cnt').slick({
  slidesToShow: 1.69,
  asNavFor: '.bran-sl-cnt',
  centerPadding: '21.6%',
  dots: false,
  centerMode: true,
  arrows: false,
  focusOnSelect: true,
  vertical: false,
  responsive: [
    {
      breakpoint: 1265,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1.67
      }
    },
    {
      breakpoint: 1040,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '22%',
        slidesToShow: 1.67
      }
    }
  ]
});



  
  $('.bran-slter-cnt').slick({
    slidesToShow: 1.69,
    asNavFor: '.bran-sl-cnt',
    centerPadding: '21.6%',
    dots: false,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    vertical: false,
    responsive: [
      {
        breakpoint: 1265,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20%',
          slidesToShow: 1.67
        }
      },
      {
        breakpoint: 1040,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1.7
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '22%',
          slidesToShow: 1.67
        }
      }
    ]
  });
  
  


if ($(window).width() >= 768 && $(window).width() <= 1040) {
    $('.menu-slide').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,

    });
}
else if ($(window).width() < 767.9) {
    $('.menu-slide').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });
}
else {
    $('.menu-slide').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
}