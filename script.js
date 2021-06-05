const header = document.querySelector('.header');
const title = document.querySelector('h1');
const menu = document.querySelectorAll('.menu-item');
const button = document.querySelector('.header-button');
const buttonLink = document.querySelector('.header-button a');

window.onscroll = function() {
    let top = window.scrollY;
    console.log(top);
    if(top >= 80) {
        header.classList.add('scroll');
        title.classList.add('scroll');
        button.classList.add('scroll');
        buttonLink.classList.add('scroll');
        menu.forEach(function(menu) {
            menu.classList.add('scroll');
        })
    } else {
        header.classList.remove('scroll');
        title.classList.remove('scroll');
        button.classList.remove('scroll');
        buttonLink.classList.remove('scroll');
        menu.forEach(function(menu) {
            menu.classList.remove('scroll');
        })
    }
}
