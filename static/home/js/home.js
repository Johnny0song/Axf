window.onload =function () {
    var swiper = new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        // slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });



    var swiper = new Swiper('#mustbuySwiper', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 3,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
}

