// ─────────────────────────────────────────
// Mobile Guard - Only for layout adjustments, not for disabling animations
// ─────────────────────────────────────────

const isMobile = () => window.innerWidth <= 768;

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
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".text-crazy", {
  xPercent: 100,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".text-pineapple", {
  xPercent: -100,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  duration: 2,
  ease: "circ.inOut",
}, 0);

heroTl.fromTo(".text-inc", {
  xPercent: 100,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
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
// Hero Sticky Scroll (works on all devices, but adjust values for mobile)
// ─────────────────────────────────────────

const stickHeroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: isMobile() ? "+=300%" : "+=700%",
    scrub: 1,
    pin: true,
  }
});

// Responsive movement values
const getLogoX = () => isMobile() ? 50 : 200;
const getLogoX2 = () => isMobile() ? -50 : -200;
const getPillY = () => isMobile() ? -40 : -100;
const getBadgeX = () => isMobile() ? -60 : -180;

stickHeroTl.to(".animating-logo", {
  x: getLogoX(),
  rotate: isMobile() ? 15 : 25,
}, 0);

stickHeroTl.to(".hero-pill .image-1", {
  y: getPillY(),
}, 0);

stickHeroTl.to(".hero-pill .image-2", {
  y: getPillY(),
}, 0);

stickHeroTl.to(".hero-badge .c-image-1", {
  x: getBadgeX(),
}, 0);

stickHeroTl.to(".hero-badge .c-image-2", {
  x: isMobile() ? -50 : -150,
});

stickHeroTl.to(".hero-badge .c-image-3", {
  x: isMobile() ? -55 : -170,
});

stickHeroTl.to(".hero-badge .c-image-4", {
  x: isMobile() ? -55 : -170,
});

stickHeroTl.to(".hero-badge .c-image-5", {
  x: isMobile() ? -55 : -170,
});

stickHeroTl.to(".animating-logo", {
  x: getLogoX2(),
  rotate: isMobile() ? -20 : -35,
}, 0.5);

stickHeroTl.to(".hero-pill .image-1", {
  y: 0,
}, 0.5);

stickHeroTl.to(".hero-pill .image-2", {
  y: 0,
}, 0.5);

// ─────────────────────────────────────────
// Services Section Entrance
// ─────────────────────────────────────────

const servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: isMobile() ? "top 85%" : "top 80%",
    end: "+=300%",
    toggleActions: "play none none reverse",
  }
});

servicesTl.fromTo("#services .section-title", {
  x: isMobile() ? "-20vw" : "-40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: isMobile() ? 1.2 : 2,
}, 0);

// ─────────────────────────────────────────
// Footer
// ─────────────────────────────────────────

gsap.fromTo(".footer-wrapper", {
  yPercent: isMobile() ? 15 : 30,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 1,
  duration: isMobile() ? 0.8 : 1,
  scrollTrigger: {
    trigger: ".footer-wrapper",
    start: isMobile() ? "top 90%" : "top 85%",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

// ─────────────────────────────────────────
// Who We Are — Snap Scroll Line Reveal (ENABLED ON MOBILE)
// ─────────────────────────────────────────

const lines = gsap.utils.toArray(".section-desc .line");

// Set initial states for lines
gsap.set(lines, { opacity: 0, y: 60 });

// Responsive snap settings for mobile vs desktop
const getSnapEnd = () => {
  if (isMobile()) {
    return `+=${lines.length * 150}`;
  }
  return `+=${lines.length * 300}`;
};

const getSnapDuration = () => {
  return isMobile() ? { min: 0.2, max: 0.4 } : { min: 0.3, max: 0.6 };
};

const whoTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#who-we-are",
    start: isMobile() ? "top 80%" : "top 70%",
    end: getSnapEnd(),
    scrub: 0.6,
    pin: true,
    anticipatePin: 1,
    snap: {
      snapTo: 1 / (lines.length - 1),
      duration: getSnapDuration(),
      ease: "power2.inOut",
    },
  },
});

