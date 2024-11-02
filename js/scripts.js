// Mostrar el navbar cuando el usuario haga scroll hacia abajo
$(window).scroll(function () {
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



var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});