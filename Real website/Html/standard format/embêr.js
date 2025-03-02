window.addEventListener('scroll', () => {
    const title = document.querySelector('.title');
    const scrollY = window.scrollY; 
    const fadePoint = 250; 
    let opacity = 1 - scrollY / fadePoint;
    opacity = Math.max(opacity, 0);
    title.style.opacity = opacity;
});

window.addEventListener('scroll', () => {
    const title = document.querySelector('.subtitle');
    const scrollY = window.scrollY; 
    const fadePoint = 250; 
    let opacity = 1 - scrollY / fadePoint;
    opacity = Math.max(opacity, 0);
    title.style.opacity = opacity;
});