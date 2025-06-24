function loadNavbar() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    navbar.innerHTML = `
      <nav class="vertical-nav">
        <div class="profile">
          <img src="img/Gia Headshot 4.22 - Copy.jpg" alt="Gia Boudreau headshot" class="headshot" />
          <p>Gianna Boudreau</p>
        </div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="cv.html">CV</a></li>
        </ul>
      </nav>
    `;
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
