var nav = document.getElementById('navbar');
var close_icon = document.getElementById('closed');
var menus = document.getElementById('menu-icon');

close_icon.addEventListener('click', () => {
    nav.classList.toggle('open');
})

menus.addEventListener('click', () => {
    nav.classList.toggle('open');
})