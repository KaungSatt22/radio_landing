import "../scss/style.scss";
import $ from "jquery";
import "slick-carousel";

let btn = document.querySelector(".hamburger");
let navbar = document.querySelector(".l-header__menu ul");
btn.addEventListener("click", ()=> {
    navbar.classList.toggle("show")
})

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
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});
