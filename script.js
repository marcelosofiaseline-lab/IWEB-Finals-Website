// index --> Homepage
document.addEventListener("DOMContentLoaded", () => {
  // index page button
  const enterBtn = document.getElementById("enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }

  // navigation menu
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Optional: close menu when clicking a link
    navMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => navMenu.classList.remove("active"))
    );
  }
});



//PAGE 
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const page = this.getAttribute('data-page');
    
    // If data-page exists, navigate to that page
    if (page) {
      e.preventDefault(); // Prevent default anchor behavior
      window.location.href = page; // Use the page variable, not hardcoded value
    }
    // Otherwise, it will work as a normal anchor link for same-page sections
  });
});