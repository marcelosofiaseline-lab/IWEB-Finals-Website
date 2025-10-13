// ALL CODE INSIDE ONE DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  
  // ===== INDEX PAGE BUTTON =====
  const enterBtn = document.getElementById("enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }

  // ===== NAVIGATION MENU =====
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => navMenu.classList.remove("active"))
    );
  }

  // ===== BACKGROUND MUSIC =====
  const bgMusic = document.getElementById('bgMusic');
  
  if (bgMusic) {
    let hasStarted = false;
    
    // Check if music was playing before
    const musicState = sessionStorage.getItem('musicPlaying');
    const musicTime = sessionStorage.getItem('musicTime');
    
    // Function to start music
    const startMusic = () => {
      if (!hasStarted) {
        if (musicTime) {
          bgMusic.currentTime = parseFloat(musicTime);
        }
        
        bgMusic.play().then(() => {
          console.log('Music started successfully!');
        }).catch(e => {
          console.log('Autoplay prevented:', e);
        });
        
        sessionStorage.setItem('musicPlaying', 'true');
        hasStarted = true;
      }
    };
    
    // Auto-start on mouse movement (hover detection)
    document.addEventListener('mousemove', startMusic, { once: true });
    
    // Fallback: also start on any click or touch
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
    
    // If music was already playing (from previous page), continue it
    if (musicState === 'true' && musicTime) {
      bgMusic.currentTime = parseFloat(musicTime);
      bgMusic.play().catch(e => console.log('Resume blocked:', e));
      hasStarted = true;
    }
    
    // Save music time every second
    setInterval(() => {
      if (!bgMusic.paused) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
      }
    }, 1000);
    
    // Save state before page unload
    window.addEventListener('beforeunload', () => {
      if (!bgMusic.paused) {
        sessionStorage.setItem('musicTime', bgMusic.currentTime);
        sessionStorage.setItem('musicPlaying', 'true');
      }
    });
  }

  // ===== SCROLL TO TOP BUTTON =====
  const scrollToTopBtn = document.getElementById('scrollToTop');

  if (scrollToTopBtn) {
    // Show button when user scrolls down 300px
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

}); // END DOMContentLoaded


// ===== PAGE NAVIGATION (Outside DOMContentLoaded) =====
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const page = this.getAttribute('data-page');

      // If data-page exists, navigate to that page
      if (page) {
        e.preventDefault();
        window.location.href = page;
      }
    });
  });
});