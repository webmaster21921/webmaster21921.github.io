const images = document.querySelectorAll('.img');

images.forEach(img => {
  img.addEventListener('click', () => {
    const textEl = img.nextElementSibling;
    
    if (textEl && textEl.classList.contains('scrl-text')) {
      
      if (textEl.classList.contains('show')) {
        textEl.classList.remove('show');
      } else {
        textEl.classList.add('show');

        setTimeout(() => {
          textEl.classList.remove('show');
        }, 3000);
      }
    }
  });
});