const menu = document.querySelector(".menu");
const burger = document.querySelector(".head__burger");
const shadow = document.querySelector(".head__shadow");
const navigation = document.querySelector(".head__navigation");
const burgerLines = burger.children[0].children;
const head = document.querySelector(".head");

burger.addEventListener('click', changeColor);

function changeColor() {
    menu.classList.toggle('menu_active');
    burgerLines[0].classList.toggle('head__burger-line-change-1');
    burgerLines[1].classList.toggle('head__burger-line-change-2');
    burgerLines[2].classList.toggle('head__burger-line-change-3');
    navigation.classList.toggle('hidden');
    shadow.classList.toggle('hidden');
    head.classList.toggle('absolute-burger');
}