// script.js

// Adicione interatividade se necessário, por exemplo, para alternar menus, sliders, etc.

// Exemplo de código para menu responsivo
const menuIcon = document.querySelector('.user-actions img.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
