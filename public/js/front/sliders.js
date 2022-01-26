var gallery_swiper = new Swiper(".gallery", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next-images",
      prevEl: ".swiper-button-prev-images",
    },
    pagination: {
      el: ".swiper-pagination-images",
      clickable: true,
    },
  });

var video_swiper = new Swiper(".videos", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination-videos",
    },
});