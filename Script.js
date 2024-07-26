const carousel = document.querySelector('.carousel');
let index = 0;

function showNextItem() {
  index++;
  if (index >= carousel.children.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextItem, 6000);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensaje enviado exitosamente!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Clicar para traducir a otro idioma
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

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
 
});