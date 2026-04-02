// assets/js/about-us.js

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // -------------------------------------------------
    // RESPONSIVE HELPERS (same as animations.js)
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
        if (isTinyMobile())   return tiny;  // 390px and below
        if (isSmallMobile())  return mobile; // 410px and below
        if (isMobile())       return mobile; // 480px and below
        if (isTablet())       return tablet; // 481px to 768px
        if (isTabletLand())   return tabletLand; // 769px to 1024px
        return desktop; // 1025px and above
    }

    // -------------------------------------------------
    // SET INITIAL STATES FOR ABOUT US PAGE
    // -------------------------------------------------
    
    // Header animation (same as reference)
    gsap.set(".animating-logo", {
        yPercent: -100,
        opacity: 0,
    });
    
    gsap.set(".site-header", {
        yPercent: -100,
        opacity: 0,
    });

    // Hero Section Elements
    gsap.set(".hero-section .hero-content h1", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });
    
    gsap.set(".hero-section .hero-content p", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });

    // Stats Cards
    gsap.set(".project-content .card", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });

    // Who We Are Section
    gsap.set(".who-section .who-bg-image", {
        opacity: 0,
        scale: 0.8,
        rotation: isMobile() ? 0 : 30,
    });
    
    gsap.set(".who-section .who-front-image", {
        opacity: 0,
        x: rv(-30, -30, -40, -50, -60, -60),
    });
    
    gsap.set(".who-section .who-heading", {
        opacity: 0,
        x: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".who-section .who-text", {
        opacity: 0,
        x: rv(-15, -15, -20, -30, -40, -40),
    });
    
    gsap.set(".who-section .who-btn", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });

    // Fourth Section - Approach Cards
    gsap.set(".fourth-section .content .gold-color", {
        opacity: 0,
        y: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".fourth-section .content h2", {
        opacity: 0,
        y: rv(-15, -15, -20, -30, -40, -40),
    });
    
    gsap.set(".fourth-section .content-cards .card", {
        opacity: 0,
        scale: 0.9,
    });

    // Fifth Section - Portfolio Cards
    gsap.set(".fifth-section .text-content h2", {
        opacity: 0,
        x: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".fifth-section .text-content p", {
        opacity: 0,
        x: rv(20, 20, 30, 40, 50, 50),
    });
    
    gsap.set(".fifth-section .card-content", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });

    // Clients Bar
    gsap.set(".clients-bar .client-logo", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });

    // Footer
    gsap.set(".footer-wrapper", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });

    // -------------------------------------------------
    // HEADER ANIMATION (same as reference)
    // -------------------------------------------------
    const headerTl = gsap.timeline();
    
    headerTl.to(".site-header", {
        yPercent: 0,
        opacity: 1,
        duration: rv(0.8, 0.8, 1, 1.2, 1.2, 1.2),
        ease: "power4.out",
    }, 0.2);
    
    headerTl.to(".animating-logo", {
        yPercent: 0,
        opacity: rv(0.2, 0.2, 0.2, 0.2, 0.2, 0.2),
        duration: rv(1, 1, 1.2, 1.5, 1.5, 1.5),
        ease: "power4.inOut",
    }, 0.1);

    // -------------------------------------------------
    // HERO SECTION ANIMATION
    // -------------------------------------------------
    const heroTl = gsap.timeline();
    
    heroTl.to(".hero-section .hero-content h1", {
        opacity: 1,
        y: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.6)",
    }, 0.3);
    
    heroTl.to(".hero-section .hero-content p", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        ease: "power2.out",
    }, 0.5);

    // -------------------------------------------------
    // STATS SECTION (Scroll Triggered)
    // -------------------------------------------------
    gsap.to(".project-content .card", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: rv(0.1, 0.1, 0.15, 0.2, 0.25, 0.25),
        scrollTrigger: {
            trigger: ".second-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Counter animation for stats numbers
    const counters = document.querySelectorAll(".project-content .card h2");
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        if (isNaN(target)) return;
        
        gsap.fromTo(counter, {
            innerText: 0,
        }, {
            innerText: target,
            duration: rv(1.5, 1.5, 2, 2.5, 2.5, 2.5),
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: ".second-section",
                start: isMobile() ? "top 85%" : "top 80%",
                toggleActions: "play none none reverse",
            },
            onUpdate: function() {
                counter.innerText = Math.floor(counter.innerText);
            },
        });
    });

    // -------------------------------------------------
    // WHO WE ARE SECTION
    // -------------------------------------------------
    gsap.to(".who-section .who-bg-image", {
        opacity: 1,
        scale: 1,
        rotation: isMobile() ? 0 : 30,
        duration: rv(1, 1, 1.2, 1.5, 1.8, 1.8),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".who-section .who-front-image", {
        opacity: 1,
        x: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.5)",
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".who-section .who-heading", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".who-section .who-text", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".who-section .who-btn", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.7, 0.9, 1, 1),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // -------------------------------------------------
    // FOURTH SECTION - OUR APPROACH
    // -------------------------------------------------
    gsap.to(".fourth-section .content .gold-color", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.7, 0.9, 1, 1),
        scrollTrigger: {
            trigger: ".fourth-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".fourth-section .content h2", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".fourth-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".fourth-section .content-cards .card", {
        opacity: 1,
        scale: 1,
        duration: rv(0.5, 0.5, 0.6, 0.8, 0.8, 0.8),
        stagger: rv(0.08, 0.08, 0.1, 0.12, 0.15, 0.15),
        ease: "back.out(0.4)",
        scrollTrigger: {
            trigger: ".fourth-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // -------------------------------------------------
    // FIFTH SECTION - PORTFOLIO
    // -------------------------------------------------
    gsap.to(".fifth-section .text-content h2", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".fifth-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".fifth-section .text-content p", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".fifth-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".fifth-section .card-content", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: rv(0.1, 0.1, 0.15, 0.2, 0.25, 0.25),
        scrollTrigger: {
            trigger: ".fifth-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // -------------------------------------------------
    // CLIENTS BAR
    // -------------------------------------------------
    gsap.to(".clients-bar .client-logo", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.6, 0.8, 0.8, 0.8),
        stagger: rv(0.05, 0.05, 0.08, 0.1, 0.12, 0.12),
        scrollTrigger: {
            trigger: ".clients-bar",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Continuous marquee-like animation for clients on desktop
    if (isDesktop() && !isMobile() && !isTablet()) {
        const clientsInner = document.querySelector(".clients-inner");
        if (clientsInner) {
            const originalHTML = clientsInner.innerHTML;
            // Duplicate content for seamless loop
            clientsInner.innerHTML = originalHTML + originalHTML;
            
            gsap.to(".clients-inner", {
                x: "-50%",
                duration: 20,
                ease: "none",
                repeat: -1,
                scrollTrigger: {
                    trigger: ".clients-bar",
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });
        }
    }

    // -------------------------------------------------
    // FOOTER
    // -------------------------------------------------
    gsap.to(".footer-wrapper", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".footer-wrapper",
            start: isMobile() ? "top 90%" : "top 85%",
            toggleActions: "play none none reverse",
        }
    });

    // -------------------------------------------------
    // PARALLAX EFFECT ON HERO IMAGE (Desktop only)
    // -------------------------------------------------
    if (isDesktop()) {
        gsap.to(".hero-image", {
            yPercent: 15,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        });
    }

    // -------------------------------------------------
    // CARD HOVER ANIMATIONS (Interactive)
    // -------------------------------------------------
    const cards = document.querySelectorAll(".fourth-section .content-cards .card, .fifth-section .card-content");
    
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
            });
        });
        
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.in",
            });
        });
    });

    // Button hover animations
    const btns = document.querySelectorAll(".who-btn, .btn-primary, .btn-outline, .buttons button");
    
    btns.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
        });
        
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            });
        });
    });

    // Who button icon animation on hover
    const whoBtnIcon = document.querySelector(".who-btn-icon");
    if (whoBtnIcon) {
        whoBtnIcon.parentElement.addEventListener("mouseenter", () => {
            gsap.to(whoBtnIcon, {
                x: 5,
                duration: 0.2,
                ease: "power2.out",
            });
        });
        
        whoBtnIcon.parentElement.addEventListener("mouseleave", () => {
            gsap.to(whoBtnIcon, {
                x: 0,
                duration: 0.2,
                ease: "power2.in",
            });
        });
    }

    // -------------------------------------------------
    // SCROLL PROGRESS INDICATOR (optional - shows on desktop)
    // -------------------------------------------------
    if (isDesktop()) {
        const progressBar = document.createElement("div");
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #E6B554, #A16C16);
            z-index: 10000;
            pointer-events: none;
        `;
        document.body.appendChild(progressBar);
        
        gsap.to(progressBar, {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            }
        });
    }

    // -------------------------------------------------
    // REFRESH SCROLLTRIGGER
    // -------------------------------------------------
    ScrollTrigger.refresh();
    
    // Handle window resize to refresh animations
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });

});