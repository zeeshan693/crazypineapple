// Logo Animation Timeline
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

// Hero Section Animatons Timeline

const heroTl = gsap.timeline();

heroTl.fromTo(".text-group",
  {
    xPercent: -100,
  },
  {
    xPercent: 0,
    duration: 2,
    ease: "circ.inOut",
  },
  0
);

heroTl.fromTo(".text-crazy",
  {
    xPercent: 100,
  },
  {
    xPercent: 0,
    duration: 2,
    ease: "circ.inOut",
  },
  0
);

heroTl.fromTo(".text-pineapple",
  {
    xPercent: -100,
  },
  {
    xPercent: 0,
    duration: 2,
    ease: "circ.inOut",
  },
  0
);

heroTl.fromTo(".text-inc",
  {
    xPercent: 100,
  },
  {
    xPercent: 0,
    duration: 2,
    ease: "circ.inOut",
  },
  0
);

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

heroTl.fromTo(".hero-tag", {
  yPercent: -100,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 1,
  duration: 1,
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

heroTl.fromTo(".hero .btn-primary",
  {
    xPercent: -100,
    opacity: 0,
  },
  {
    xPercent: 0,
    opacity: 1,
    duration: 2,
    ease: "circ.inOut",
  },
  0
);

heroTl.fromTo(".hero .btn-outline",
  {
    xPercent: 100,
    opacity: 0,
  },
  {
    xPercent: 0,
    opacity: 1,
    duration: 2,
    ease: "circ.inOut",
  },
  0
);

// hero stick for a moment

const stickHeroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=700%",
    scrub: 1,
    pin: true,
    // pinSpacing: true,
    // invalidateOnRefresh: true,
    // anticipatePin: 1,
    // markers: true,
  }
});

stickHeroTl.to(".animating-logo", {
  x: 200,
  rotate: 25,
}, 0);

stickHeroTl.to(".hero-pill .image-1",{
  y: -100,
}, 0);

stickHeroTl.to(".hero-pill .image-2",{
  y: -100,
}, 0);

stickHeroTl.to(".hero-badge .c-image-1",{
  x: -180,
}, 0);

stickHeroTl.to(".hero-badge .c-image-2",{
  x: -150,
});

stickHeroTl.to(".hero-badge .c-image-3",{
  x: -170,
});

stickHeroTl.to(".hero-badge .c-image-4",{
  x: -170,
});

stickHeroTl.to(".hero-badge .c-image-5",{
  x: -170,
});

stickHeroTl.to(".animating-logo", {
  x: -200,
  rotate: -35,
}, 0.5);

stickHeroTl.to(".hero-pill .image-1",{
  y: 0,
}, 0.5);

stickHeroTl.to(".hero-pill .image-2",{
  y: 0,
}, 0.5);



// const stickLogoTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".animating-logo",
//     start: "top top",
//     end: "+=300%",
//     scrub: 1,
//     pin: true,
//     // pinSpacing: true,
//     invalidateOnRefresh: true,
//     anticipatePin: 1,
//     // markers: true,
//   }
// });

// hero gallery animations

const galleryTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-gallery",
    start: "top 85%",
    // end: "+=300%",
    // scrub: 1,
    // pin: true,
    // pinSpacing: true,
    // invalidateOnRefresh: true,
    // anticipatePin: 1,
    // toggleActions: "play none none none",
    // markers: true,
  }
});

galleryTl.to(".animating-logo", {
  x: 0,
  rotate: 0,
  opacity: 0.2,
}, 0);

galleryTl.fromTo(".hero-gallery .hero-gallery-item-1", {
  yPercent: 20,
  rotate: 15,
}, {
  yPercent: 0,
  rotate: 0,
  duration: 1,
  ease: "circ.inOut",
}, 0);


galleryTl.fromTo(".hero-gallery .hero-gallery-item-2", {
  yPercent: 20,
  rotate: -15,
}, {
  yPercent: 0,
  rotate: 0,
  duration: 1,
  ease: "circ.inOut",
}, 0);

galleryTl.fromTo(".hero-gallery .hero-gallery-item-3", {
  yPercent: 20,
  rotate: 15,
}, {
  yPercent: 0,
  rotate: 0,
  duration: 1,
  ease: "circ.inOut",
}, 0);

// hero gallery sticky scroll

// const stickyGalleryTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".gallery-below-hero",
//     // start: "center center",
//     // end: "+=100%",
//     scrub: 1,
//     pin: true,
//     // pinSpacing: true,
//     // invalidateOnRefresh: true,
//     // anticipatePin: 1,
//     // markers: true,
//   }
// });

// -------------------------------------------------
// DRAG TO SCROLL
// -------------------------------------------------
const heroGallery = document.querySelector(".hero-gallery");

