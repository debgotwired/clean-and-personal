// Bento Grid Template JS

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

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        console.log('Newsletter signup:', email);

        const button = newsletterForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = '✓ Subscribed!';
        button.disabled = true;

        setTimeout(() => {
            newsletterForm.reset();
            button.textContent = originalText;
            button.disabled = false;
        }, 3000);
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            message: contactForm.querySelector('textarea').value
        };

        console.log('Contact form submission:', data);

        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = '✓ Message Sent!';
        button.disabled = true;
        button.style.background = '#10b981';

        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);
    });
}

// Intersection Observer for card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            cardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all bento cards for fade-in animation
document.querySelectorAll('.bento-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
    cardObserver.observe(card);
});

// External links handling
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Card hover effect enhancement
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Active nav link highlighting
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    // Simple implementation - can be enhanced
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                link.style.color = 'var(--primary)';
            } else {
                link.style.color = '';
            }
        }
    });
});

// Mobile menu (if needed)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header .header-content');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-toggle';
        toggle.innerHTML = '☰';
        toggle.setAttribute('aria-label', 'Toggle menu');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text);
        `;

        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('mobile-open');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        header.appendChild(toggle);

        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                nav {
                    position: fixed;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: var(--card-bg);
                    flex-direction: column;
                    padding: 2rem;
                    transform: translateY(-100%);
                    transition: transform 0.3s ease;
                    border-bottom: 1px solid var(--border);
                    box-shadow: var(--shadow-lg);
                }
                nav.mobile-open {
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
};

if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
});

// Parallax effect for project cards (subtle)
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        projectCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;

            if (scrollPercent > 0 && scrollPercent < 1) {
                card.style.transform = `translateY(${scrollPercent * -10}px)`;
            }
        });
    }
});

// Performance: Lazy load if images are added
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
}

// Keyboard navigation for grid
document.addEventListener('keydown', e => {
    const cards = Array.from(document.querySelectorAll('.bento-card'));
    const focusedCard = cards.find(card => card.contains(document.activeElement));

    if (!focusedCard) return;

    const currentIndex = cards.indexOf(focusedCard);

    if (e.key === 'ArrowDown' && currentIndex < cards.length - 1) {
        cards[currentIndex + 1].querySelector('a, button, input')?.focus();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        cards[currentIndex - 1].querySelector('a, button, input')?.focus();
    }
});

// Status indicator animation enhance
const statusIndicator = document.querySelector('.status-indicator');
if (statusIndicator) {
    setInterval(() => {
        statusIndicator.style.transform = 'scale(1.2)';
        setTimeout(() => {
            statusIndicator.style.transform = 'scale(1)';
        }, 300);
    }, 3000);
}
