/* Menu Targge */

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
