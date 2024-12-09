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


function loadSection(sectionId, url) {
    fetch(`sections/${url}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch(error => console.error('Error cargando la sección:', error));
}


// Ocultar el loader después de que la página cargue
window.addEventListener("load", function () {
    console.log("Página completamente cargada, iniciando transición del loader...");
    const loader = document.getElementById("loader");

    // Garantiza que el loader se muestre antes de ocultarlo
    setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease"; // Transición suave
        loader.style.opacity = "0"; // Lo oculta
        console.log("Ocultando loader después del tiempo configurado");
        setTimeout(() => {
            loader.style.display = "none"; // Lo elimina del DOM
        }, 500); // Asegura que se oculta tras la transición
    }, 2000); // Configura el tiempo deseado (3 segundos en este caso)
});


document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        // Configuración del Swiper
        direction: 'horizontal',
        loop: true,
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source'); // gallery o null

    if (source === 'gallery') {
        // Ocultar navbar y footer si viene de gallery
        const navbar = document.getElementById("mainNav");
        const footer = document.querySelector("footer");

        if (navbar) navbar.style.display = "none";
        if (footer) footer.style.display = "none";

        // Mostrar la flecha de regreso
        const backArrow = document.createElement("div");
        backArrow.innerHTML = `
            <a href="href="#iframe-gallery" class="btn btn-secondary btn-sm" id="backButton">
                <i class="fas fa-arrow-left"></i> Volver
            </a>
        `;
        backArrow.style.margin = "20px";
        document.body.prepend(backArrow);

 // Evento del botón "Volver a la galería"
 document.getElementById("backButton").addEventListener("click", (event) => {
    event.preventDefault(); // Evita la recarga normal

    // Muestra nuevamente la galería en el index
    const gallerySection = document.querySelector('.iframe-gallery');
    const content = `
        <div class="section2">
            <a href="./sections/gym.html?source=gallery" class="section2-item">
                <span class="text-label">GYM</span>
                <img src="../images/GIM6.jpg" alt="Gym Image">
            </a>
            <a href="./sections/rutinas.html?source=gallery" class="section2-item">
                <span class="text-label">RUTINAS</span>
                <img src="../images/RUTINA.jpg" alt="Fitness Image">
            </a>
            <a href="./sections/avisos.html?source=gallery" class="section2-item">
                <span class="text-label">AVISOS</span>
                <img src="../images/Diseño sin título.png" alt="Fitness Image">
            </a>
            <a href="./sections/disfrutando.html?source=gallery" class="section2-item">
                <span class="text-label">DISFRUTANDO</span>
                <img src="../images/DISFRUTANDO.jpg" alt="Training Image">
            </a>
        </div>
    `;
    gallerySection.innerHTML = content;

    // Restaura el navbar y el footer
    if (navbar) navbar.style.display = "flex";
    if (footer) footer.style.display = "block";

    // Elimina la flecha de regreso
    backArrow.remove();
});
}
});

document.addEventListener("click", (event) => {
    if (event.target && event.target.id === "backButton") {
        event.preventDefault(); // Evita la navegación por defecto
        const gallerySection = document.getElementById("iframe-gallery");
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        }
    }
});

