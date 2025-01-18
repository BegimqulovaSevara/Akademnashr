const menuIcon = document.querySelector('.header__menu-toggler');
const navLinks = document.querySelector('.header__actions');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('header__menu-opener');
});