
// Carousel novo novo

const carousel = document.getElementById('carousel');
    const track = carousel.querySelector('.carousel-track');
    const images = track.querySelectorAll('img');
    let index = 0;
    const total = images.length;
    let interval = setInterval(nextSlide, 3000);

    function nextSlide() {
      index = (index + 1) % total;
      updateCarousel();
    }

    function updateCarousel() {
      const width = images[0].clientWidth;
      track.style.transform = `translateX(-${index * width}px)`;
    }

    // Mouse drag
    let isDragging = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = track.offsetLeft;
      carousel.style.cursor = 'grabbing';
      clearInterval(interval); // pausa o automático
    });

    carousel.addEventListener('mouseleave', () => {
      isDragging = false;
      carousel.style.cursor = 'grab';
      interval = setInterval(nextSlide, 3000);
    });

    carousel.addEventListener('mouseup', () => {
      isDragging = false;
      carousel.style.cursor = 'grab';
      interval = setInterval(nextSlide, 3000);
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX);
      track.style.transform = `translateX(${scrollLeft + walk}px)`;
    });

    window.addEventListener('resize', updateCarousel);