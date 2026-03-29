// ─────────────────────────────────────────
// Logo Animation
// ─────────────────────────────────────────

const logoTl = gsap.timeline();

logoTl.fromTo(".animating-logo", {
  yPercent: -100,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 0.2,
  delay: 0.5,
  duration: 2,
  ease: "power4.inOut",
});

// ─────────────────────────────────────────
// Hero Section Animations
// ─────────────────────────────────────────

const heroTl = gsap.timeline();

heroTl.fromTo(".text-group", {
  xPercent: -100,
}, {
  xPercent: 0,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".text-crazy", {
  xPercent: 100,
}, {
  xPercent: 0,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".text-pineapple", {
  xPercent: -100,
}, {
  xPercent: 0,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".text-inc", {
  xPercent: 100,
}, {
  xPercent: 0,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".hero-pill", {
  yPercent: -220,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0.3);

heroTl.fromTo(".hero-badge", {
  scale: 0.6,
  rotate: 15,
  opacity: 0,
}, {
  scale: 1,
  rotate: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0.3);

heroTl.fromTo(".hero-sub", {
  yPercent: 300,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0.3);

heroTl.fromTo(".site-header", {
  yPercent: -100,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 1,
  duration: 1,
}, 1.5);

heroTl.fromTo(".hero .btn-primary", {
  xPercent: -100,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".hero .btn-outline", {
  xPercent: 100,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0);

// ─────────────────────────────────────────
// Hero Sticky Scroll
// ─────────────────────────────────────────

const stickHeroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=700%",
    scrub: 1,
    pin: true,
  }
});

stickHeroTl.to(".animating-logo", {
  x: 200,
  rotate: 25,
}, 0);

stickHeroTl.to(".hero-pill .image-1", {
  y: -100,
}, 0);

stickHeroTl.to(".hero-pill .image-2", {
  y: -100,
}, 0);

stickHeroTl.to(".hero-badge .c-image-1", {
  x: -180,
}, 0);

stickHeroTl.to(".hero-badge .c-image-2", {
  x: -150,
});

stickHeroTl.to(".hero-badge .c-image-3", {
  x: -170,
});

stickHeroTl.to(".hero-badge .c-image-4", {
  x: -170,
});

stickHeroTl.to(".hero-badge .c-image-5", {
  x: -170,
});

stickHeroTl.to(".animating-logo", {
  x: -200,
  rotate: -35,
}, 0.5);

stickHeroTl.to(".hero-pill .image-1", {
  y: 0,
}, 0.5);

stickHeroTl.to(".hero-pill .image-2", {
  y: 0,
}, 0.5);

// ─────────────────────────────────────────
// Services Section
// ─────────────────────────────────────────

const servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    end: "+=300%",
    toggleActions: "play none none reverse",
  }
});

servicesTl.fromTo("#services .section-title", {
  x: "-40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 2,
}, 0);

// ─────────────────────────────────────────
// Footer
// ─────────────────────────────────────────

gsap.fromTo(".footer-wrapper", {
  yPercent: 30,
}, {
  yPercent: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer-wrapper",
    start: "top 90%",
    end: "+=100%",
    toggleActions: "play none none reverse",
    // markers: true,
  }
});


// ─────────────────────────────────────────
// Who We Are — Snap Scroll Line Reveal
// ─────────────────────────────────────────

const lines = gsap.utils.toArray(".section-desc .line");

// All lines start invisible and shifted down
gsap.set(lines, { opacity: 0, y: 60 });

const whoTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#who-we-are",
    start: "top 70%",
    end: `+=${lines.length * 300}`,
    scrub: 0.6,
    pin: true,
    anticipatePin: 1,
    snap: {
      snapTo: 1 / (lines.length - 1),
      duration: { min: 0.3, max: 0.6 },
      ease: "power2.inOut",
    },
  },
});

lines.forEach((line, i) => {
  // 1. Reveal this line — slide up + fade in
  whoTl.to(line, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });

  // 2. Simultaneously scroll the desc block up by this line's height
  //    so the NEXT line rises into the viewport
  if (i < lines.length - 1) {
    whoTl.to(".section-content-container", {
      y: `-=${line.offsetHeight + 12}`,  // +12 accounts for line gap
      duration: 1,
      ease: "power3.out",
    }, "<"); // "<" = runs at same time as the reveal above
  }
});


gsap.to(".animating-logo", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#services",
    start: "top bottom",
    toggleActions: "play reverse play reverse",
  }
});

// ─────────────────────────────────────────
// Services Section — Image Stack Snap Reveal
// ─────────────────────────────────────────

gsap.set(".service-image-2, .service-image-3, .service-image-4, .service-image-5, .service-image-6", {
  transformOrigin: "bottom center",
});

// Initial states
gsap.set(".service-image-1", { opacity: 1,   rotate: 0,   yPercent: 0,    xPercent: 0,   filter: "blur(0px)",  zIndex: 1 });
gsap.set(".service-image-2", { opacity: 0.1, rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 2 });
gsap.set(".service-image-3", { opacity: 0,   rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 3 });
gsap.set(".service-image-4", { opacity: 0,   rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 4 });
gsap.set(".service-image-5", { opacity: 0,   rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 5 });
gsap.set(".service-image-6", { opacity: 0,   rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 6 });

const imgSnapTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-section",
    start: "top top",
    end: "+=500%",            // 5 snaps × 100vh
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    snap: {
      snapTo: 1 / 5,          // snap to 0, 0.2, 0.4, 0.6, 0.8, 1
      duration: { min: 0.2, max: 0.4 },
      ease: "power2.inOut",
    },
  },
});

// ── Snap 1: image-1 exits, image-2 comes in, image-3 peeks ──
imgSnapTl.to(".service-image-1", { opacity: 0, rotate: 35,  yPercent: 150,  xPercent: -50, filter: "blur(12px)", duration: 1 }, 0);
imgSnapTl.to(".service-image-2", { opacity: 1, rotate: 0,   yPercent: 0,    xPercent: 0,   filter: "blur(0px)",  duration: 1 }, 0);
imgSnapTl.to(".service-image-3", { opacity: 0.1, duration: 0.6 }, 0);

// ── Snap 2: image-2 exits, image-3 comes in, image-4 peeks ──
imgSnapTl.to(".service-image-2", { opacity: 0, rotate: 35,  yPercent: 150,  xPercent: -50, filter: "blur(12px)", duration: 1 }, 1);
imgSnapTl.to(".service-image-3", { opacity: 1, rotate: 0,   yPercent: 0,    xPercent: 0,   filter: "blur(0px)",  duration: 1 }, 1);
imgSnapTl.to(".service-image-4", { opacity: 0.1, duration: 0.6 }, 1);

// ── Snap 3: image-3 exits, image-4 comes in, image-5 peeks ──
imgSnapTl.to(".service-image-3", { opacity: 0, rotate: 35,  yPercent: 150,  xPercent: -50, filter: "blur(12px)", duration: 1 }, 2);
imgSnapTl.to(".service-image-4", { opacity: 1, rotate: 0,   yPercent: 0,    xPercent: 0,   filter: "blur(0px)",  duration: 1 }, 2);
imgSnapTl.to(".service-image-5", { opacity: 0.1, duration: 0.6 }, 2);

// ── Snap 4: image-4 exits, image-5 comes in, image-6 peeks ──
imgSnapTl.to(".service-image-4", { opacity: 0, rotate: 35,  yPercent: 150,  xPercent: -50, filter: "blur(12px)", duration: 1 }, 3);
imgSnapTl.to(".service-image-5", { opacity: 1, rotate: 0,   yPercent: 0,    xPercent: 0,   filter: "blur(0px)",  duration: 1 }, 3);
imgSnapTl.to(".service-image-6", { opacity: 0.1, duration: 0.6 }, 3);

// ── Snap 5: image-5 exits, image-6 comes in ──
imgSnapTl.to(".service-image-5", { opacity: 0, rotate: 35,  yPercent: 150,  xPercent: -50, filter: "blur(12px)", duration: 1 }, 4);
imgSnapTl.to(".service-image-6", { opacity: 1, rotate: 0,   yPercent: 0,    xPercent: 0,   filter: "blur(0px)",  duration: 1 }, 4);

// ── Text Initial States ──
gsap.set(".service-title-1, .service-desc-1", { opacity: 1, yPercent: 0,  });
gsap.set(".service-title-2, .service-desc-2", { opacity: 0, yPercent: -100,  });
gsap.set(".service-title-3, .service-desc-3", { opacity: 0, yPercent: -100,  });
gsap.set(".service-title-4, .service-desc-4", { opacity: 0, yPercent: -100,  });
gsap.set(".service-title-5, .service-desc-5", { opacity: 0, yPercent: -100,  });
gsap.set(".service-title-6, .service-desc-6", { opacity: 0, yPercent: -100,  });

// ── Snap 1: title/desc 1 exits down, title/desc 2 comes in ──
imgSnapTl.to(".service-title-1, .service-desc-1", { opacity: 0, yPercent: 100, duration: 1 }, 0);
imgSnapTl.to(".service-title-2, .service-desc-2", { opacity: 1, yPercent: 0,   duration: 1 }, 0);

// ── Snap 2: title/desc 2 exits down, title/desc 3 comes in ──
imgSnapTl.to(".service-title-2, .service-desc-2", { opacity: 0, yPercent: 100, duration: 1 }, 1);
imgSnapTl.to(".service-title-3, .service-desc-3", { opacity: 1, yPercent: 0,   duration: 1 }, 1);

// ── Snap 3: title/desc 3 exits down, title/desc 4 comes in ──
imgSnapTl.to(".service-title-3, .service-desc-3", { opacity: 0, yPercent: 100, duration: 1 }, 2);
imgSnapTl.to(".service-title-4, .service-desc-4", { opacity: 1, yPercent: 0,  duration: 1 }, 2);

// ── Snap 4: title/desc 4 exits down, title/desc 5 comes in ──
imgSnapTl.to(".service-title-4, .service-desc-4", { opacity: 0, yPercent: 100, duration: 1 }, 3);
imgSnapTl.to(".service-title-5, .service-desc-5", { opacity: 1, yPercent: 0,  duration: 1 }, 3);

// ── Snap 5: title/desc 5 exits down, title/desc 6 comes in ──
imgSnapTl.to(".service-title-5, .service-desc-5", { opacity: 0, yPercent: 100, duration: 1 }, 4);
imgSnapTl.to(".service-title-6, .service-desc-6", { opacity: 1, yPercent: 0, duration: 1 }, 4);