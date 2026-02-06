/**
 * Consultant Template - JavaScript
 */

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// Scroll-triggered fade-in animations
const fadeElements = document.querySelectorAll(
    '.service-card, .expertise-item, .methodology-item, .case-study-card, .testimonial-card, .credential-card'
);

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Consultation request submitted:', data);

        // Show success message
        alert('Thank you for your consultation request! I will review your information and respond within 24 hours.');

        // Reset form
        contactForm.reset();
    });
}

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Service card hover effect enhancement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

// Add subtle parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < 600) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// Credentials bar animation on page load
window.addEventListener('load', () => {
    const credentialsBar = document.querySelector('.credentials-bar');
    if (credentialsBar) {
        setTimeout(() => {
            credentialsBar.style.animation = 'slideUp 0.6s ease';
        }, 300);
    }
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Intersection observer for case study metrics
const metricElements = document.querySelectorAll('.case-study-metrics');
const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const metrics = entry.target.querySelectorAll('.metric');
            metrics.forEach((metric, index) => {
                setTimeout(() => {
                    metric.style.opacity = '1';
                    metric.style.transform = 'scale(1)';
                }, index * 100);
            });
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.5
});

metricElements.forEach(element => {
    const metrics = element.querySelectorAll('.metric');
    metrics.forEach(metric => {
        metric.style.opacity = '0';
        metric.style.transform = 'scale(0.9)';
        metric.style.transition = 'all 0.4s ease';
    });
    metricObserver.observe(element);
});

// Enhance featured service card
const featuredCard = document.querySelector('.service-card.featured');
if (featuredCard) {
    featuredCard.addEventListener('mouseenter', () => {
        featuredCard.style.transform = 'translateY(-8px) scale(1.02)';
    });
    featuredCard.addEventListener('mouseleave', () => {
        featuredCard.style.transform = 'translateY(0) scale(1)';
    });
}

// Form field validation feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#1e3a8a';
    });
});

console.log('Consultant template loaded successfully!');
