const slideImages = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg'];

const elements = {
  slideContainer: document.querySelector('.slide__container'),
  indicatorsContainer: document.querySelector('.slider__indicators'),
  btnPrev: document.querySelector('.prev'),
  btnNext: document.querySelector('.next'),
  toggleLoop: document.querySelector('#toggleLoop'),
  toggleAutoplay: document.querySelector('#toggleAutoplay'),
};

let slides, indicators;
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;
let autoplayIntervalId = null;

function initializeSlider() {
  createSlides();
  slides = document.querySelectorAll('.slide');
  indicators = document.querySelectorAll('.indicator');
  bindEvents();
  goToSlide(currentSlide);
}

function createSlides() {
  slideImages.forEach((imgUrl, index) => {
    createSlide(imgUrl, index);
  });
}

function createSlide(imgUrl, index) {
  const newSlide = document.createElement('div');
  const newIndicator = document.createElement('div');
  
  newSlide.className = 'slide';
  newSlide.innerHTML = `<img src="${imgUrl}" alt="Slide ${index + 1}">`;
  elements.slideContainer.appendChild(newSlide);
  
  newIndicator.className = 'indicator';
  newIndicator.dataset.slideIndex = index;
  elements.indicatorsContainer.appendChild(newIndicator);
}

function bindEvents() {
  elements.btnPrev.addEventListener('click', goToPrevSlide);
  elements.btnNext.addEventListener('click', goToNextSlide);
  elements.toggleLoop.addEventListener('change', handleToggleLoopChange);
  elements.toggleAutoplay.addEventListener('change', handleToggleAutoplayChange);
  elements.slideContainer.addEventListener('touchstart', handleTouchStart);
  elements.slideContainer.addEventListener('touchend', handleTouchEnd);
  elements.slideContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
}

function handleToggleAutoplayChange() {
  if (elements.toggleAutoplay.checked) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
}

function startAutoplay() {
  stopAutoplay(); 

  autoplayIntervalId = setInterval(goToNextSlide, 2000);
}

function stopAutoplay() {
  if (autoplayIntervalId) {
    clearInterval(autoplayIntervalId);
    autoplayIntervalId = null;
  }
}

function goToSlide(slideIndex) {
  const direction = slideIndex > currentSlide ? 'left' : 'right';
  slides[currentSlide].className = `slide out ${direction}`;
  slides[slideIndex].className = `slide in ${direction === 'right' ? 'left' : 'right'}`;
  currentSlide = slideIndex;
  updateIndicators(slideIndex);
  updateButtonState();
}

function updateButtonState() {
  const isLoopEnabled = elements.toggleLoop.checked;
  elements.btnPrev.disabled = !isLoopEnabled && currentSlide === 0;
  elements.btnNext.disabled = !isLoopEnabled && currentSlide === slides.length - 1;
  [elements.btnPrev, elements.btnNext].forEach(btn => {
    btn.classList.toggle('disabled', btn.disabled);
  });
}

function goToPrevSlide() {
  const isLoopEnabled = elements.toggleLoop.checked;
  let newSlideIndex = currentSlide - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = isLoopEnabled ? slides.length - 1 : currentSlide;
  }
  slides[currentSlide].className = 'slide out right';
  slides[newSlideIndex].className = 'slide in left';
  currentSlide = newSlideIndex;
  updateIndicators(currentSlide);
  updateButtonState();
}

function goToNextSlide() {
  const isLoopEnabled = elements.toggleLoop.checked;
  let newSlideIndex = currentSlide + 1;
  if (newSlideIndex >= slides.length) {
    newSlideIndex = isLoopEnabled ? 0 : currentSlide;
  }
  slides[currentSlide].className = 'slide out left';
  slides[newSlideIndex].className = 'slide in right';
  currentSlide = newSlideIndex;
  updateIndicators(currentSlide);
  updateButtonState();
}

function handleToggleLoopChange() {
  updateButtonState();
}

function updateIndicators(slideIndex) {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50; 
  const swipeDistance = touchEndX - touchStartX;

  if (elements.toggleLoop.checked) {
    if (swipeDistance < -swipeThreshold) {
      goToNextSlide();
    } else if (swipeDistance > swipeThreshold) {
      goToPrevSlide();
    }
  } else {
    const isLastSlide = currentSlide === slides.length - 1;
    const isFirstSlide = currentSlide === 0;

    if (swipeDistance < -swipeThreshold && !isLastSlide) {
      goToNextSlide();
    } else if (swipeDistance > swipeThreshold && !isFirstSlide) {
      goToPrevSlide();
    }
  }
}

function handleTouchMove(event) {
  event.preventDefault();
}

// Initialize the slider
initializeSlider();
