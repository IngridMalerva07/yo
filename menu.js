// menu.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (opcional)
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
});
