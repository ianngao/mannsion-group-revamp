(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-label', nav.classList.contains('is-open') ? 'Close menu' : 'Open menu');
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Optional: subtle header background on scroll
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(253, 251, 247, 0.98)';
      } else {
        header.style.background = 'rgba(253, 251, 247, 0.95)';
      }
    });
  }

  // Contact form – prevent default for demo (replace with real endpoint)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message. Mannsion Group will be in touch.');
    });
  }
})();
