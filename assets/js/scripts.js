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
        <a href="/homepage.html">Home</a>
        <div class="z-nav-item has-dropdown">
            <a href="/services.html" class="z-dropdown-trigger">
                Service
                <svg class="nav-chevron" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                    viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </a>
            <ul class="z-nav-dropdown">
                <li><a href="/automation.html">Automation</a></li>
                <li><a href="/custom-software-and-ai.html">Custom Software & AI</a></li>
                <li><a href="/application-design.html">Application Design</a></li>
                <li><a href="/web-design-and-development.html">Web Development & Design</a></li>
                <li><a href="/digital-marketing.html">Digital Marketing</a></li>
            </ul>
        </div>
        <a href="/portfolio.html">Portfolio</a>
        <a href="/about-us.html">About Us</a>
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
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileNavClose');
  const navLinks = mobileNav.querySelectorAll('.mobile-nav-links a');
  
  // Get dropdown elements
  const dropdownItem = document.querySelector('.z-nav-item.has-dropdown');
  const dropdownTrigger = document.querySelector('.z-dropdown-trigger');
  const dropdownMenu = document.querySelector('.z-nav-dropdown');

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

  // ── 4. Dropdown toggle function ─────────────────────────────
  function toggleDropdown(e) {
    // Prevent default only if we're toggling the dropdown
    // Don't prevent if clicking the actual Services page link
    if (dropdownItem.classList.contains('dropdown-open')) {
      // If dropdown is open, clicking the trigger should close it
      e.preventDefault();
      closeDropdown();
    } else if (e.target.closest('.z-dropdown-trigger')) {
      // If dropdown is closed, clicking trigger should open it
      e.preventDefault();
      openDropdown();
    }
  }

  function openDropdown() {
    dropdownItem.classList.add('dropdown-open');
    dropdownMenu.style.display = 'block';
    // Add animation class if needed
    dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
  }

  function closeDropdown() {
    dropdownItem.classList.remove('dropdown-open');
    dropdownMenu.style.maxHeight = null;
    // Use timeout to allow animation to complete before hiding
    setTimeout(() => {
      if (!dropdownItem.classList.contains('dropdown-open')) {
        dropdownMenu.style.display = 'none';
      }
    }, 300);
  }

  // ── 5. Event listeners ──────────────────────────────────────
  hamburger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  
  // Dropdown trigger click handler
  if (dropdownTrigger && dropdownMenu) {
    dropdownTrigger.addEventListener('click', toggleDropdown);
    
    // Close dropdown when clicking a dropdown link
    const dropdownLinks = dropdownMenu.querySelectorAll('a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDropdown();
        closeMenu(); // Close entire menu after selection
      });
    });
    
    // Close dropdown when clicking outside (but inside mobile nav)
    mobileNav.addEventListener('click', (e) => {
      if (dropdownItem.classList.contains('dropdown-open') && 
          !dropdownItem.contains(e.target)) {
        closeDropdown();
      }
    });
  }

  // Close on nav link click (smooth scroll to section)
  navLinks.forEach(link => {
    // Skip the dropdown trigger link as it's handled separately
    if (link.classList.contains('z-dropdown-trigger')) return;
    
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
    if (e.key === 'Escape') {
      if (dropdownItem.classList.contains('dropdown-open')) {
        closeDropdown();
      }
      if (mobileNav.classList.contains('is-open')) {
        closeMenu();
      }
    }
  });

  // ── 6. Focus trap inside the drawer ─────────────────────────
  mobileNav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    // Get all focusable elements including dropdown items when open
    const focusable = Array.from(
      mobileNav.querySelectorAll(
        'a[href]:not(.z-dropdown-trigger), button, [tabindex]:not([tabindex="-1"]), .dropdown-open a'
      )
    ).filter(el => !el.disabled && el.offsetParent !== null);

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

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

  // ── 7. Re-close if viewport becomes desktop width ───────────
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