lines.forEach((line, i) => {
  whoTl.to(line, {
    opacity: 1,
    y: 0,
    duration: isMobile() ? 0.6 : 1,
    ease: "power3.out",
  });

  if (i < lines.length - 1) {
    const lineHeight = line.offsetHeight + (isMobile() ? 8 : 12);
    whoTl.to(".section-content-container", {
      y: `-=${lineHeight}`,
      duration: isMobile() ? 0.6 : 1,
      ease: "power3.out",
    }, "<");
  }
});

// ─────────────────────────────────────────
// Animating Logo Fade Out on Services
// ─────────────────────────────────────────

gsap.fromTo(".animating-logo", {
  opacity: 0.2,
}, {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#services",
    start: "top bottom",
    toggleActions: "play none none reverse",
  }
});

// ─────────────────────────────────────────
// Services Section — Image Stack Snap Reveal (UPDATED FOR 5 SERVICES)
// ─────────────────────────────────────────

// Set initial states for all devices (UPDATED: removed service-image-6)
gsap.set(".service-image-2, .service-image-3, .service-image-4, .service-image-5", {
  transformOrigin: "bottom center",
});

gsap.set(".service-image-1", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", zIndex: 1 });
gsap.set(".service-image-2", { opacity: 0.1, rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 2 });
gsap.set(".service-image-3", { opacity: 0, rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 3 });
gsap.set(".service-image-4", { opacity: 0, rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 4 });
gsap.set(".service-image-5", { opacity: 0, rotate: -35, yPercent: -150, xPercent: -50, filter: "blur(12px)", zIndex: 5 });

// Text + Link initial states (UPDATED: removed service-6)
gsap.set(".service-title-1, .service-desc-1, .service-link-1", { opacity: 1, yPercent: 0 });
gsap.set(".service-title-2, .service-desc-2, .service-link-2", { opacity: 0, yPercent: -100 });
gsap.set(".service-title-3, .service-desc-3, .service-link-3", { opacity: 0, yPercent: -100 });
gsap.set(".service-title-4, .service-desc-4, .service-link-4", { opacity: 0, yPercent: -100 });
gsap.set(".service-title-5, .service-desc-5, .service-link-5", { opacity: 0, yPercent: -100 });

// Responsive settings for mobile (UPDATED: adjusted snap values for 5 services)
const getSnapEndPercent = () => isMobile() ? "+=300%" : "+=500%";
const getSnapToValue = () => isMobile() ? 1 / 4 : 1 / 4; // Updated for 5 services (4 snaps)
const getDuration = () => isMobile() ? 0.6 : 1;

const imgSnapTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-section",
    start: "top top",
    end: getSnapEndPercent(),
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    snap: {
      snapTo: getSnapToValue(),
      duration: isMobile() ? { min: 0.15, max: 0.3 } : { min: 0.2, max: 0.4 },
      ease: "power2.inOut",
    },
  },
});

