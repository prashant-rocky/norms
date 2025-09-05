// navbar scolled
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // adjust scroll value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// / ---------------- Cookie Consent ----------------/
window.addEventListener('load', function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Ichiran Ramen",
            website_privacy_policy_url: "https://github.com/" // replace with real URL
        });
    }
});
// swiper
var swiper2 = new Swiper(".TmySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});
// contact
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const thankYouCard = document.getElementById("thankYouCard");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill out all fields before submitting.");
        return;
      }

      // Hide form and show thank you card
      contactForm.classList.add("d-none");
      thankYouCard.classList.remove("d-none");

      // Auto-reset form after 5s
      setTimeout(() => {
        contactForm.reset();
        contactForm.classList.remove("d-none");
        thankYouCard.classList.add("d-none");
      }, 5000);
    });
  }
});

// reservatin
document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservationForm");
  const reservationThankYou = document.getElementById("reservationThankYou");

  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const guests = document.getElementById("guests").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      if (!name || !email || !phone || !guests || !date || !time) {
        alert("⚠️ Please fill out all required fields.");
        return;
      }

      // Hide form and show thank you
      reservationForm.classList.add("d-none");
      reservationThankYou.classList.remove("d-none");

      // Auto-reset form after 5s
      setTimeout(() => {
        reservationForm.reset();
        reservationForm.classList.remove("d-none");
        reservationThankYou.classList.add("d-none");
      }, 5000);
    });
  }
});
