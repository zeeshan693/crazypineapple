// assets/js/custom-software-and-ai.js

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
    // SET INITIAL STATES FOR CUSTOM SOFTWARE & AI PAGE
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
    gsap.set(".contact-hero-content h1", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });
    
    gsap.set(".contact-hero-content h2", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });
    
    gsap.set(".contact-hero-content p", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
        stagger: 0.1,
    });

    // Delivery Section
    gsap.set(".delivery-heading", {
        opacity: 0,
        x: rv(-30, -30, -40, -50, -60, -60),
    });
    
    gsap.set(".delivery-card", {
        opacity: 0,
        y: rv(40, 40, 50, 60, 70, 70),
        scale: 0.95,
    });

    // Who It's For Section
    gsap.set(".who-bg-image", {
        opacity: 0,
        scale: 0.8,
        rotation: isMobile() ? 0 : 30,
    });
    
    gsap.set(".who-front-image", {
        opacity: 0,
        x: rv(-30, -30, -40, -50, -60, -60),
    });
    
    gsap.set(".who-heading", {
        opacity: 0,
        x: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".who-text", {
        opacity: 0,
        x: rv(-15, -15, -20, -30, -40, -40),
    });
    
    gsap.set(".who-btn", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
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
    
    heroTl.to(".contact-hero-content h1", {
        opacity: 1,
        y: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.6)",
    }, 0.3);
    
    heroTl.to(".contact-hero-content h2", {
        opacity: 1,
        y: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.6)",
    }, 0.4);
    
    heroTl.to(".contact-hero-content p", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: 0.1,
        ease: "power2.out",
    }, 0.6);

    // -------------------------------------------------
    // DELIVERY SECTION ANIMATION (Scroll Triggered)
    // -------------------------------------------------
    gsap.to(".delivery-heading", {
        opacity: 1,
        x: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        scrollTrigger: {
            trigger: ".delivery-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".delivery-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: rv(0.08, 0.08, 0.1, 0.12, 0.15, 0.15),
        ease: "back.out(0.4)",
        scrollTrigger: {
            trigger: ".delivery-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Delivery card hover animations
    const deliveryCards = document.querySelectorAll(".delivery-card");
    deliveryCards.forEach(card => {
        const icon = card.querySelector(".delivery-icon-circle");
        
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: "power2.out",
            });
            if (icon) {
                gsap.to(icon, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "back.out(0.5)",
                });
            }
        });
        
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.in",
            });
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.in",
                });
            }
        });
    });

    // Continuous floating animation for delivery cards on desktop
    if (isDesktop()) {
        deliveryCards.forEach((card, index) => {
            gsap.to(card, {
                y: -6,
                duration: 2.5 + (index * 0.2),
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: index * 0.3,
            });
        });
    }

    // -------------------------------------------------
    // WHO IT'S FOR SECTION ANIMATION
    // -------------------------------------------------
    gsap.to(".who-bg-image", {
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
    
    gsap.to(".who-front-image", {
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
    
    gsap.to(".who-heading", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".who-text", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".who-btn", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.7, 0.9, 1, 1),
        scrollTrigger: {
            trigger: ".who-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Who button icon animation on hover
    const whoBtn = document.querySelector(".who-btn");
    const whoBtnIcon = document.querySelector(".who-btn-icon");
    if (whoBtn && whoBtnIcon) {
        whoBtn.addEventListener("mouseenter", () => {
            gsap.to(whoBtn, {
                scale: 1.03,
                duration: 0.2,
                ease: "power2.out",
            });
            gsap.to(whoBtnIcon, {
                x: 6,
                duration: 0.2,
                ease: "power2.out",
            });
        });
        
        whoBtn.addEventListener("mouseleave", () => {
            gsap.to(whoBtn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            });
            gsap.to(whoBtnIcon, {
                x: 0,
                duration: 0.2,
                ease: "power2.in",
            });
        });
    }

    // Image hover zoom effect for who-front-image
    const whoFrontImage = document.querySelector(".who-front-image");
    if (whoFrontImage) {
        const whoImages = document.querySelector(".who-images");
        whoImages.addEventListener("mouseenter", () => {
            gsap.to(whoFrontImage, {
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out",
            });
        });
        
        whoImages.addEventListener("mouseleave", () => {
            gsap.to(whoFrontImage, {
                scale: 1,
                duration: 0.4,
                ease: "power2.in",
            });
        });
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
    // PARALLAX EFFECT ON HERO BACKGROUND (Desktop only)
    // -------------------------------------------------
    if (isDesktop()) {
        const heroBg = document.querySelector(".contact-hero-bg");
        if (heroBg) {
            gsap.to(heroBg, {
                yPercent: 15,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                    trigger: ".contact-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        }
    }

    // -------------------------------------------------
    // SCROLL PROGRESS INDICATOR (desktop only)
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
    // CTA BUTTON HOVER ANIMATIONS (Footer)
    // -------------------------------------------------
    const ctaBtns = document.querySelectorAll(".cta-btns .btn-primary, .cta-btns .btn-outline");
    ctaBtns.forEach(btn => {
        const btnIcon = btn.querySelector(".btn-icon");
        
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
            if (btnIcon) {
                gsap.to(btnIcon, {
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        });
        
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            });
            if (btnIcon) {
                gsap.to(btnIcon, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.in",
                });
            }
        });
    });

    // -------------------------------------------------
    // IMAGE LOAD ANIMATIONS
    // -------------------------------------------------
    const allImages = document.querySelectorAll("img");
    allImages.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            gsap.fromTo(img, {
                opacity: 0,
                scale: 1.02,
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
            });
        } else {
            img.addEventListener("load", () => {
                gsap.fromTo(img, {
                    opacity: 0,
                    scale: 1.02,
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        }
    });

    // -------------------------------------------------
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // -------------------------------------------------
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: targetElement,
                            offsetY: 80,
                        },
                        ease: "power2.inOut",
                    });
                }
            }
        });
    });

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