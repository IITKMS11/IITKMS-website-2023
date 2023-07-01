cconst slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Event listeners for carousel icons
const prevIcon = document.querySelector('.prev-icon');
const nextIcon = document.querySelector('.next-icon');

prevIcon.addEventListener('click', previousSlide);
nextIcon.addEventListener('click', nextSlide);

