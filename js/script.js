const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scroll-up');
const hero = document.getElementById('hero');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const menuItem = document.querySelectorAll('.menu-item');

//Criar evento do Menu Toggle
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Mudar a class active do menu de navegação quando for clicado
// Adiciona a classe active ao link clicado e remove dos outros
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active')); // remove dos outros
        this.classList.add('active'); // adiciona ao clicado
    });
});

// Mudar a classe active do menu de navegação quando for clicado
// Adiciona a classe active ao item clicado e remove dos outros
menuItem.forEach(link => {
    link.addEventListener('click', function () {
        menuItem.forEach(l => l.classList.remove('active')); // remove dos outros
        this.classList.add('active'); // adiciona ao clicado
    });
});


// Clique no botão de scroll para o topo
scrollToTopBtn.addEventListener('click', () => {
    // Scroll suave até o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove .active dos <li.menu-item>
    document.querySelectorAll('.menu-item.active').forEach(item => {
        item.classList.remove('active');
    });

    // Remove .active dos <a.nav-link>
    document.querySelectorAll('.nav-link.active').forEach(link => {
        link.classList.remove('active');
    });

    // Remove o hash da URL
    if (history.pushState) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});

//Scroll para a o header
// Para podermos criar uma interação para poder fazer o scroll do header e necessário buscar a class header que é o nosso cabeçalho e adicionar uma classe scrolled quando o usuário rolar a página para baixo
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* Enviar mensagem via whatsApp */
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Substitua pelo seu número com DDI e DDD — sem espaços ou traços
    const numeroWhatsApp = "351916995148"; // Exemplo: Portugal

    // Monta a mensagem
    const texto = `Olá! Me chamo ${nome}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;

    const msgCodificada = encodeURIComponent(texto);

    // Redireciona para o WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
});