/* ============================================================
   HAT Workshop — Navigation, Dark Mode Toggle
   Lightweight Vanilla JS
   ============================================================ */

(function () {
  'use strict';

  /* -----------------------------------------------------------
     Dark Mode Toggle
     ----------------------------------------------------------- */
  function initThemeToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    var iconLight = btn.querySelector('.icon-light');
    var iconDark = btn.querySelector('.icon-dark');

    function updateIcons() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (iconLight && iconDark) {
        iconLight.style.display = isDark ? 'none' : 'block';
        iconDark.style.display = isDark ? 'block' : 'none';
      }
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('hat-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('hat-theme', 'dark');
      }
      updateIcons();
    });

    updateIcons();
  }

  /* -----------------------------------------------------------
     Mobile Menu Toggle
     ----------------------------------------------------------- */
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');

      // Manage focus: when opening, focus first link
      if (!expanded) {
        var firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Close menu on Escape
    nav.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* -----------------------------------------------------------
     Skip-to-Content Focus Management
     ----------------------------------------------------------- */
  function initSkipLink() {
    var skipLink = document.querySelector('.skip-link');
    if (!skipLink) return;

    skipLink.addEventListener('click', function (e) {
      var target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  }

  /* -----------------------------------------------------------
     Page-Load Animation (respects reduced motion)
     ----------------------------------------------------------- */
  function initLoadAnimation() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    document.documentElement.classList.add('js-loaded');
  }

  /* -----------------------------------------------------------
     Initialize All
     ----------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initMobileMenu();
    initSkipLink();
    initLoadAnimation();
  });
})();
