import "../scss/style.scss";
import $ from "jquery";
import "slick-carousel";

$(".gallery__slider").slick({
  centerMode: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});
