const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let current = 0;
let interval;

function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.remove("active");
    dots[index].classList.remove("active");
    if (index === current) {
      img.classList.add("active");
      dots[index].classList.add("active");
    }
  });
}

function showNext() {
  current = (current + 1) % images.length;
  updateCarousel();
}

function showPrev() {
  current = (current - 1 + images.length) % images.length;
  updateCarousel();
}

function startAutoPlay() {
  interval = setInterval(showNext, 4000); // muda a cada 4 segundos
}

function stopAutoPlay() {
  clearInterval(interval);
}

// Botões
prevBtn.addEventListener("click", () => {
  showPrev();
  stopAutoPlay();
  startAutoPlay();
});

nextBtn.addEventListener("click", () => {
  showNext();
  stopAutoPlay();
  startAutoPlay();
});

// Dots
dots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    current = parseInt(e.target.getAttribute("data-index"));
    updateCarousel();
    stopAutoPlay();
    startAutoPlay();
  });
});

updateCarousel();
startAutoPlay();