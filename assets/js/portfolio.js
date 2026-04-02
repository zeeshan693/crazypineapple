// assets/js/portfolio.js

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
    // SET INITIAL STATES FOR PORTFOLIO PAGE
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
    gsap.set(".hero-headline .text", {
        opacity: 0,
        y: rv(30, 30, 40, 50, 60, 60),
    });
    
    gsap.set(".hero-sub", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });
    
    gsap.set(".hero .img-cards img", {
        opacity: 0,
        scale: 0.8,
        rotation: (i) => i === 0 ? -15 : (i === 2 ? 15 : 0),
    });

    // Portfolio Filters
    gsap.set(".portfolio-filters .filter-btn", {
        opacity: 0,
        y: rv(20, 20, 30, 40, 50, 50),
    });

    // Portfolio Items
    gsap.set(".portfolio-item", {
        opacity: 0,
        y: rv(40, 40, 50, 60, 70, 70),
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

    // View Portfolio Link
    gsap.set(".view-portfolio a", {
        opacity: 0,
        x: rv(20, 20, 30, 40, 50, 50),
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
    
    heroTl.to(".hero-headline .text", {
        opacity: 1,
        y: 0,
        duration: rv(0.8, 0.8, 1, 1.2, 1.5, 1.5),
        stagger: 0.1,
        ease: "back.out(0.6)",
    }, 0.3);
    
    heroTl.to(".hero-sub", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        ease: "power2.out",
    }, 0.6);
    
    heroTl.to(".hero .img-cards img", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: rv(0.7, 0.7, 0.9, 1.1, 1.3, 1.3),
        stagger: 0.15,
        ease: "back.out(0.5)",
    }, 0.8);

    // -------------------------------------------------
    // PORTFOLIO FILTERS ANIMATION (Scroll Triggered)
    // -------------------------------------------------
    gsap.to(".portfolio-filters .filter-btn", {
        opacity: 1,
        y: 0,
        duration: rv(0.5, 0.5, 0.6, 0.8, 0.8, 0.8),
        stagger: rv(0.05, 0.05, 0.08, 0.1, 0.12, 0.12),
        scrollTrigger: {
            trigger: ".proven-section",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // -------------------------------------------------
    // PORTFOLIO ITEMS ANIMATION (Scroll Triggered)
    // -------------------------------------------------
    gsap.to(".portfolio-item", {
        opacity: 1,
        y: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        stagger: rv(0.1, 0.1, 0.15, 0.2, 0.25, 0.25),
        scrollTrigger: {
            trigger: ".portfolio-grid",
            start: isMobile() ? "top 85%" : "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    // Portfolio items hover animations
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(item => {
        const img = item.querySelector(".proj-img");
        
        item.addEventListener("mouseenter", () => {
            gsap.to(item, {
                y: -8,
                duration: 0.3,
                ease: "power2.out",
            });
            if (img) {
                gsap.to(img, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        });
        
        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                y: 0,
                duration: 0.3,
                ease: "power2.in",
            });
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.in",
                });
            }
        });
    });

    // -------------------------------------------------
    // VIEW PORTFOLIO LINK ANIMATION
    // -------------------------------------------------
    gsap.to(".view-portfolio a", {
        opacity: 1,
        x: 0,
        duration: rv(0.6, 0.6, 0.8, 1, 1.2, 1.2),
        scrollTrigger: {
            trigger: ".portfolio-grid",
            start: isMobile() ? "bottom 90%" : "bottom 85%",
            toggleActions: "play none none reverse",
        }
    });

    // Hover animation for view portfolio link
    const viewLink = document.querySelector(".view-portfolio a");
    if (viewLink) {
        viewLink.addEventListener("mouseenter", () => {
            gsap.to(viewLink, {
                x: 8,
                duration: 0.2,
                ease: "power2.out",
            });
        });
        
        viewLink.addEventListener("mouseleave", () => {
            gsap.to(viewLink, {
                x: 0,
                duration: 0.2,
                ease: "power2.in",
            });
        });
    }

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
    if (isDesktop()) {
        const clientsInner = document.querySelector(".clients-inner");
        if (clientsInner) {
            // Store original HTML and duplicate for seamless loop
            const originalHTML = clientsInner.innerHTML;
            // Check if already duplicated to avoid multiple duplications
            if (clientsInner.children.length < 10) {
                clientsInner.innerHTML = originalHTML + originalHTML;
            }
            
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

    // Client logo hover animations
    const clientLogos = document.querySelectorAll(".client-logo");
    clientLogos.forEach(logo => {
        logo.addEventListener("mouseenter", () => {
            gsap.to(logo, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            });
        });
        
        logo.addEventListener("mouseleave", () => {
            gsap.to(logo, {
                scale: 1,
                duration: 0.2,
                ease: "power2.in",
            });
        });
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
    // FILTER BUTTON FUNCTIONALITY WITH ANIMATIONS
    // -------------------------------------------------
    const filterBtns = document.querySelectorAll(".filter-btn");
    const allPortfolioItems = document.querySelectorAll(".portfolio-item");
    
    // Store original order for reset
    const portfolioGrid = document.querySelector(".portfolio-grid");
    const originalItems = Array.from(allPortfolioItems);
    
    // Function to animate filter change
    function filterPortfolio(filterValue) {
        // Animate out all items
        gsap.to(allPortfolioItems, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.02,
            ease: "power2.in",
            onComplete: () => {
                // Filter items
                let visibleItems = [];
                let hiddenItems = [];
                
                allPortfolioItems.forEach(item => {
                    if (filterValue === "all") {
                        visibleItems.push(item);
                    } else {
                        // Check if item matches filter
                        const tags = item.querySelectorAll(".tag");
                        let matches = false;
                        tags.forEach(tag => {
                            if (tag.innerText.toLowerCase() === filterValue.toLowerCase()) {
                                matches = true;
                            }
                        });
                        if (matches) {
                            visibleItems.push(item);
                        } else {
                            hiddenItems.push(item);
                        }
                    }
                });
                
                // Hide non-matching items
                hiddenItems.forEach(item => {
                    gsap.set(item, { display: "none" });
                });
                
                // Show matching items
                visibleItems.forEach(item => {
                    gsap.set(item, { display: "block" });
                });
                
                // Animate in visible items
                gsap.to(visibleItems, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "back.out(0.4)",
                    onComplete: () => {
                        ScrollTrigger.refresh();
                    }
                });
            }
        });
    }
    
    // Add click event to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Get filter value
            const filterValue = btn.getAttribute("data-filter");
            
            // Apply filter animation
            filterPortfolio(filterValue);
        });
    });
    
    // Reset filter to "all" with animation (optional - for page refresh)
    // Ensure all items are visible initially
    gsap.set(allPortfolioItems, { display: "block" });

    // -------------------------------------------------
    // PARALLAX EFFECT ON HERO IMAGES (Desktop only)
    // -------------------------------------------------
    if (isDesktop()) {
        const heroImages = document.querySelectorAll(".hero .img-cards img");
        heroImages.forEach((img, index) => {
            gsap.to(img, {
                y: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        });
    }

    // -------------------------------------------------
    // FILTER BUTTON HOVER ANIMATIONS
    // -------------------------------------------------
    filterBtns.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            if (!btn.classList.contains("active")) {
                gsap.to(btn, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: "power2.out",
                });
            }
        });
        
        btn.addEventListener("mouseleave", () => {
            if (!btn.classList.contains("active")) {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.in",
                });
            }
        });
    });

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
    // IMAGE LOAD ANIMATIONS FOR PORTFOLIO ITEMS
    // -------------------------------------------------
    const portfolioImages = document.querySelectorAll(".portfolio-item .proj-img img");
    portfolioImages.forEach(img => {
        if (img.complete) {
            gsap.fromTo(img, {
                scale: 1.1,
            }, {
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
            });
        } else {
            img.addEventListener("load", () => {
                gsap.fromTo(img, {
                    scale: 1.1,
                }, {
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                });
            });
        }
    });

    // -------------------------------------------------
    // SMOOTH SCROLL FOR FILTER BUTTONS (optional)
    // -------------------------------------------------
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const targetId = btn.getAttribute("data-target");
            if (targetId) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
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