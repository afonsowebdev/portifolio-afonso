/* Menu Targge */

/* Para podermos criar uma interação para poder abrir o menu suspenso e necessário buscar a class .menu-toggle que é o nosso botão de menu  */

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when a link is 

/* Para podermos criar uma interação para poder fechar o menu suspenso e necessário buscar a class .nav-link que é o conjunto dos nossos links  */
const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
