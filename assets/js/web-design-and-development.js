// assets/js/web-design-and-development.js

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
    // SET INITIAL STATES FOR WEB DESIGN & DEVELOPMENT PAGE
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

    // Technologies Section
    gsap.set(".technologies-section .section-heading", {
        opacity: 0,
        x: rv(-30, -30, -40, -50, -60, -60),
    });
    
    gsap.set(".tech-strip-item", {
        opacity: 0,
        scale: 0.9,
    });

    // Deliver Section - SIMPLE SLIDE UP
    gsap.set(".deliver-content .heading-para h2", {
        opacity: 0,
        y: rv(-30, -30, -40, -50, -60, -60),
    });
    
    gsap.set(".deliver-content .heading-para p", {
        opacity: 0,
        y: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".six-cards-circle .card", {
        opacity: 0,
        y: 50,
    });
    
    gsap.set(".six-cards-circle > img", {
        opacity: 0,
        scale: 0.5,
        rotation: -180,
    });

    // Approach Section
    gsap.set(".approach-container .img1", {
        opacity: 0,
        x: rv(-50, -50, -60, -80, -100, -100),
    });
    
    gsap.set(".approach-container .img2", {
        opacity: 0,
        x: rv(50, 50, 60, 80, 100, 100),
    });
    
    gsap.set(".approach-container .text-content", {
        opacity: 0,
        y: rv(40, 40, 50, 60, 70, 70),
    });

    // Who It's For Section
    gsap.set(".whofor-text .section-heading", {
        opacity: 0,
        x: rv(-30, -30, -40, -50, -60, -60),
    });
    
    gsap.set(".whofor-description", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });
    
    gsap.set(".whofor-btns .btn-whofor-primary, .whofor-btns .btn-whofor-outline", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });
    
    gsap.set(".whofor-img", {
        opacity: 0,
        scale: 0.9,
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
    // TECHNOLOGIES SECTION ANIMATION
    // -------------------------------------------------
    gsap.to(".technologies-section .section-heading", {
        opacity: 1,
        x: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        scrollTrigger: {
            trigger: ".technologies-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".tech-strip-item", {
        opacity: 1,
        scale: 1,
        duration: rv(0.4, 0.4, 0.5, 0.6, 0.7, 0.7),
        stagger: rv(0.03, 0.03, 0.05, 0.07, 0.08, 0.08),
        scrollTrigger: {
            trigger: ".technologies-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Tech strip item hover animations
    const techItems = document.querySelectorAll(".tech-strip-item");
    techItems.forEach(item => {
        const logo = item.querySelector(".tech-logo");
        
        item.addEventListener("mouseenter", () => {
            if (logo) {
                gsap.to(logo, {
                    y: -5,
                    scale: 1.1,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        });
        
        item.addEventListener("mouseleave", () => {
            if (logo) {
                gsap.to(logo, {
                    y: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.in",
                });
            }
        });
    });

    // -------------------------------------------------
    // DELIVER SECTION ANIMATION
    // -------------------------------------------------
    gsap.to(".deliver-content .heading-para h2", {
        opacity: 1,
        y: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        scrollTrigger: {
            trigger: ".deliver-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".deliver-content .heading-para p", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".deliver-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    // Animate the decorative SVG circle
    gsap.to(".six-cards-circle > img", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: rv(1, 1, 1.2, 1.5, 1.8, 1.8),
        ease: "back.out(0.4)",
        scrollTrigger: {
            trigger: ".deliver-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    // Smooth slide up animation for each card individually
    const circleCards = document.querySelectorAll(".six-cards-circle .card");
    circleCards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        });
    });

    // Card hover animations
    circleCards.forEach(card => {
        const cardImg = card.querySelector("img");
        
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
            });
            if (cardImg) {
                gsap.to(cardImg, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "back.out(0.5)",
                });
            }
        });
        
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.in",
            });
            if (cardImg) {
                gsap.to(cardImg, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.in",
                });
            }
        });
    });

    // -------------------------------------------------
    // APPROACH SECTION ANIMATION
    // -------------------------------------------------
    gsap.to(".approach-container .img1", {
        opacity: 1,
        x: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.5)",
        scrollTrigger: {
            trigger: ".approach-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".approach-container .img2", {
        opacity: 1,
        x: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.5)",
        scrollTrigger: {
            trigger: ".approach-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".approach-container .text-content", {
        opacity: 1,
        y: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        scrollTrigger: {
            trigger: ".approach-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Approach button hover animation
    const approachBtn = document.querySelector(".approach-container .btn-primary");
    if (approachBtn) {
        const btnIcon = approachBtn.querySelector(".btn-icon");
        
        approachBtn.addEventListener("mouseenter", () => {
            gsap.to(approachBtn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
            if (btnIcon) {
                gsap.to(btnIcon, {
                    x: 5,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        });
        
        approachBtn.addEventListener("mouseleave", () => {
            gsap.to(approachBtn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            });
            if (btnIcon) {
                gsap.to(btnIcon, {
                    x: 0,
                    duration: 0.2,
                    ease: "power2.in",
                });
            }
        });
    }

    // Image hover zoom effect for approach images
    const approachImgs = document.querySelectorAll(".approach-container .img img");
    approachImgs.forEach(img => {
        const parent = img.parentElement;
        parent.addEventListener("mouseenter", () => {
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out",
            });
        });
        
        parent.addEventListener("mouseleave", () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.4,
                ease: "power2.in",
            });
        });
    });

    // -------------------------------------------------
    // WHO IT'S FOR SECTION ANIMATION
    // -------------------------------------------------
    gsap.to(".whofor-text .section-heading", {
        opacity: 1,
        x: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        scrollTrigger: {
            trigger: ".whofor-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".whofor-description", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".whofor-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".whofor-btns .btn-whofor-primary, .whofor-btns .btn-whofor-outline", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.6, 0.8, 0.8, 0.8),
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".whofor-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".whofor-img", {
        opacity: 1,
        scale: 1,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: rv(0.08, 0.08, 0.1, 0.12, 0.15, 0.15),
        scrollTrigger: {
            trigger: ".whofor-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Who It's For button hover animations
    const whoforBtns = document.querySelectorAll(".btn-whofor-primary, .btn-whofor-outline");
    whoforBtns.forEach(btn => {
        const arrow = btn.querySelector(".btn-arrow-badge");
        
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
            if (arrow) {
                gsap.to(arrow, {
                    x: 5,
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
            if (arrow) {
                gsap.to(arrow, {
                    x: 0,
                    duration: 0.2,
                    ease: "power2.in",
                });
            }
        });
    });

    // Image hover zoom effect for whofor images
    const whoforImages = document.querySelectorAll(".whofor-img");
    whoforImages.forEach(img => {
        const innerImg = img.querySelector("img");
        if (innerImg) {
            img.addEventListener("mouseenter", () => {
                gsap.to(innerImg, {
                    scale: 1.08,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });
            
            img.addEventListener("mouseleave", () => {
                gsap.to(innerImg, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.in",
                });
            });
        }
    });

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
        const heroImage = document.querySelector(".hero-image");
        if (heroImage) {
            gsap.to(heroImage, {
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