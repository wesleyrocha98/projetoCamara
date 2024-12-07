let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateActiveClass() {
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
}

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return; // Verifica se o elemento existe
  const offset = -index * 100; // Move 100% para cada slide
  carousel.style.transform = `translateX(${offset}%)`;
  updateActiveClass();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Volta ao início ao alcançar o final
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Volta ao final ao alcançar o início
  showSlide(currentIndex);
}

function toggleMenu() {
  const menu = document.querySelector('.nav-header-container');
  menu.classList.toggle('open');
}


// Alterna slides automaticamente a cada 10 segundos
setInterval(nextSlide, 10000);
