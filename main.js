// navbar.js
function loadNavbar() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    navbar.innerHTML = `
      <nav class="vertical-nav">
       <div class="profile">
          <img src="img/Gia Headshot 4.22 - Copy.jpg" alt="Gia Boudreau headshot" class="headshot" />
          <p >Gianna Boudreau</p>
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

document.addEventListener("DOMContentLoaded", loadNavbar);