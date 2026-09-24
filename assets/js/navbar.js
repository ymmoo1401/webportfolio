/**
 * ==========================================================================
 * NAVBAR CONTROLLER (MULTI-PAGE & RESPONSIVE)
 * Handles sticky navbar, mobile drawer, and active navigation across pages
 * ==========================================================================
 */

(function () {
  'use strict';

  const navbar = document.querySelector('.custom-navbar');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenuWrapper = document.querySelector('.nav-menu-wrapper');
  const navLinks = document.querySelectorAll('.custom-nav-link');

  // 1. Sticky Navbar styling on scroll
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // 2. Highlight Active Page Link based on current URL path
  function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const targetFile = href.split('/').pop().split('#')[0];

      if (
        (currentPath === '' && (targetFile === 'index.html' || targetFile === 'home.html')) ||
        (currentPath === 'index.html' && (targetFile === 'index.html' || targetFile === 'home.html')) ||
        (currentPath === 'home.html' && (targetFile === 'index.html' || targetFile === 'home.html')) ||
        (currentPath === targetFile)
      ) {
        link.classList.add('active');
      } else if (!href.startsWith('#')) {
        link.classList.remove('active');
      }
    });
  }

  // 3. Mobile Navigation Menu Toggle
  if (mobileToggle && navMenuWrapper) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenuWrapper.classList.toggle('show');
      const toggleIcon = mobileToggle.querySelector('i');
      if (toggleIcon) {
        toggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenuWrapper.classList.contains('show')) {
          navMenuWrapper.classList.remove('show');
          const toggleIcon = mobileToggle.querySelector('i');
          if (toggleIcon) {
            toggleIcon.className = 'fa-solid fa-bars';
          }
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 4. Attach scroll listeners with requestAnimationFrame throttle
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleNavbarScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Run initial checks
  handleNavbarScroll();
  highlightCurrentPage();
})();
