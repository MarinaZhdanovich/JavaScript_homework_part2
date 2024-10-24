const slides = document.querySelectorAll('.slider-img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;


function updateSlider() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[slideIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlider();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlider();
});


dots.forEach((dot, index) => {
  dot.addEventListener('click', function () {
    slideIndex = index;
    updateSlider();
  });
});


updateSlider();