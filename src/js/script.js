import Swiper from 'swiper/bundle';
import 'swiper/scss/bundle';


const swiper = new Swiper('.comments-swiper', {
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});