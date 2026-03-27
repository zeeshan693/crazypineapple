/* ─────────────────────────────────────────────────────────────
   scroll-snap.js  —  Staged GSAP scroll animations
   
   HOW IT WORKS:
   Each section is PINNED while its animations play step-by-step.
   Each scroll advances one animation step. Once all steps in a
   section are done, the next scroll moves to the next section.
   Footer scrolls freely.

   Requires: gsap, ScrollTrigger, ScrollToPlugin (in <head>)
───────────────────────────────────────────────────────────────*/

(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* ─────────────────────────────────────────────
     CONFIG — tweak scroll distance per step
  ───────────────────────────────────────────── */
  const STEP_SCROLL_PX  = 300;  // px of scroll track per animation step
  const SNAP_DURATION   = 0.85; // seconds to animate between sections
  const SNAP_EASE       = "power3.inOut";
  const ANIM_DURATION   = 0.55; // seconds per animation step

  /* ─────────────────────────────────────────────
     SECTION DEFINITIONS
     Each section has an array of "steps".
     Each step is a gsap.from() call that fires
     when the user scrolls to that step.
  ───────────────────────────────────────────── */
  const SECTION_DEFS = [
    {
      selector: ".hero-section",
      label: "Hero",
      steps: [
        // step 0 — fires immediately on pin (page load)
        (el) => gsap.timeline()
          .from(el.querySelector(".site-header"),
            { y: -40, opacity: 0, duration: 0.6, ease: "power2.out" })
          .from(el.querySelector(".hero-tag"),
            { y: 24, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.2"),

        // step 1 — first scroll
        (el) => gsap.timeline()
          .from(el.querySelector(".hero-headline .first-line"),
            { y: 60, opacity: 0, duration: 0.65, ease: "power3.out" })
          .from(el.querySelector(".hero-headline .second-line"),
            { y: 60, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.4"),

        // step 2 — second scroll
        (el) => gsap.from(el.querySelector(".hero-sub"),
          { y: 20, opacity: 0, duration: 0.55, ease: "power2.out" }),

        // step 3 — third scroll
        (el) => gsap.from(
          el.querySelectorAll(".hero-ctas .btn-primary, .hero-ctas .btn-outline"),
          { y: 18, opacity: 0, scale: 0.94, duration: 0.5, ease: "back.out(1.5)", stagger: 0.12 }
        ),

        // step 4 — fourth scroll
        (el) => gsap.from(el.querySelectorAll(".hero-gallery-item"),
          { y: 45, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.09 }),
      ],
    },

    {
      selector: "#services",
      label: "Services",
      steps: [
        // step 0 — on section enter
        (el) => gsap.timeline()
          .from(el.querySelector(".section-title"),
            { x: -50, opacity: 0, duration: 0.65, ease: "power3.out" })
          .from(el.querySelector(".section-desc"),
            { x: 50, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.35"),

        // step 1 — first scroll: first row of cards
        (el) => gsap.from(
          [...el.querySelectorAll(".service-card")].slice(0, 3),
          { y: 50, opacity: 0, scale: 0.95, duration: 0.6, ease: "power2.out", stagger: 0.1 }
        ),

        // step 2 — second scroll: second row of cards
        (el) => gsap.from(
          [...el.querySelectorAll(".service-card")].slice(3),
          { y: 50, opacity: 0, scale: 0.95, duration: 0.6, ease: "power2.out", stagger: 0.1 }
        ),
      ],
    },

    {
      selector: ".stats-bar",
      label: "Stats",
      steps: [
        // step 0 — on enter: labels fade in
        (el) => gsap.from(el.querySelectorAll(".stat-label"),
          { y: 20, opacity: 0, duration: 0.55, ease: "power2.out", stagger: 0.15 }),

        // step 1 — first scroll: numbers count up
        (el) => {
          const tl = gsap.timeline();
          el.querySelectorAll(".stat-num").forEach((numEl) => {
            const raw = numEl.textContent.trim();
            const num = parseFloat(raw);
            if (isNaN(num)) return;
            const obj = { val: 0 };
            tl.to(obj, {
              val: num,
              duration: 1.4,
              ease: "power1.out",
              onUpdate() { numEl.textContent = Math.round(obj.val) + (raw.includes("+") ? "+" : ""); },
              onComplete() { numEl.textContent = raw; },
            }, 0); // all start at same time
          });
          // also animate the numbers sliding up
          tl.from(el.querySelectorAll(".stat-num"),
            { y: 30, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 }, 0);
          return tl;
        },
      ],
    },

    {
      selector: ".proven-section",
      label: "Portfolio",
      steps: [
        // step 0 — on enter: header
        (el) => gsap.timeline()
          .from(el.querySelector(".section-title"),
            { x: -50, opacity: 0, duration: 0.65, ease: "power3.out" })
          .from(el.querySelector(".section-desc"),
            { x: 50, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.35"),

        // step 1 — first scroll: top 2 portfolio items
        (el) => gsap.from(
          [...el.querySelectorAll(".portfolio-item")].slice(0, 2),
          { y: 60, opacity: 0, duration: 0.65, ease: "power2.out", stagger: 0.13 }
        ),

        // step 2 — second scroll: bottom 2 portfolio items
        (el) => gsap.from(
          [...el.querySelectorAll(".portfolio-item")].slice(2),
          { y: 60, opacity: 0, duration: 0.65, ease: "power2.out", stagger: 0.13 }
        ),

        // step 3 — third scroll: view portfolio link
        (el) => gsap.from(el.querySelector(".view-portfolio"),
          { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }),
      ],
    },

    {
      selector: ".clients-bar",
      label: "Clients",
      steps: [
        // step 0 — on enter
        (el) => gsap.from(el.querySelectorAll(".client-logo"),
          { y: 25, opacity: 0, scale: 0.88, duration: 0.55, ease: "back.out(1.3)", stagger: 0.09 }),
      ],
    },
  ];

  /* ─────────────────────────────────────────────
     BUILD SECTION OBJECTS
  ───────────────────────────────────────────── */
  const sections = SECTION_DEFS.map((def) => {
    const el = document.querySelector(def.selector);
    if (!el) return null;
    return { ...def, el, currentStep: -1, totalSteps: def.steps.length };
  }).filter(Boolean);

  if (!sections.length) return;

  const footer = document.querySelector(".footer-wrapper");

  /* ─────────────────────────────────────────────
     CSS SETUP
     Pin sections during their step sequence.
     We do this manually via position:fixed trick
     + a spacer, so we don't rely on ScrollTrigger
     pin (which conflicts with our custom wheel logic).
  ───────────────────────────────────────────── */
  sections.forEach((sec) => {
    sec.el.style.minHeight     = "100vh";
    sec.el.style.boxSizing     = "border-box";
    sec.el.style.display       = "flex";
    sec.el.style.flexDirection = "column";
    sec.el.style.justifyContent = "center";
  });

  /* ─────────────────────────────────────────────
     SCROLL POSITION MATH
     
     Layout in the DOM scroll:
     [section0 spacer][section1 spacer]...[footer]
     
     Each section occupies:
       1 viewport (actual display) + (steps-1) * STEP_SCROLL_PX of scroll track
     
     While the user scrolls through that track, the section is FIXED.
     When all steps are done, we scroll to the next section's anchor.
  ───────────────────────────────────────────── */

  /* Calculate each section's scroll range */
  function buildLayout() {
    let offset = 0;
    sections.forEach((sec) => {
      sec.scrollStart = offset;
      sec.scrollTrack = (sec.totalSteps - 1) * STEP_SCROLL_PX; // extra scroll beyond 1vh
      sec.scrollEnd   = offset + sec.scrollTrack;
      offset = sec.scrollEnd + window.innerHeight; // next section starts after
    });

    /* Set document height to accommodate all sections + footer */
    const footerHeight = footer ? footer.offsetHeight : 0;
    document.body.style.height = (offset + footerHeight + 200) + "px";
  }

  buildLayout();
  window.addEventListener("resize", buildLayout);

  /* ─────────────────────────────────────────────
     RENDER LOOP — position sections based on scroll
  ───────────────────────────────────────────── */
  let activeSectionIndex = 0;
  let isTransitioning    = false;
  let lastScrollY        = 0;

  function getSectionAtScroll(y) {
    for (let i = sections.length - 1; i >= 0; i--) {
      if (y >= sections[i].scrollStart) return i;
    }
    return 0;
  }

  function getStepAtScroll(sec, y) {
    const progress = y - sec.scrollStart;
    if (progress <= 0) return 0;
    return Math.min(
      sec.totalSteps - 1,
      Math.floor(progress / STEP_SCROLL_PX) + 1
    );
  }

  function playStep(sec, stepIndex) {
    if (stepIndex <= sec.currentStep) return;
    sec.currentStep = stepIndex;
    sec.steps[stepIndex](sec.el);
    updateDots();
  }

  /* Pin the active section while its steps play */
  function applyLayout(scrollY) {
    const idx = getSectionAtScroll(scrollY);

    sections.forEach((sec, i) => {
      const el = sec.el;

      if (i < idx) {
        /* Section already passed — stick it above viewport */
        el.style.position = "fixed";
        el.style.top      = "-100vh";
        el.style.left     = "0";
        el.style.width    = "100%";
        el.style.zIndex   = "1";
      } else if (i === idx) {
        /* Active section — pin it */
        el.style.position = "fixed";
        el.style.top      = "0";
        el.style.left     = "0";
        el.style.width    = "100%";
        el.style.zIndex   = "2";

        /* Fire steps as user scrolls */
        const step = getStepAtScroll(sec, scrollY);
        playStep(sec, step);
      } else {
        /* Future section — hide below viewport */
        el.style.position = "fixed";
        el.style.top      = "100vh";
        el.style.left     = "0";
        el.style.width    = "100%";
        el.style.zIndex   = "1";
      }
    });

    /* Footer — position after all sections */
    if (footer) {
      const lastSec    = sections[sections.length - 1];
      const footerTop  = lastSec.scrollEnd + window.innerHeight;
      const footerPos  = scrollY >= footerTop
        ? 0                                        /* scrolling into footer */
        : footerTop - scrollY;                     /* below viewport */
      footer.style.position  = "fixed";
      footer.style.top       = Math.max(0, footerPos) + "px";
      footer.style.left      = "0";
      footer.style.width     = "100%";
      footer.style.zIndex    = "3";
    }

    activeSectionIndex = idx;
    updateDots();
  }

  /* Run on every scroll frame */
  function onScroll() {
    applyLayout(window.scrollY);
    lastScrollY = window.scrollY;
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ─────────────────────────────────────────────
     SMOOTH STEP SCROLL
     Instead of raw scroll, we animate scrollY
     to the next step anchor using gsap.
  ───────────────────────────────────────────── */
  let pendingScroll    = false;
  let targetScrollY    = 0;

  function scrollToStep(targetY) {
    if (pendingScroll) return;
    pendingScroll = true;
    targetScrollY = Math.max(0, targetY);

    gsap.to(window, {
      scrollTo: { y: targetScrollY, autoKill: false },
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => { pendingScroll = false; },
    });
  }

  function getNextStepY(direction) {
    const y   = window.scrollY;
    const idx = getSectionAtScroll(y);
    const sec = sections[idx];

    if (direction > 0) {
      /* Scroll forward */
      const currentStep = getStepAtScroll(sec, y);
      if (currentStep < sec.totalSteps - 1) {
        /* Still steps left in this section */
        return sec.scrollStart + currentStep * STEP_SCROLL_PX + STEP_SCROLL_PX;
      } else {
        /* All steps done — jump to next section */
        if (idx < sections.length - 1) {
          return sections[idx + 1].scrollStart;
        } else {
          /* Last section done — scroll into footer */
          return sec.scrollEnd + window.innerHeight;
        }
      }
    } else {
      /* Scroll backward */
      const currentStep = getStepAtScroll(sec, y);
      if (currentStep > 0) {
        /* Go back one step */
        return sec.scrollStart + (currentStep - 1) * STEP_SCROLL_PX;
      } else if (idx > 0) {
        /* Go to previous section's last step */
        const prevSec = sections[idx - 1];
        return prevSec.scrollEnd;
      } else {
        return 0;
      }
    }
  }

  /* ─────────────────────────────────────────────
     WHEEL INPUT
  ───────────────────────────────────────────── */
  let wheelBuffer  = 0;
  let wheelTimeout = null;

  window.addEventListener("wheel", (e) => {
    /* Let footer scroll naturally */
    if (footer && footer.contains(e.target)) return;

    /* Check if we're in footer territory */
    const lastSec   = sections[sections.length - 1];
    const footerTop = lastSec.scrollEnd + window.innerHeight;
    if (window.scrollY >= footerTop) return;

    e.preventDefault();
    if (pendingScroll) return;

    wheelBuffer += e.deltaY;
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => { wheelBuffer = 0; }, 150);

    if (Math.abs(wheelBuffer) > 50) {
      const dir = wheelBuffer > 0 ? 1 : -1;
      wheelBuffer = 0;
      scrollToStep(getNextStepY(dir));
    }
  }, { passive: false });

  /* ─────────────────────────────────────────────
     TOUCH INPUT
  ───────────────────────────────────────────── */
  let touchStartY = 0;

  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchend", (e) => {
    if (footer && footer.contains(e.target)) return;
    const lastSec   = sections[sections.length - 1];
    const footerTop = lastSec.scrollEnd + window.innerHeight;
    if (window.scrollY >= footerTop) return;
    if (pendingScroll) return;

    const dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 35) {
      scrollToStep(getNextStepY(dy > 0 ? 1 : -1));
    }
  }, { passive: true });

  /* ─────────────────────────────────────────────
     KEYBOARD INPUT
  ───────────────────────────────────────────── */
  window.addEventListener("keydown", (e) => {
    const lastSec   = sections[sections.length - 1];
    const footerTop = lastSec.scrollEnd + window.innerHeight;
    if (window.scrollY >= footerTop) return;

    if (["ArrowDown", "PageDown", " "].includes(e.key)) {
      e.preventDefault();
      if (!pendingScroll) scrollToStep(getNextStepY(1));
    }
    if (["ArrowUp", "PageUp"].includes(e.key)) {
      e.preventDefault();
      if (!pendingScroll) scrollToStep(getNextStepY(-1));
    }
  });

  /* ─────────────────────────────────────────────
     NAV DOTS
  ───────────────────────────────────────────── */
  const navEl = document.createElement("nav");
  navEl.className = "snap-nav";
  navEl.innerHTML = `<style>
    .snap-nav{
      position:fixed;right:24px;top:50%;transform:translateY(-50%);
      display:flex;flex-direction:column;gap:11px;z-index:9999;
    }
    .snap-dot{
      width:10px;height:10px;border-radius:50%;
      background:rgba(0,0,0,0.18);
      border:2px solid rgba(0,0,0,0.28);
      cursor:pointer;transition:all .3s ease;position:relative;
    }
    .snap-nav.on-dark .snap-dot{
      background:rgba(255,255,255,0.35);
      border-color:rgba(255,255,255,0.6);
    }
    .snap-dot.active{
      background:#A16C16;border-color:#A16C16;transform:scale(1.35);
    }
    .snap-dot:hover::after{
      content:attr(data-label);
      position:absolute;right:18px;top:50%;transform:translateY(-50%);
      background:rgba(0,0,0,0.78);color:#fff;
      padding:4px 10px;border-radius:5px;
      font-size:11px;white-space:nowrap;font-family:sans-serif;
      pointer-events:none;
    }
    /* Step progress indicator under each dot */
    .snap-dot-progress{
      position:absolute;left:50%;transform:translateX(-50%);
      bottom:-8px;display:flex;gap:3px;
    }
    .snap-dot-progress span{
      width:3px;height:3px;border-radius:50%;
      background:rgba(0,0,0,0.2);transition:background .3s;
    }
    .snap-nav.on-dark .snap-dot-progress span{
      background:rgba(255,255,255,0.3);
    }
    .snap-dot-progress span.done{
      background:#A16C16;
    }
  </style>`;

  sections.forEach((sec, i) => {
    const dot = document.createElement("div");
    dot.className = "snap-dot" + (i === 0 ? " active" : "");
    dot.dataset.label = sec.label;

    /* mini progress dots */
    if (sec.totalSteps > 1) {
      const prog = document.createElement("div");
      prog.className = "snap-dot-progress";
      for (let s = 0; s < sec.totalSteps; s++) {
        const sp = document.createElement("span");
        prog.appendChild(sp);
      }
      dot.appendChild(prog);
    }

    dot.addEventListener("click", () => {
      if (!pendingScroll) scrollToStep(sec.scrollStart);
    });

    navEl.appendChild(dot);
  });

  document.body.appendChild(navEl);

  function updateDots() {
    const idx = activeSectionIndex;
    navEl.classList.toggle("on-dark", idx === 0);

    document.querySelectorAll(".snap-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === idx);

      /* update step progress pips */
      const pips = dot.querySelectorAll(".snap-dot-progress span");
      pips.forEach((pip, s) => {
        pip.classList.toggle("done", s <= sections[i].currentStep);
      });
    });
  }

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  window.scrollTo(0, 0);

  /* Fire step 0 of the first section immediately */
  requestAnimationFrame(() => {
    applyLayout(0);
    playStep(sections[0], 0);
  });

})();