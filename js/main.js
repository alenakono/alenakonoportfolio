$(document).ready(function () {
    $(".header__menu_mob").on("click", function (event) {
        $(".header__menu_mob, .header-nav_mob").toggleClass("_active");
        $("body").toggleClass("_lock");

    });
    $(".header__item").on("click", function (event) {
        $(".header__menu_mob, .header-nav_mob").removeClass("_active");
        $("body").removeClass("_lock");
    });
});
const openPopup = document.querySelectorAll('.popup__open');
const popup = document.getElementById('popup');
const popups = document.querySelectorAll('.popup');
const closePopup = document.querySelectorAll('.popup__close');
const body = document.querySelector('body');

if (popups) {
    openPopup.forEach(button => {
        button.addEventListener('click', () => {
            popup.classList.add('_active');
            body.classList.add('_lock');
        });
    });
    closePopup.forEach(close => {
        close.addEventListener('click', () => {
            popups.forEach(popup => {
                popup.classList.remove('_active');
            });
            body.classList.remove('_lock');
        });
    });
}