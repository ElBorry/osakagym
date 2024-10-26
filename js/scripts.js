// Mostrar el navbar cuando el usuario haga scroll hacia abajo
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {  // Mostrar el navbar después de hacer scroll 100px
        $('#mainNav').fadeIn();  // Aparecer suavemente
    } else {
        $('#mainNav').fadeOut();  // Ocultar si se vuelve al tope de la página
    }
});

// Toggle del menú en móviles
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});
