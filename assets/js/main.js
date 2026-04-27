const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    console.log("¡Clic detectado!"); // Si ves esto en consola, el JS funciona
    nav.classList.toggle('nav-active');
});
