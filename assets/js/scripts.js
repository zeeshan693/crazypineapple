/* ============================================================
   MOBILE-MENU.JS — Group Crazy Pineapple Inc
   Inject and control the slide-in mobile nav drawer
   ============================================================ */

(function () {
  // ── 1. Inject the drawer HTML ───────────────────────────────
  const menuHTML = `
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop" aria-hidden="true"></div>

    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation" aria-hidden="true">
      <div class="mobile-nav-header">
        <div class="mobile-nav-logo">
          <img src="assets/images/site-logo.png" alt="Crazy Pineapple logo">
        </div>
        <button class="mobile-nav-close" id="mobileNavClose" aria-label="Close menu"></button>
      </div>

      <div class="mobile-nav-links">
        <a href="#" class="active">Home</a>
        <a href="#services">Service</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#">About</a>
      </div>

      <div class="mobile-nav-divider"></div>

      <div class="mobile-nav-footer">
        <a href="#" class="mobile-nav-contact-btn">
          Contact Us
          <span class="mobile-nav-contact-btn-icon">
            <img src="assets/images/site-logo.png" alt="">
          </span>
        </a>
        <div class="mobile-nav-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">tw</a>
          <a href="#" aria-label="Instagram">ig</a>
        </div>
      </div>
    </nav>
  `;

  // Insert before closing </body>
  document.body.insertAdjacentHTML('beforeend', menuHTML);

  // ── 2. Grab references ──────────────────────────────────────
  const hamburger   = document.querySelector('.hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const backdrop    = document.getElementById('mobileNavBackdrop');
  const closeBtn    = document.getElementById('mobileNavClose');
  const navLinks    = mobileNav.querySelectorAll('.mobile-nav-links a');

  if (!hamburger || !mobileNav) return; // safety guard

  // ── 3. Open / close helpers ─────────────────────────────────
  function openMenu() {
    mobileNav.classList.add('is-open');
    backdrop.classList.add('is-open');
    hamburger.classList.add('is-open');
    document.body.classList.add('nav-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  }

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
    hamburger.focus();
  }

  function toggleMenu() {
    mobileNav.classList.contains('is-open') ? closeMenu() : openMenu();
  }

  // ── 4. Event listeners ──────────────────────────────────────
  hamburger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close on nav link click (smooth scroll to section)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // If the link points to a section on the same page, close the menu
      // and let the browser handle the smooth scroll
      if (href && href.startsWith('#') && href.length > 1) {
        closeMenu();
        // Small delay so the drawer finishes closing before scrolling
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 350);
        e.preventDefault();
      } else {
        closeMenu();
      }

      // Update active state
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // ── 5. Focus trap inside the drawer ─────────────────────────
  mobileNav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    const focusable = Array.from(
      mobileNav.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.disabled);

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: wrap to last
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: wrap to first
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // ── 6. Re-close if viewport becomes desktop width ───────────
  const mql = window.matchMedia('(min-width: 1024px) and (orientation: landscape)');

  function handleBreakpoint(e) {
    if (e.matches && mobileNav.classList.contains('is-open')) {
      closeMenu();
    }
  }

  // Use the modern addEventListener API with a fallback
  if (mql.addEventListener) {
    mql.addEventListener('change', handleBreakpoint);
  } else {
    mql.addListener(handleBreakpoint); // Safari < 14 fallback
  }

})();