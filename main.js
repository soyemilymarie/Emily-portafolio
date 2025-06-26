// Menú responsive
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Animación de barras de habilidad al hacer scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const barInner = bar.querySelector('.bar');
    const value = barInner.getAttribute('data-skill');
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      bar.classList.add('visible');
      barInner.style.setProperty('--bar-width', value + '%');
      barInner.style.width = value + '%';
      barInner.querySelector && (barInner.querySelector('::after').style.width = value + '%');
    }
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Validación básica del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const nombre = contactForm.nombre.value.trim();
    const email = contactForm.email.value.trim();
    const mensaje = contactForm.mensaje.value.trim();
    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      e.preventDefault();
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Por favor, ingresa un email válido.');
      e.preventDefault();
    }
  });
} 