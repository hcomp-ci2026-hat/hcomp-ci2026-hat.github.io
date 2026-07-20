/* theme-init.js — Inline this in <head> BEFORE stylesheets to prevent FOUC */
(function(){
  var t = localStorage.getItem('hat-theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
    document.documentElement.setAttribute('data-theme','dark');
  }
})();
