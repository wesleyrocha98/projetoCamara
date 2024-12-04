let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const offset = -index * 100; // Move 100% para cada slide
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Volta ao início ao alcançar o final
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Volta ao final ao alcançar o início
  showSlide(currentIndex);
}

// Alterna slides automaticamente a cada 10 segundos
setInterval(nextSlide, 10000);
