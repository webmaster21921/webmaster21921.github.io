/*work in progress*/
const scrollContainer = document.querySelector('.img-scrl-container');
const scrollContent = document.querySelector('.img-scrl');
const scrollThreshold = 200;
const scrollSpeedFactor = .7;

let scrollVelocityX = 0;
let animationFrameIdX;
const decelerationX = 0.95;

function smoothHorizontalScroll() {
  scrollVelocityX *= decelerationX;
  scrollContent.scrollLeft += scrollVelocityX;

  if (Math.abs(scrollVelocityX) > 1) {
    animationFrameIdX = requestAnimationFrame(smoothHorizontalScroll);
  } else {
    cancelAnimationFrame(animationFrameIdX);
  }
}

function transformScroll(event) {
  const scrollY = window.scrollY;
  const scrollingDown = event.deltaY > 0;

  if (scrollY >= scrollThreshold) {
    if (scrollContent.scrollLeft + scrollContent.clientWidth >= scrollContent.scrollWidth) {
      return;
    }

    scrollVelocityX = (event.deltaY + event.deltaX) * scrollSpeedFactor;
    scrollContent.scrollLeft += scrollVelocityX;
    event.preventDefault();
    cancelAnimationFrame(animationFrameIdX)
    animationFrameIdX = requestAnimationFrame(smoothHorizontalScroll);
  } else if (scrollingDown) {
    window.scrollTo(0, scrollThreshold);
  }
}

scrollContainer.addEventListener('wheel', transformScroll, { passive: false }); 

/*for creators fade animation*/
window.addEventListener('scroll', () => {
  const creators = document.querySelector('#creators');
  const scrollY = window.scrollY; 
  const fadePoint = 100; 
  let opacity = 1 - scrollY / fadePoint;
  opacity = Math.max(opacity, 0);
  creators.style.opacity = opacity;
});



