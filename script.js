document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre && email && mensaje) {
                formFeedback.style.color = '#10b981';
                formFeedback.textContent = `¡Muchas gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
                contactForm.reset();
            } else {
                formFeedback.style.color = '#ef4444';
                formFeedback.textContent = 'Por favor, completa todos los campos requeridos.';
            }

            setTimeout(() => {
                formFeedback.textContent = '';
            }, 5000);
        });
    }

    // Navegación con scroll suave únicamente para enlaces internos (#)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});