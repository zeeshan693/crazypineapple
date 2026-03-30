// =============================================
// js/lang-toggle.js
// Shared by all pages and their /fr/ equivalents.
// Detects current language from URL path and
// redirects to the matching page in the other language.
// =============================================

(function () {

  // Are we currently on a French page?
  const isFr = window.location.pathname.includes('/fr/') ||
               window.location.pathname.endsWith('/fr');

  // Get just the filename (e.g. "about.html") from the current path
  function getCurrentFilename() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const last = parts[parts.length - 1];
    // If the last segment looks like a file, use it; otherwise default to index.html
    return (last && last.includes('.')) ? last : 'index.html';
  }

  // Get the base path (everything before /fr/ or the filename)
  function getBasePath() {
    const path = window.location.pathname;
    if (isFr) {
      // Strip /fr/filename → keep everything before /fr/
      return path.replace(/\/fr\/[^/]*$/, '/').replace(/\/fr\/?$/, '/');
    } else {
      // Strip the filename from the end
      return path.replace(/\/[^/]*$/, '/');
    }
  }

  function getTargetUrl(goToFr) {
    const base = getBasePath();       // e.g. "/"  or  "/subdir/"
    const file = getCurrentFilename(); // e.g. "about.html"

    if (goToFr) {
      // EN → FR:  /about.html  →  /fr/about.html
      return base + 'fr/' + file;
    } else {
      // FR → EN:  /fr/about.html  →  /about.html
      return base + file;
    }
  }

  // Wire up a single toggle
  function wireToggle(toggleId) {
    const toggle = document.getElementById(toggleId);
    if (!toggle) return;

    // Sync visual state to current language
    toggle.checked = isFr;

    toggle.addEventListener('change', function () {
      // Prevent double-fire if both desktop + mobile toggles exist
      this.disabled = true;
      window.location.href = getTargetUrl(this.checked);
    });
  }

  // Run after DOM is ready
  function init() {
    wireToggle('langToggle');
    wireToggle('langToggleMobile');

    // Sync the fr-active class on all wrappers
    if (!isFr) {
      document.querySelectorAll('.lang-switch-wrap').forEach(function (wrap) {
        wrap.classList.remove('fr-active');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

