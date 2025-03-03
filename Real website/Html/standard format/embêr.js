window.addEventListener('scroll', () => {
    const title = document.querySelector('.name-container');
    const scrollY = window.scrollY; 
    const fadePoint = 250; 
    let opacity = 1 - scrollY / fadePoint;
    opacity = Math.max(opacity, 0);
    title.style.opacity = opacity;
});

const swiper = new Swiper('.swiper', {
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 3000,               // 
      disableOnInteraction: false // Continues autoplay after user interacts
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

let isScrollingHorizontally = false;
let scrollThreshold = 0;  // Set the point where you want to switch from vertical to horizontal

document.addEventListener('wheel', (event) => {
  const container = document.querySelector('.img-scrl-container');
  const img = document.querySelector('.img');
  
  // If vertical scrolling is allowed before the threshold
  if (!isScrollingHorizontally && container.scrollTop < scrollThreshold) {
    if (event.deltaY !== 0) {
      // Allow normal vertical scrolling until the threshold
      container.scrollTop += event.deltaY;
      event.preventDefault();
    }
  } else {
    // Switch to horizontal scrolling after reaching the threshold
    if (event.deltaY !== 0) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;  // Scroll horizontally
    }

    // Enable horizontal scrolling after crossing the threshold
    isScrollingHorizontally = true;
  }
});
