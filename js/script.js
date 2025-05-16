// Seletores principais
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scroll-up');
const hero = document.getElementById('hero');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const menuItems = document.querySelectorAll('.menu-item');
const toggleBtn = document.getElementById('toggle-dark-mode');

// ====== Navegação Mobile ======

// Alternar menu de navegação
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// ====== Estado ativo de navegação ======

// Ativar link clicado
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Ativar item de menu clicado
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// ====== Scroll para o topo ======
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.menu-item.active').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelectorAll('.nav-link.active').forEach(link => {
        link.classList.remove('active');
    });

    // Remover hash da URL
    if (history.pushState) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});

// ====== Estilo do cabeçalho ao rolar ======
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ====== Modo Claro / Escuro ======
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Alterna o texto do botão
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ Modo Claro'
        : '🌙 Modo Escuro';
});

// ====== Enviar mensagem via WhatsApp ======
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const numeroWhatsApp = "351916995148"; // Ex: Portugal (DDI + DDD)

    const texto = `Olá! Me chamo ${nome}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(link, '_blank');
});
