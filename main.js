function loadNavbar() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    navbar.innerHTML = `
      <nav class="vertical-nav">
        <div class="profile">
          <img src="img/Gia Headshot 4.22 - Copy.jpg" alt="Gia Boudreau headshot" class="headshot" />
          <p>Gianna Boudreau</p>
        </div>

        <div class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul class="nav-links" id="navLinks">
          <li><a href="index.html" class="nav-link">Home</a></li>
          <li><a href="about.html" class="nav-link">About</a></li>
          <li><a href="projects.html" class="nav-link">Projects</a></li>
          <li><a href="cv.html" class="nav-link">CV</a></li>
        </ul>
      </nav>
    `;

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  }
}



function setupCarousel() {
    const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach((carousel) => {
    const images = Array.from(carousel.querySelectorAll('.carousel-img'));
    const leftBtn = carousel.querySelector('.carousel-btn.left');
    const rightBtn = carousel.querySelector('.carousel-btn.right');

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    leftBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    rightBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    showImage(currentIndex);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  setupCarousel();
});
