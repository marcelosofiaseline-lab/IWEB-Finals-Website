document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }

  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => navMenu.classList.remove("active"))
    );
  }
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const page = this.getAttribute('data-page');
    
    if (page) {
      e.preventDefault();
      window.location.href = page;
    }
  });
});
