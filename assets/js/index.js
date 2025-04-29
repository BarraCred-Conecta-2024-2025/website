// "assets/images/fotos/bg1.jpeg",
const images = [
  "assets/images/bg/banner1.jpeg",
  "assets/images/bg/banner2.jpg",
  "assets/images/bg/banner3.jpg",
];

let current = 0;
const home = document.getElementById("home");
const overlay = home.querySelector('.fade-overlay');

setInterval(() => {
  // ativa escurecimento
  home.classList.add('fadeing');

  // espera a transição escurecer (1s)
  setTimeout(() => {
    current = (current + 1) % images.length;
    home.style.backgroundImage = `url(${images[current]})`;
    home.setAttribute('data-jarallax-original-styles', `url(${images[current]})`);

    // remove o escurecimento
    home.classList.remove('fadeing');
  }, 1000);
}, 8000);


window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navLinks.forEach(link => link.classList.remove('active'));
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="#home"], .nav-link[href="index.html"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
});