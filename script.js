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
  