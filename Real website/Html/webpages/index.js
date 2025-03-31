// Select all images that act as buttons
const images = document.querySelectorAll('.img');

// Loop over each image
images.forEach(img => {
  img.addEventListener('click', () => {
    // The .scrl-text is the *next* sibling in your HTML
    const textEl = img.nextElementSibling;
    
    // Ensure the next element is actually .scrl-text
    if (textEl && textEl.classList.contains('scrl-text')) {
      
      // Toggle the 'show' class to show/hide the text
      if (textEl.classList.contains('show')) {
        textEl.classList.remove('show');
      } else {
        textEl.classList.add('show');

        // OPTIONAL: auto-hide after 3 seconds
        setTimeout(() => {
          textEl.classList.remove('show');
        }, 3000);
      }
    }
  });
});