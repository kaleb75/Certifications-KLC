// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Mostrar el botón cuando se hace scroll
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.classList.add('show'); // Añadir clase para mostrar
      } else {
          scrollToTopBtn.classList.remove('show'); // Quitar clase para ocultar
      }
  };

  // Función para volver al tope de la página
  scrollToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Form validation
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();

          if (name && email && message) {
              alert('Message sent successfully!');
              form.reset();
          } else {
              alert('Please fill out all fields.');
          }
      });
  }

  // WhatsApp button click event
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function() {
          alert('You will be redirected to WhatsApp.');
      });
  }

  // Manejar el cambio de visibilidad de la página
  document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
          document.body.classList.add('hidden');
          document.body.classList.remove('visible');
      } else {
          document.body.classList.add('visible');
          document.body.classList.remove('hidden');
      }
  });
});
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Mostrar el botón cuando se hace scroll
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.classList.add('show'); // Añadir clase para mostrar
      } else {
          scrollToTopBtn.classList.remove('show'); // Quitar clase para ocultar
      }
  };

  // Función para volver al tope de la página
  scrollToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Form validation
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();

          if (name && email && message) {
              alert('Message sent successfully!');
              form.reset();
          } else {
              alert('Please fill out all fields.');
          }
      });
  }

  // WhatsApp button click event
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function() {
          alert('You will be redirected to WhatsApp.');
      });
  }

  // Manejar el cambio de visibilidad de la página
  document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
          document.body.classList.add('hidden');
          document.body.classList.remove('visible');
      } else {
          document.body.classList.add('visible');
          document.body.classList.remove('hidden');
      }
  });

  // Scroll animations
  const scrollElements = document.querySelectorAll('.scroll-animation');

  const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
          elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
  };

  const displayScrollElement = (element) => {
      element.classList.add('visible');
  };

  const hideScrollElement = (element) => {
      element.classList.remove('visible');
  };

  const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
          if (elementInView(el, 1.25)) {
              displayScrollElement(el);
          } else {
              hideScrollElement(el);
          }
      });
  };

  window.addEventListener('scroll', () => {
      handleScrollAnimation();
  });

  // Inicializar la animación en los elementos visibles al cargar la página
  handleScrollAnimation();
});// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Mostrar el botón cuando se hace scroll
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add('show'); // Añadir clase para mostrar
        } else {
            scrollToTopBtn.classList.remove('show'); // Quitar clase para ocultar
        }
    };

    // Función para volver al tope de la página
    scrollToTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // WhatsApp button click event
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            alert('You will be redirected to WhatsApp.');
        });
    }

    // Manejar el cambio de visibilidad de la página
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.classList.add('hidden');
            document.body.classList.remove('visible');
        } else {
            document.body.classList.add('visible');
            document.body.classList.remove('hidden');
        }
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Inicializar la animación en los elementos visibles al cargar la página
    handleScrollAnimation();
});
document.addEventListener("DOMContentLoaded", () => {
    // ==================== CONSTANTES Y VARIABLES ====================
    const SCROLL_THRESHOLD = 20;
    const DEBOUNCE_DELAY = 100;
    const ANIMATION_TRIGGER_RATIO = 1.25;

    // ==================== FUNCIONALIDAD SCROLL TO TOP ====================
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        scrollToTopBtn?.classList.toggle('show', scrollPosition > SCROLL_THRESHOLD);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ==================== VALIDACIÓN DE FORMULARIO ====================
    const setupFormValidation = () => {
        const form = document.querySelector('form');
        if (!form) return;

        const showMessage = (message, isSuccess = true) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `form-message ${isSuccess ? 'success' : 'error'}`;
            messageDiv.textContent = message;
            form.prepend(messageDiv);
            
            setTimeout(() => messageDiv.remove(), 3000);
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                showMessage('Please fill out all fields.', false);
                return;
            }

            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', false);
                return;
            }

            // Aquí deberías agregar tu lógica real de envío
            showMessage('Message sent successfully!');
            form.reset();
        });
    };

    // ==================== ANIMACIONES AL SCROLL ====================
    const setupScrollAnimations = () => {
        const scrollElements = document.querySelectorAll('.scroll-animation');
        if (!scrollElements.length) return;

        const elementInView = (el, dividend = ANIMATION_TRIGGER_RATIO) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop <= (window.innerHeight / dividend);
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach(el => {
                el.classList.toggle('visible', elementInView(el));
            });
        };

        // Usar Intersection Observer para mejor performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle('visible', entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        scrollElements.forEach(el => observer.observe(el));
    };

    // ==================== EVENT LISTENERS OPTIMIZADOS ====================
    const setupEventListeners = () => {
        // Scroll events con debounce
        let isScrolling;
        window.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(handleScroll, DEBOUNCE_DELAY);
        });

        // Botón WhatsApp
        const whatsappBtn = document.getElementById('whatsappBtn');
        whatsappBtn?.addEventListener('click', () => {
            // Aquí puedes agregar tracking de analytics si es necesario
            window.open(whatsappBtn.href, '_blank');
        });

        // Botón Scroll to Top
        scrollToTopBtn?.addEventListener('click', scrollToTop);
    };

    // ==================== INICIALIZACIÓN ====================
    const init = () => {
        handleScroll(); // Estado inicial
        setupFormValidation();
        setupScrollAnimations();
        setupEventListeners();
    };

    init();
});