document.addEventListener('DOMContentLoaded', function() {
    
    const contenedor = document.querySelector('.contenedor');
    const parentalLogo = document.querySelector('.parentallogo');
  
    const fadeInUpAnimation = function(element) {
      let opacity = 0;
      let translateY = 100;
  
      const fadeInUpInterval = setInterval(function() {
        opacity += 0.01;
        translateY -= 0.1;
  
        element.style.opacity = opacity;
        element.style.transform = `translateY(${translateY}px)`;
  
        if (opacity >= 1) {
          clearInterval(fadeInUpInterval);
        }
      }, 25);
    };
  
    // Iniciar la animación cuando se carga el contenido
    fadeInUpAnimation(contenedor);
    fadeInUpAnimation(parentalLogo);
  });
  