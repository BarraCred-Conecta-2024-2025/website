    // "assets/images/fotos/bg1.jpeg",
const images = [
    "assets/images/bg/banner1.jpg",
    "assets/images/bg/banner2.jpg",
    "assets/images/bg/banner3.jpg",
];

let current = 0;
const hero = document.getElementById("hero");
const overlay = hero.querySelector('.fade-overlay');

setInterval(() => {
  // ativa escurecimento
  hero.classList.add('fadeing');

  // espera a transição escurecer (1s)
  setTimeout(() => {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url(${images[current]})`;
    hero.setAttribute('data-jarallax-original-styles', `url(${images[current]})`);

    // remove o escurecimento
    hero.classList.remove('fadeing');
  }, 1000);
}, 8000);


window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});