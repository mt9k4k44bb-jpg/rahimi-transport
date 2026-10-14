
/* ÉLÉGANCE — Website interactions */

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰ Menu";
    });
  });
}

// Demo reservation form
const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");
const bookingDate = document.getElementById("booking-date");

// Prevent selecting a date in the past
if (bookingDate) {
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  bookingDate.min = localToday;
}

if (bookingForm && formMessage) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document.getElementById("guest-name").value.trim();

    formMessage.textContent =
      "Thank you, " + guestName +
      "! Your reservation request has been prepared. This is a demo; no booking has been sent.";

    bookingForm.reset();

    if (bookingDate && bookingDate.min) {
      bookingDate.min = bookingDate.min;
    }
  });
}

/* ÉLÉGANCE — Final image polish */

.card {
  border-radius: 3px;
  isolation: isolate;
}

.card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  height: auto;
  object-fit: cover;
  display: block;
}

.card-info {
  position: relative;
}

.card .label {
  display: inline-block;
  margin-bottom: 5px;
}

.card h3 {
  line-height: 1.15;
}

.card p {
  line-height: 1.8;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover img {
    transform: scale(1.035);
  }
}

@media (max-width: 600px) {
  .card img {
    aspect-ratio: 16 / 10;
  }

  .card:hover {
    transform: none;
  }
}
