document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
  
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
      img.style.opacity = '0.8';
    });
  
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.opacity = '1';
    });
  });