// Creative Portfolio Template JS

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

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items
        galleryItems.forEach(item => {
            const category = item.dataset.category;

            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            project: formData.get('project'),
            message: formData.get('message')
        };

        // Log form data (replace with actual submission)
        console.log('Form submission:', data);

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
            body: JSON.stringify(data)
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe gallery items
galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe testimonials
document.querySelectorAll('.testimonial').forEach(testimonial => {
    testimonial.style.opacity = '0';
    testimonial.style.transform = 'translateY(30px)';
    testimonial.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(testimonial);
});

// Gallery item click handler (for future modal implementation)
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const category = item.dataset.category;
        console.log(`Clicked: ${title} (${category})`);

        // TODO: Implement modal or detail view
        // For now, just log the click
        // You can add a lightbox or detail page navigation here
    });
});

// External links handling
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Keyboard navigation for gallery
document.addEventListener('keydown', e => {
    const visibleItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    const focusedIndex = visibleItems.findIndex(item => item.contains(document.activeElement));

    if (e.key === 'ArrowRight' && focusedIndex < visibleItems.length - 1) {
        visibleItems[focusedIndex + 1].querySelector('a, .item-image')?.focus();
    } else if (e.key === 'ArrowLeft' && focusedIndex > 0) {
        visibleItems[focusedIndex - 1].querySelector('a, .item-image')?.focus();
    }
});

// Make gallery items focusable
galleryItems.forEach(item => {
    item.setAttribute('tabindex', '0');
});

// Parallax effect for hero (subtle)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.scrollY < window.innerHeight) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});

// Lazy load optimization for images (when real images are added)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Mobile menu for responsive nav
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-toggle';
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
            navLinks.classList.toggle('mobile-open');
        });

        nav.appendChild(toggle);

        // Add mobile nav styles
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            @media (max-width: 768px) {
                .nav-links {
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
                    gap: 1.5rem;
                }
                .nav-links.mobile-open {
                    transform: translateY(0);
                }
                @media (prefers-color-scheme: dark) {
                    .nav-links {
                        background: var(--bg);
                    }
                }
            }
        `;
        document.head.appendChild(mobileStyle);
    }
};

// Initialize mobile menu if needed
if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

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
const navActiveStyle = document.createElement('style');
navActiveStyle.textContent = `
    .nav-links a.active {
        color: var(--primary) !important;
        position: relative;
    }
    .nav-links a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--primary);
    }
`;
document.head.appendChild(navActiveStyle);
