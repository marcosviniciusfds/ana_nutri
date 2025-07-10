// Rolagem suave para agendamento
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // Scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Simulação de envio do formulário
  const form = document.getElementById('form-agendamento');
  const msg = document.getElementById('msg-sucesso');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você pode integrar com back-end PHP, Firebase, etc.
    msg.style.display = 'block';
    form.reset();
  });
  

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  });

  const banner = document.getElementById("banner-nutri");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        banner.classList.add("aparecendo");
      }
    });
  }, {
    threshold: 0.3 // ativa quando 30% do elemento aparecer
  });

  observer.observe(banner);

  const banne = document.getElementById("banner-nutri-2");

  const observe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        banne.classList.add("aparecendo");
      }
    });
  }, {
    threshold: 0.3 // ativa quando 30% do elemento aparecer
  });

  observe.observe(banne);

  const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});