// Startup Template JS

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animated counter for metrics
class MetricCounter {
    constructor(element) {
        this.element = element;
        this.target = parseInt(element.dataset.target);
        this.current = 0;
        this.increment = this.target / 60; // Duration: ~2 seconds at 60fps
        this.hasAnimated = false;
        this.setupObserver();
    }

    setupObserver() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;
                    this.animate();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(this.element);
    }

    animate() {
        const updateCounter = () => {
            this.current += this.increment;
            if (this.current < this.target) {
                this.element.textContent = Math.floor(this.current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                this.element.textContent = this.target.toLocaleString();
            }
        };
        updateCounter();
    }
}

// Initialize counters
document.querySelectorAll('.metric-value[data-target]').forEach(el => {
    new MetricCounter(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]')?.value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]')?.value;
        const interest = contactForm.querySelector('select')?.value;
        const message = contactForm.querySelector('textarea')?.value;

        // Log form data (replace with actual submission)
        console.log('Form submission:', { name, email, interest, message });

        // Show success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = '✓ Message Sent!';
        button.disabled = true;
        button.style.background = '#10b981';

        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);

        // In production, replace with actual API call:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, interest, message })
        }).then(response => {
            if (response.ok) {
                // Success handling
            }
        }).catch(error => {
            console.error('Error:', error);
        });
        */
    });
}

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.feature-card, .team-card, .metric-card');
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// External links handling
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Mobile menu toggle (for responsive nav if needed)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header .container');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = '☰';
        toggle.setAttribute('aria-label', 'Toggle menu');
        toggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text);
        `;

        toggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });

        header.appendChild(toggle);

        // Style mobile nav
        nav.style.cssText = `
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            border-bottom: 1px solid var(--border);
        `;

        const style = document.createElement('style');
        style.textContent = `
            nav.mobile-open {
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }
};

// Check for mobile on load and resize
if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
});

// Add active state to nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active nav styles
const navStyle = document.createElement('style');
navStyle.textContent = `
    nav a.active {
        color: var(--primary) !important;
        position: relative;
    }
    nav a.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--primary);
    }
`;
document.head.appendChild(navStyle);

// Performance: Lazy load images if any are added
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
