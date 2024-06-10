// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const slidesToShow = 3;

    function updateSlidePosition() {
        slideContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - slidesToShow) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - slidesToShow;
        }
        updateSlidePosition();
    });
});
