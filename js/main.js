let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');

    

});


let menubtn = document.querySelector('.menubtn');

nav.addEventListener('click', () => {
    document.querySelector('.submenu>li').classList.toggle('show-submenu');

});