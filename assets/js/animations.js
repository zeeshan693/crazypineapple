// assets/js/animations.js

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // -------------------------------------------------
    // RESPONSIVE HELPERS (copied from scripts.js)
    // -------------------------------------------------
    const isMobile     = () => window.matchMedia("(max-width: 480px)").matches;
    const isSmallMobile= () => window.matchMedia("(max-width: 410px)").matches;
    const isTinyMobile = () => window.matchMedia("(max-width: 390px)").matches;
    const isMicroMobile = () => window.matchMedia("(max-width: 360px)").matches;
    const isTablet     = () => window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches;
    const isTabletLand = () => window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches;
    const isDesktop    = () => window.matchMedia("(min-width: 1025px)").matches;

    function rv(micro, tiny, mobile, tablet, tabletLand, desktop) {
        if (isMicroMobile())  return micro; // 360px and below
        if (isTinyMobile())  return tiny; // 390px and below
        if (isSmallMobile()) return mobile; // 410px and below
        if (isMobile())      return mobile; // 480px and below
        if (isTablet())      return tablet; // 481px to 768px
        if (isTabletLand())  return tabletLand; // 769px to 1024px
        return desktop; // 1025px and above
    }

    // -------------------------------------------------
    // SET INITIAL STATES
    // -------------------------------------------------
    gsap.set(".animating-logo", {
        yPercent: -100,
        opacity: 0,
    });

    // Hero text elements - initial states based on device
    if (isMobile() || isTablet()) {
        // Mobile/tablet: elements start visible but with different transforms
        gsap.set(".text-group, .text-crazy, .text-pineapple, .text-inc", {
            opacity: 0,
            xPercent: 0,
        });
        
        gsap.set(".hero-pill, .hero-badge, .hero-tag, .hero-sub, .site-header, .hero .btn-primary, .hero .btn-outline", {
            opacity: 0,
        });
    } else {
        // Desktop: start with transforms
        gsap.set(".text-group, .text-pineapple", { xPercent: -100 });
        gsap.set(".text-crazy, .text-inc", { xPercent: 100 });
        gsap.set(".hero-pill, .hero-badge, .hero-tag, .hero-sub, .site-header, .hero .btn-primary, .hero .btn-outline", {
            opacity: 0,
        });
        gsap.set(".hero-pill", { yPercent: -220 });
        gsap.set(".hero-badge", { scale: 0.6, rotate: 15 });
        gsap.set(".hero-tag", { yPercent: -100 });
        gsap.set(".hero-sub", { yPercent: 300 });
        gsap.set(".site-header", { yPercent: -100 });
        gsap.set(".hero .btn-primary", { xPercent: -100 });
        gsap.set(".hero .btn-outline", { xPercent: 100 });
    }

    // Logo Animation Timeline
    const logoTl = gsap.timeline();

    logoTl.to(".animating-logo", {
        yPercent: 0,
        opacity: rv(0.2, 0.2, 0.2, 0.2, 0.2, 0.2),
        delay: 0.5,
        duration: rv(1.5, 1.5, 1.5, 2, 2, 2),
        ease: "power4.inOut",
    });

    // Hero Section Animations Timeline
    const heroTl = gsap.timeline();

    if (isMobile() || isTablet()) {
        // Mobile/tablet: simpler animations
        heroTl.to(".text-group, .text-crazy, .text-pineapple, .text-inc", {
            opacity: 1,
            duration: rv(1, 1, 1, 1.2, 1.5, 1.5),
            ease: "circ.inOut",
        }, 0);
        
        heroTl.to(".hero-pill, .hero-badge, .hero-tag, .hero-sub, .site-header, .hero .btn-primary, .hero .btn-outline", {
            opacity: 1,
            duration: rv(0.8, 0.8, 0.8, 1, 1.2, 1.2),
            stagger: rv(0.05, 0.05, 0.05, 0.08, 0.1, 0.1),
            ease: "circ.inOut",
        }, 0.3);
        
        // Add slight movement for mobile
        heroTl.to(".text-group", {
            x: rv(0, 0, 0, 5, 10, 0),
            duration: 1,
        }, 0);
        
        heroTl.to(".text-crazy", {
            x: rv(0, 0, 0, -5, -10, 0),
            duration: 1,
        }, 0);
        
    } else {
        // Desktop: full animations
        heroTl.fromTo(".text-group",
            { xPercent: -100 },
            {
                xPercent: 0,
                duration: rv(null, null, null, null, 1.8, 2),
                ease: "circ.inOut",
            },
            0
        );

        heroTl.fromTo(".text-crazy",
            { xPercent: 100 },
            {
                xPercent: 0,
                duration: rv(null, null, null, null, 1.8, 2),
                ease: "circ.inOut",
            },
            0
        );

        heroTl.fromTo(".text-pineapple",
            { xPercent: -100 },
            {
                xPercent: 0,
                duration: rv(null, null, null, null, 1.8, 2),
                ease: "circ.inOut",
            },
            0
        );

        heroTl.fromTo(".text-inc",
            { xPercent: 100 },
            {
                xPercent: 0,
                duration: rv(null, null, null, null, 1.8, 2),
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
            duration: rv(null, null, null, null, 1.8, 2),
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
            duration: rv(null, null, null, null, 1.8, 2),
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
            duration: rv(null, null, null, null, 1.8, 2),
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
                duration: rv(null, null, null, null, 1.8, 2),
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
                duration: rv(null, null, null, null, 1.8, 2),
                ease: "circ.inOut",
            },
            0
        );
    }

    // Hero sticky scroll animation - only on desktop
    if (!isMobile() && !isTablet()) {
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
            x: rv(null, null, null, null, 150, 200),
            rotate: 25,
        }, 0);

        stickHeroTl.to(".hero-pill .image-1", {
            y: rv(null, null, null, null, -80, -100),
        }, 0);

        stickHeroTl.to(".hero-pill .image-2", {
            y: rv(null, null, null, null, -80, -100),
        }, 0);

        stickHeroTl.to(".hero-badge .c-image-1", {
            x: rv(null, null, null, null, -150, -180),
        }, 0);

        stickHeroTl.to(".hero-badge .c-image-2", {
            x: rv(null, null, null, null, -120, -150),
        });

        stickHeroTl.to(".hero-badge .c-image-3", {
            x: rv(null, null, null, null, -140, -170),
        });

        stickHeroTl.to(".hero-badge .c-image-4", {
            x: rv(null, null, null, null, -140, -170),
        });

        stickHeroTl.to(".hero-badge .c-image-5", {
            x: rv(null, null, null, null, -140, -170),
        });

        stickHeroTl.to(".animating-logo", {
            x: rv(null, null, null, null, -150, -200),
            rotate: -35,
        }, 0.5);

        stickHeroTl.to(".hero-pill .image-1", {
            y: 0,
        }, 0.5);

        stickHeroTl.to(".hero-pill .image-2", {
            y: 0,
        }, 0.5);
    }

    // Hero gallery animations - adjusted for mobile
    const galleryTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-gallery",
            start: isMobile() ? "top 90%" : "top 85%",
        }
    });

    galleryTl.to(".animating-logo", {
        x: 0,
        rotate: 0,
        opacity: rv(0.15, 0.15, 0.15, 0.18, 0.2, 0.2),
    }, 0);

    // Gallery items animation - adjusted values for mobile
    const galleryItems = [".hero-gallery-item-1", ".hero-gallery-item-2", ".hero-gallery-item-3"];
    galleryItems.forEach((item, index) => {
        galleryTl.fromTo(item, {
            yPercent: rv(10, 10, 10, 15, 20, 20),
            rotate: rv(index === 1 ? -10 : 10, index === 1 ? -10 : 10, index === 1 ? -10 : 10, index === 1 ? -12 : 12, index === 1 ? -15 : 15, index === 1 ? -15 : 15),
        }, {
            yPercent: 0,
            rotate: 0,
            duration: rv(0.8, 0.8, 0.8, 1, 1, 1),
            ease: "circ.inOut",
        }, index * 0.1);
    });

    // Services Section Animation
    const servicesTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#services", 
            start: isMobile() ? "top 85%" : "top 80%",
            end: "+=300%",
            toggleActions: "play none none reverse",
        }
    });

    servicesTl.fromTo("#services .section-title", {
        x: rv(0, 0, "-20vw", "-30vw", "-40vw", "-40vw"),
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: rv(1.2, 1.2, 1.5, 1.8, 2, 2),
    }, 0);

    servicesTl.fromTo("#services .section-desc", {
        x: rv(0, 0, "20vw", "30vw", "40vw", "40vw"),
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: rv(1.2, 1.2, 1.5, 1.8, 2, 2),
    }, 0);

    // Animate service cards with responsive values
    if (isMobile() || isTablet()) {
        // Mobile/tablet: simpler animation
        const serviceCards = document.querySelectorAll(".service-card");
        serviceCards.forEach((card, index) => {
            gsap.fromTo(card, {
                y: rv(20, 20, 30, 40, 0, 0),
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: rv(0.6, 0.6, 0.8, 1, 0, 0),
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    } else {
        // Desktop: full animations
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
    }

    // Animate logo movement on scroll - responsive
    if (!isMobile() && !isTablet()) {
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
    }

    // Stats Items Animation
    gsap.fromTo(".stat-item", {
        yPercent: rv(20, 20, 30, 40, 50, 50),
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        stagger: rv(0.1, 0.1, 0.1, 0.15, 0.2, 0.2),
        scrollTrigger: {
            trigger: ".stats-bar",
            start: "top 80%",
            end: "+=100%",
            toggleActions: "play none none reverse",
        }
    });

    // Portfolio Section
    gsap.fromTo(".proven-section .section-title", {
        xPercent: rv(0, 0, -30, -40, -50, -50),
        opacity: 0,
    }, {
        xPercent: 0,
        opacity: 1,
        duration: rv(1, 1, 1.2, 1.5, 1.8, 1.8),
        scrollTrigger: {
            trigger: ".proven-section",
            start: "top 80%",
            end: "+=100%",
            toggleActions: "play none none reverse",
        }
    });

    gsap.fromTo(".proven-section .section-desc", {
        xPercent: rv(0, 0, 30, 40, 50, 50),
        opacity: 0,
    }, {
        xPercent: 0,
        opacity: 1,
        duration: rv(1, 1, 1.2, 1.5, 1.8, 1.8),
        scrollTrigger: {
            trigger: ".proven-section",
            start: "top 80%",
            end: "+=100%",
            toggleActions: "play none none reverse",
        }
    });

    // Portfolio Grid Items - responsive animations
    const portfolioItems = document.querySelectorAll(".portfolio-grid .portfolio-item");
    if (isMobile() || isTablet()) {
        // Mobile/tablet: fade up animation
        portfolioItems.forEach((item, index) => {
            gsap.fromTo(item, {
                y: rv(20, 20, 30, 40, 0, 0),
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: rv(0.6, 0.6, 0.8, 1, 0, 0),
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    } else {
        // Desktop: rotate animations
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
    }

    // View Portfolio Link
    gsap.fromTo(".proven-section .view-portfolio", {
        xPercent: rv(0, 0, 30, 40, 50, 50),
        opacity: rv(0, 0, 0, 0, 1, 1),
    }, {
        xPercent: 0,
        opacity: 1,
        duration: rv(1, 1, 1.2, 1.5, 2, 2),
        scrollTrigger: {
            trigger: ".proven-section .view-portfolio",
            start: isMobile() ? "top 85%" : "top 80%",
            end: "+=100%",
            toggleActions: "play none none reverse",
        }
    });

    // Client Logos
    gsap.fromTo(".clients-bar .clients-inner .client-logo", {
        yPercent: rv(30, 30, 50, 100, 150, 150),
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: rv(0.6, 0.6, 0.8, 1, 1, 1),
        stagger: rv(0.05, 0.05, 0.05, 0.08, 0.1, 0.1),
        scrollTrigger: {
            trigger: ".clients-bar",
            start: isMobile() ? "top 85%" : "top 80%",
            end: "+=50%",
            toggleActions: "play none none reverse",
        }
    });

    // Site Footer
    gsap.fromTo(".footer-wrapper", {
        yPercent: rv(15, 15, 20, 25, 30, 30),
        opacity: 0,
    }, {
        yPercent: 0,
        opacity: 1,
        duration: rv(0.8, 0.8, 1, 1, 1, 1),
        scrollTrigger: {
            trigger: ".footer-wrapper",
            start: isMobile() ? "top 90%" : "top 85%",
            end: "+=100%",
            toggleActions: "play none none reverse",
        }
    });

    // -------------------------------------------------
    // DRAG TO SCROLL - Hero Gallery
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

    // Refresh ScrollTrigger after all animations are set
    ScrollTrigger.refresh();
});