if (isMobile()) {
  // Mobile: Simplified snap sequence for 5 services
  
  // Snap 1: image-1 to image-2
  imgSnapTl.to(".service-image-1", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: getDuration() }, 0);
  imgSnapTl.to(".service-image-2", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: getDuration() }, 0);
  imgSnapTl.to(".service-title-1, .service-desc-1, .service-link-1", { opacity: 0, yPercent: 100, duration: getDuration() }, 0);
  imgSnapTl.to(".service-title-2, .service-desc-2, .service-link-2", { opacity: 1, yPercent: 0, duration: getDuration() }, 0);

  // Snap 2: image-2 to image-3
  imgSnapTl.to(".service-image-2", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: getDuration() }, 1);
  imgSnapTl.to(".service-image-3", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: getDuration() }, 1);
  imgSnapTl.to(".service-title-2, .service-desc-2, .service-link-2", { opacity: 0, yPercent: 100, duration: getDuration() }, 1);
  imgSnapTl.to(".service-title-3, .service-desc-3, .service-link-3", { opacity: 1, yPercent: 0, duration: getDuration() }, 1);

  // Snap 3: image-3 to image-4
  imgSnapTl.to(".service-image-3", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: getDuration() }, 2);
  imgSnapTl.to(".service-image-4", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: getDuration() }, 2);
  imgSnapTl.to(".service-title-3, .service-desc-3, .service-link-3", { opacity: 0, yPercent: 100, duration: getDuration() }, 2);
  imgSnapTl.to(".service-title-4, .service-desc-4, .service-link-4", { opacity: 1, yPercent: 0, duration: getDuration() }, 2);

  // Snap 4: image-4 to image-5
  imgSnapTl.to(".service-image-4", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: getDuration() }, 3);
  imgSnapTl.to(".service-image-5", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: getDuration() }, 3);
  imgSnapTl.to(".service-title-4, .service-desc-4, .service-link-4", { opacity: 0, yPercent: 100, duration: getDuration() }, 3);
  imgSnapTl.to(".service-title-5, .service-desc-5, .service-link-5", { opacity: 1, yPercent: 0, duration: getDuration() }, 3);

} else {
  // Desktop: Full snap sequence for 5 services (UPDATED: 4 snaps instead of 5)

  // Snap 1
  imgSnapTl.to(".service-image-1", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: 1 }, 0);
  imgSnapTl.to(".service-image-2", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: 1 }, 0);
  imgSnapTl.to(".service-image-3", { opacity: 0.1, duration: 0.6 }, 0);
  imgSnapTl.to(".service-title-1, .service-desc-1, .service-link-1", { opacity: 0, yPercent: 100, duration: 1 }, 0);
  imgSnapTl.to(".service-title-2, .service-desc-2, .service-link-2", { opacity: 1, yPercent: 0, duration: 1 }, 0);

  // Snap 2
  imgSnapTl.to(".service-image-2", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: 1 }, 1);
  imgSnapTl.to(".service-image-3", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: 1 }, 1);
  imgSnapTl.to(".service-image-4", { opacity: 0.1, duration: 0.6 }, 1);
  imgSnapTl.to(".service-title-2, .service-desc-2, .service-link-2", { opacity: 0, yPercent: 100, duration: 1 }, 1);
  imgSnapTl.to(".service-title-3, .service-desc-3, .service-link-3", { opacity: 1, yPercent: 0, duration: 1 }, 1);

  // Snap 3
  imgSnapTl.to(".service-image-3", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: 1 }, 2);
  imgSnapTl.to(".service-image-4", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: 1 }, 2);
  imgSnapTl.to(".service-image-5", { opacity: 0.1, duration: 0.6 }, 2);
  imgSnapTl.to(".service-title-3, .service-desc-3, .service-link-3", { opacity: 0, yPercent: 100, duration: 1 }, 2);
  imgSnapTl.to(".service-title-4, .service-desc-4, .service-link-4", { opacity: 1, yPercent: 0, duration: 1 }, 2);

  // Snap 4
  imgSnapTl.to(".service-image-4", { opacity: 0, rotate: 35, yPercent: 150, xPercent: -50, filter: "blur(12px)", duration: 1 }, 3);
  imgSnapTl.to(".service-image-5", { opacity: 1, rotate: 0, yPercent: 0, xPercent: 0, filter: "blur(0px)", duration: 1 }, 3);
  imgSnapTl.to(".service-title-4, .service-desc-4, .service-link-4", { opacity: 0, yPercent: 100, duration: 1 }, 3);
  imgSnapTl.to(".service-title-5, .service-desc-5, .service-link-5", { opacity: 1, yPercent: 0, duration: 1 }, 3);
}

// Refresh ScrollTrigger to ensure all animations work correctly
ScrollTrigger.refresh();