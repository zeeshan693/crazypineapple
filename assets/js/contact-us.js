// assets/js/contact-us.js

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
    // SET INITIAL STATES FOR CONTACT US PAGE
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
    
    gsap.set(".contact-hero-content p", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
        stagger: 0.1,
    });

    // Contact Info Section
    gsap.set(".label-tag", {
        opacity: 0,
        x: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".contact-info h1", {
        opacity: 0,
        x: rv(-20, -20, -30, -40, -50, -50),
    });
    
    gsap.set(".info-item", {
        opacity: 0,
        x: rv(-30, -30, -40, -50, -60, -60),
    });

    // Contact Form Elements
    gsap.set(".form-field", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });
    
    gsap.set(".submit-btn", {
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
    
    heroTl.to(".contact-hero-content h1", {
        opacity: 1,
        y: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        ease: "back.out(0.6)",
    }, 0.3);
    
    heroTl.to(".contact-hero-content p", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: 0.1,
        ease: "power2.out",
    }, 0.5);

    // -------------------------------------------------
    // CONTACT INFO SECTION ANIMATION (Scroll Triggered)
    // -------------------------------------------------
    gsap.to(".label-tag", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".contact-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".contact-info h1", {
        opacity: 1,
        x: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        scrollTrigger: {
            trigger: ".contact-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".info-item", {
        opacity: 1,
        x: 0,
        duration: rv(0.5, 0.5, 0.6, 0.8, 0.9, 0.9),
        stagger: rv(0.1, 0.1, 0.12, 0.15, 0.18, 0.18),
        scrollTrigger: {
            trigger: ".contact-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Info item hover animations
    const infoItems = document.querySelectorAll(".info-item");
    infoItems.forEach(item => {
        const icon = item.querySelector(".icon-circle");
        
        item.addEventListener("mouseenter", () => {
            gsap.to(item, {
                x: 8,
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
        
        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                x: 0,
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

    // -------------------------------------------------
    // CONTACT FORM ANIMATION (Scroll Triggered)
    // -------------------------------------------------
    gsap.to(".form-field", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.6, 0.8, 0.9, 0.9),
        stagger: rv(0.08, 0.08, 0.1, 0.12, 0.15, 0.15),
        scrollTrigger: {
            trigger: ".contact-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });
    
    gsap.to(".submit-btn", {
        opacity: 1,
        scale: 1,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        delay: rv(0.3, 0.3, 0.4, 0.5, 0.6, 0.6),
        scrollTrigger: {
            trigger: ".contact-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Form field focus animations
    const formFields = document.querySelectorAll(".form-field input, .form-field textarea, .form-field select");
    formFields.forEach(field => {
        field.addEventListener("focus", () => {
            const parent = field.closest(".form-field");
            if (parent) {
                gsap.to(parent, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        });
        
        field.addEventListener("blur", () => {
            const parent = field.closest(".form-field");
            if (parent) {
                gsap.to(parent, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.in",
                });
            }
        });
    });

    // Submit button hover animation
    const submitBtn = document.querySelector(".submit-btn");
    if (submitBtn) {
        submitBtn.addEventListener("mouseenter", () => {
            gsap.to(submitBtn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
        });
        
        submitBtn.addEventListener("mouseleave", () => {
            gsap.to(submitBtn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            });
        });
        
        // Ripple effect on click
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const ripple = document.createElement("span");
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            submitBtn.style.position = "relative";
            submitBtn.style.overflow = "hidden";
            
            const rect = submitBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = (e.clientX - rect.left - size/2) + "px";
            ripple.style.top = (e.clientY - rect.top - size/2) + "px";
            
            submitBtn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Simple form validation animation
            gsap.to(submitBtn, {
                scale: 0.98,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut",
            });
        });
    }

    // Add CSS for ripple animation
    const style = document.createElement("style");
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

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
    // SMOOTH SCROLL FOR ANCHOR LINKS (if any)
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
    // FORM SUBMIT HANDLER (with animation feedback)
    // -------------------------------------------------
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Animate form fields
            gsap.to(".form-field", {
                opacity: 0.5,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.in",
            });
            
            gsap.to(".submit-btn", {
                scale: 0.9,
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    // Simulate form submission
                    setTimeout(() => {
                        // Show success message
                        const successMsg = document.createElement("div");
                        successMsg.textContent = "✓ Message sent successfully!";
                        successMsg.style.cssText = `
                            color: #4CAF50;
                            text-align: center;
                            margin-top: 20px;
                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 1px;
                        `;
                        contactForm.appendChild(successMsg);
                        
                        // Reset form fields
                        contactForm.reset();
                        
                        // Animate back
                        gsap.to(".form-field", {
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.05,
                            ease: "power2.out",
                        });
                        
                        gsap.to(".submit-btn", {
                            scale: 1,
                            duration: 0.3,
                            ease: "back.out(0.5)",
                        });
                        
                        // Remove success message after 3 seconds
                        setTimeout(() => {
                            successMsg.style.opacity = "0";
                            setTimeout(() => successMsg.remove(), 500);
                        }, 3000);
                    }, 800);
                }
            });
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
