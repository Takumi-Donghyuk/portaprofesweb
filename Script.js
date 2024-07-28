// Lógica del carrusel de proyectos
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    // Mostrar u ocultar las flechas según el índice actual
    if (currentIndex === 0) {
        leftButton.classList.remove('show-left-button');
    } else {
        leftButton.classList.add('show-left-button');
    }

    if (currentIndex === totalItems - 1) {
        rightButton.classList.remove('show-right-button');
    } else {
        rightButton.classList.add('show-right-button');
    }
}

document.querySelector('.right-button').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});

document.querySelector('.left-button').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; 
    }
    updateCarousel();
});


updateCarousel();

// lógica de clicar para traducir a otro idioma
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-es]");
  const esLink = document.getElementById("es");
  const enLink = document.getElementById("en");
  const jpLink = document.getElementById("jp");
  const krLink = document.getElementById("kr");

  esLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    changeLanguage("es");
  });

  enLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    changeLanguage("en");
  });

  jpLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    changeLanguage("jp");
  });

  krLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    changeLanguage("kr");
  });

  function changeLanguage(lang) {
    elements.forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  }
});

// Lógica del modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
 
});