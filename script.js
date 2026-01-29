// Carossel
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
});

// Auto slide a cada 5 segundos
let slideInterval = setInterval(nextSlide, 5000);

// Pausar ao passar o mouse
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseover', () => clearInterval(slideInterval));
carousel.addEventListener('mouseout', () => slideInterval = setInterval(nextSlide, 5000));




