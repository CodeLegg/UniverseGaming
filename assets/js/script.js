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
    // Check if the email field is not empty
    if (inputField.value.trim() !== "") {
      // Hide the button and input field
      subscribeButton.style.display = "none";
      inputField.style.display = "none";

      // Show the thank you message
      thankYouMessage.style.display = "block";
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
