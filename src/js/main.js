import '../scss/style.scss';

let btn = document.querySelector(".hamburger");
let navbar = document.querySelector(".l-header__menu ul");
btn.addEventListener("click", ()=> {
    navbar.classList.toggle("show")
})