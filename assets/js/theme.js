/**
 * ==========================================================================
 * THEME CONTROLLER (DARK / LIGHT MODE)
 * Handles switching, icons update, and persistence in localStorage
 * ==========================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_theme_mode';
  const themeToggleBtns = document.querySelectorAll('.theme-switch-btn');

  // 1. Get saved theme or detect system preference
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark for high-tech creative media look, or check system
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  // 2. Set theme on document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeIcons(theme);
  }

  // 3. Update icon appearances (sun / moon)
  function updateThemeIcons(theme) {
    themeToggleBtns.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fa-solid fa-sun';
          btn.setAttribute('aria-label', 'Switch to light mode');
          btn.setAttribute('title', 'เปลี่ยนเป็นโหมดสว่าง (Light Mode)');
        } else {
          icon.className = 'fa-solid fa-moon';
          btn.setAttribute('aria-label', 'Switch to dark mode');
          btn.setAttribute('title', 'เปลี่ยนเป็นโหมดมืด (Dark Mode)');
        }
      }
    });
  }

  // 4. Initialize
  const currentTheme = getPreferredTheme();
  setTheme(currentTheme);

  // 5. Event listeners for toggle button clicks
  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const activeTheme = document.documentElement.getAttribute('data-bs-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  });

  // 6. Listen for OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
