// overlay variables
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Get the modal and other elements
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector("[data-modal-close]");
  const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

  const subscribeForm = document.querySelector(".newsletter form");
  const subscribeButton = document.querySelector(".btn-newsletter");

  const inputField = document.querySelector(".email-field");
  const thankYouMessage = document.querySelector(".modal-thankyou");

  // modal function
  const modalCloseFunc = function () {
    modal.classList.add("closed");
  };

  // modal eventListener
  modalCloseOverlay.addEventListener("click", modalCloseFunc);
  modalCloseBtn.addEventListener("click", modalCloseFunc);

  // Function to handle the subscribe button click
  const handleSubscribeClick = function () {
    if (inputField.value.trim() !== "") {
      // Hide the button and input field
      subscribeButton.style.display = "none";
      inputField.style.display = "none";

      // Show the thank you message
      thankYouMessage.style.display = "block";

      // Delay closing the modal for a few seconds (e.g., 5 seconds)
      setTimeout(() => {
        modalCloseFunc();
      }, 3000); // Adjust the delay time as needed
    }
  };

  // Subscribe button click event listener
  subscribeButton.addEventListener("click", handleSubscribeClick);
});

// mobile menu variables
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuOpenBtn = document.querySelectorAll(
    "[data-mobile-menu-open-btn]"
  );
  const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
  const mobileMenuCloseBtn = document.querySelectorAll(
    "[data-mobile-menu-close-btn]"
  );
  const overlay = document.querySelector("[data-overlay]");

  for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    // mobile menu function

    const mobileMenuCloseFunc = function () {
      mobileMenu[i].classList.remove("active");
      overlay.classList.remove("active");
    };

    mobileMenuOpenBtn[i].addEventListener("click", function () {
      mobileMenu[i].classList.add("active");
      overlay.classList.add("active");
    });

    mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
    overlay.addEventListener("click", mobileMenuCloseFunc);
  }
});

// accordion variables
document.addEventListener("DOMContentLoaded", function () {
  const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
  const accordion = document.querySelectorAll("data-accordion");

  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
      const clickedBtn = this.nextElementSibling.classList.contains("active");

      for (let i = 0; i < accordion.length; i++) {
        if (clickedBtn) break;

        if (accordion[i].classList.contains("active")) {
          accordion[i].classList.remove("active");
          accordionBtn[i].classList.remove("active");
        }
      }

      this.nextElementSibling.classList.toggle("active");
      this.classList.toggle("active");
    });
  }
});

// JavaScript to dynamically adjust the mobile navigation menu's height
document.addEventListener("DOMContentLoaded", function () {
  // JavaScript to dynamically adjust the mobile navigation menu's height
  function adjustMobileMenuHeight() {
    const mobileMenu = document.querySelector(".mobile-navigation-menu");
    const windowHeight = window.innerHeight;

    // Set the menu's height to a percentage of the window height (e.g., 90%)
    mobileMenu.style.height = `${windowHeight * 1}px`;
  }

  // Call the function when the page loads and when it's resized
  window.addEventListener("load", adjustMobileMenuHeight);
  window.addEventListener("resize", adjustMobileMenuHeight);
});
