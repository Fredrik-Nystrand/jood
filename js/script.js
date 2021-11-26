var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    slideActiveClass: "active-slide",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      800: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 5
      },
  
    }
  });