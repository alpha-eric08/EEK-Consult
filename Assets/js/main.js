document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item a');
    
    navItems.forEach(item => {
        if (item.href.includes(currentLocation)) {
            item.parentElement.classList.add('active');
        } else {
            item.parentElement.classList.remove('active');
        }
    });
});




AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  const heroSection = document.getElementById('hero');
    const images = [
        '../image/image/hero/m1.jpg',
        '../image/image/hero/m2.JPG',
        '../image/image/hero/m3.JPG'
    ]
    let currentIndex = 0;

    function changeBackgroundImage() {
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

    // Initialize with the first image
    changeBackgroundImage();

    $('#teamCarousel').carousel({
        interval: 3000, // 3 seconds
        pause: "hover" // Pause on hover
    });
    
    /*Desktop Mode*/
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  document.addEventListener("DOMContentLoaded", function() {
    var desktopTab = document.querySelector(".desktop-only-tab");

    // When the user clicks the tab, check if they're on a mobile device
    if (desktopTab) {
      desktopTab.addEventListener("click", function(event) {
        if (isMobileDevice()) {
          event.preventDefault(); // Prevent the tab from opening
          
          // Show a notification to switch to desktop mode
          alert("This content is best viewed in desktop mode. Please switch to desktop mode on your mobile browser.");
        }
      });
    }
  });

