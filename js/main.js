$('.hamburger').click(function() {
    $(this).toggleClass('is-active')

    if ($(this).hasClass('is-active')) {
        $('.menuBlock').addClass('menuBlockVisible')
    } else {
        $('.menuBlock').removeClass('menuBlockVisible')
    }
})

const homepageSwiper = new Swiper('.headerSwiper', {
    direction: 'horizontal',
    loop: true,
    draggable: true,
    navigation: {
        nextEl: '.swiperNextHeader',
        prevEl: '.swiperPrevHeader',
    },
    autoplay: {
        delay: 3000,
    },
});

const welcomeSwiper = new Swiper('.welcomeSwiper', {
    direction: 'horizontal',
    loop: true,
    draggable: true,
    navigation: {
        nextEl: '.swiperNextHeader',
        prevEl: '.swiperPrevHeader',
    },
    autoplay: {
        delay: 3000,
    },
});

const namesSwiper = new Swiper('.namesSwiper', {
    direction: 'horizontal',
    loop: true,
    draggable: true,
    navigation: {
        nextEl: '.swiperNextNames',
        prevEl: '.swiperPrevNames',
    },
    autoplay: {
        delay: 3000,
    },
});

const reserwationsSwiper = new Swiper('.reserwationsSwiper', {
    direction: 'horizontal',
    loop: true,
    draggable: true,
    navigation: {
        nextEl: '.swiperNextHeader',
        prevEl: '.swiperPrevHeader',
    },
    autoplay: {
        delay: 3000,
    },
});

$.each($('.faqItem'), function() {
    var hiddenHeight = $(this).find('.faqItemVisible').height();
    var visibleHeight = $(this).find('.faqItemAnswer').height();

    $(this).height(60);
})

$('.faqItem').click(function() {
    var H = $(this).height();
    var hVisible = $(this).find('.faqItemAnswer').height() + 10;

    if ($(this).hasClass('faqOpen')) {
        $(this).height(60);
        $(this).removeClass('faqOpen')

    } else {
        $(this).height(H + hVisible);
        $(this).addClass('faqOpen')
    }
})