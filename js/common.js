

$(document).ready(function () {
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.menu-img').attr('src', '../img/common/close_img.png');

        if ($(this).hasClass('active')) {
            $('.nav-inner').addClass('active');
        } else {
            $('.nav-inner').removeClass('active');
            $('.menu-img').attr('src', '../img/common/open_img.png');
        }
    });
});

$(".same-height").heightLine({
    fontSizeCheck: true
});

if (window.matchMedia('(max-width: 768px)').matches) {
    $(".same-height").heightLine("destroy");
};

$(document).ready(function () {
    var scroll_pos = 0;
    var mv = $('.main-vs').outerHeight();
    var mv1 = $('.head').outerHeight();

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > mv || scroll_pos > mv1) {
            $(".header").css('background-color', '#ffffff');
        } else {
            $(".header").css('background-color', 'rgb(255, 255, 255, 0.3)');
        }
    });
});



$(".heightline-branch").heightLine({
    fontSizeCheck: true
});

