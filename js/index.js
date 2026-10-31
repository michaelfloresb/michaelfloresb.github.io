// Paso 1: Obtener la referencia al elemento imagen en el HTML
let imagenHero = document.getElementById("imagenHero");
console.log(imagenHero)
// *** PASO MUY IMPORTANTE: LISTAR LAS RUTAS DE TUS IMÁGENES ***
// Crea un array (lista) con la ruta de CADA imagen que quieres mostrar.
// Asegúrate de que estas rutas sean correctas en relación a dónde estás ejecutando tu JS.
const imagenesProyectos = [
    "img/animeList.png",
    "img/bioRenacer.png",
    "img/blockchain.png",
    "img/ecofuturo.png",
    "img/ecoworld.png",
    "img/pokedex.png",
    "img/reactAnime.png",
    "img/Perfil.png"
];



// Inicializar el índice de la imagen que vamos a mostrar
let indiceActual = 0;

/**
 * Función encargada de cambiar la imagen.
 */
function mostrarSiguienteImagen() {
    // 1. Cambia la fuente (src) de la imagen visible.
    imagenHero.src = imagenesProyectos[indiceActual];
    console.log(`Mostrando imagen: ${imagenesProyectos[indiceActual]}`);

    // 2. Incrementa el índice para apuntar a la siguiente imagen en el array.
    indiceActual++;

    // 3. Comprobar si hemos llegado al final del array (si se desborda)
    if (indiceActual >= imagenesProyectos.length) {
        // Si llegamos al final, reiniciamos el ciclo volviendo a 0
        indiceActual = 0;
    }
}

// Paso 2: Ejecutar la función repetidamente
// setInterval ejecuta una función cada cierto intervalo de tiempo (en milisegundos).
// Queremos que cambie cada 2 segundos, lo cual es 2000 milisegundos.
setInterval(mostrarSiguienteImagen, 2000);

// Opcional: Mostrar la primera imagen inmediatamente al cargar la página
mostrarSiguienteImagen();



// Sakura Animation
function createSakura() {
    const container = document.getElementById("sakuraContainer");
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
    sakura.style.left = Math.random() * 100 + "%";
    sakura.style.animationDuration = Math.random() * 5 + 5 + "s";
    sakura.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 10000);
}

// Create multiple sakura petals
for (let i = 0; i < 20; i++) {
    setTimeout(createSakura, i * 500);
}

setInterval(createSakura, 2000);

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Scroll Progress Bar
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, observerOptions);

// Observe all sections and cards
document
    .querySelectorAll(
        "section, .skill-category, .timeline-content, .education-card, .course-card, .project-card",
    )
    .forEach((el) => {
        observer.observe(el);
    });

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create mailto link
    const subject = encodeURIComponent(
        "Mensaje desde Portafolio - " + name,
    );
    const body = encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    );

    window.open(
        `mailto:michaflobe@gmail.com?subject=${subject}&body=${body}`,
        "_blank",
    );

    // Show success message
    alert(
        "¡Gracias por tu mensaje! Te redirigiré a tu cliente de correo para enviar el mensaje.",
    );
    contactForm.reset();
});

// Add hover effect to skill tags
document.querySelectorAll(".skill-tag").forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
    });
    tag.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector(".hero-text h1");
const originalText = heroTitle.innerHTML;

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector(".hero");
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + "px";
    }
});