if (heroGallery) {
    let isDown = false;
    let startX;
    let scrollLeft;

    heroGallery.addEventListener("mousedown", (e) => {
        isDown = true;
        heroGallery.style.cursor = "grabbing";
        startX = e.pageX - heroGallery.offsetLeft;
        scrollLeft = heroGallery.scrollLeft;
    });

    heroGallery.addEventListener("mouseleave", () => {
        isDown = false;
        heroGallery.style.cursor = "grab";
    });

    heroGallery.addEventListener("mouseup", () => {
        isDown = false;
        heroGallery.style.cursor = "grab";
    });

    heroGallery.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - heroGallery.offsetLeft;
        const walk = (x - startX) * 1.5;
        heroGallery.scrollLeft = scrollLeft - walk;
    });

    heroGallery.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX - heroGallery.offsetLeft;
        scrollLeft = heroGallery.scrollLeft;
    });

    heroGallery.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX - heroGallery.offsetLeft;
        const walk = (x - startX) * 1.5;
        heroGallery.scrollLeft = scrollLeft - walk;
    });
}

// *******
// ********* Services Section Animation
// ******

const servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#services", 
    start: "top 80%",
    end: "+=300%",
    toggleActions: "play none none reverse",
    // markers: true,
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

servicesTl.fromTo("#services .section-desc", {
  x: "40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 2,
}, 0);

gsap.to(".animating-logo", {
  x: -150,
  rotate: -35,
  scrollTrigger: {
    trigger: "#services",
    start: "top center",
    endTrigger: "#services .row2",
    end: "bottom bottom",
    scrub: 1,
  }
});

gsap.to(".animating-logo", {
  x: 150,
  rotate: 15,
  scrollTrigger: {
    trigger: "#services .row2",
    start: "top top",
    endTrigger: ".stats-bar",
    end: "bottom bottom",
    scrub: 2,
  }
});

servicesTl.fromTo("#services .row1 .service-card:nth-child(1)", {
  x: "-40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 2,
}, 0);

servicesTl.fromTo("#services .row1 .service-card:nth-child(2)", {
  y: "40vw",
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  duration: 2,
}, 0);

servicesTl.fromTo("#services .row1 .service-card:nth-child(3)", {
  x: "40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 2,
}, 0);

const servicesRowTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-grid .row2", 
    start: "top 80%",
    end: "+=300%",
    toggleActions: "play none none reverse",
    // markers: true,
  }
});

servicesRowTwoTl.fromTo(".services-grid .row2 .service-card:nth-child(1)", {
  x: "-40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 2,
}, 0);

servicesRowTwoTl.fromTo(".services-grid .row2 .service-card:nth-child(2)", {
  y: "40vw",
  opacity: 0,
}, {
  y: 0,
  opacity: 1,
  duration: 2,
}, 0);

servicesRowTwoTl.fromTo(".services-grid .row2 .service-card:nth-child(3)", {
  x: "40vw",
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 2,
}, 0);

// ***********
// ************* Stats Items
// ***********

gsap.fromTo(".stat-item", {
  yPercent: 50,
  opacity: 0,
}, {
  yPercent: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".stats-bar",
    start: "top center",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

// *********
// ************ Portfolio Section
// **********

gsap.fromTo(".proven-section .section-title", {
  xPercent: -50,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".proven-section",
    start: "top center",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".proven-section .section-desc", {
  xPercent: 50,
  opacity: 0,
}, {
  xPercent: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".proven-section",
    start: "top center",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

// Portfolio Grid

gsap.fromTo(".portfolio-grid .portfolio-item:nth-child(1)", {
  xPercent: -50,
  rotate: -35,
}, {
  xPercent: 0,
  rotate: 0,
  scrollTrigger: {
    trigger: ".portfolio-grid",
    start: "top center",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".portfolio-grid .portfolio-item:nth-child(2)", {
  xPercent: 50,
  rotate: 35,
}, {
  xPercent: 0,
  rotate: 0,
  scrollTrigger: {
    trigger: ".portfolio-grid",
    start: "top center",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".portfolio-grid .portfolio-item:nth-child(3)", {
  xPercent: -50,
  rotate: -35,
}, {
  xPercent: 0,
  rotate: 0,
  scrollTrigger: {
    trigger: ".portfolio-grid",
    start: "top top",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

gsap.fromTo(".portfolio-grid .portfolio-item:nth-child(4)", {
  xPercent: 50,
  rotate: 35,
}, {
  xPercent: 0,
  rotate: 0,
  scrollTrigger: {
    trigger: ".portfolio-grid",
    start: "top top",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

// View Our Portfolio link

gsap.fromTo(".proven-section .view-portfolio", {
  xPercent: 50,
}, {
  xPercent: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".proven-section .view-portfolio",
    start: "top 80%",
    end: "+=100%",
    toggleActions: "play none none reverse",
  }
});

// Client Logos

gsap.fromTo(".clients-bar .clients-inner .client-logo", {
  yPercent: 150,
}, {
  yPercent: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".clients-bar",
    start: "top 80%",
    end: "+=50%",
    toggleActions: "play none none reverse",
  }
});

// Site Footer

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

