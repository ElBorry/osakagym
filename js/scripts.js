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

// Función para cargar contenido de otro HTML en una sección específica
function loadSection(sectionId, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch(error => console.error('Error cargando la sección:', error));
}

function loadSection(sectionId, url) {
    fetch(`sections/${url}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch(error => console.error('Error cargando la sección:', error));
}

function observeSections() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                if (!entry.target.innerHTML) {
                    loadSection(sectionId, sectionId);
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
}

// Ajusta la altura del iframe según el contenido cargado
function adjustIframeHeight(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

// Llama a la función cuando el iframe cargue
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('load', () => adjustIframeHeight(iframe));
});
