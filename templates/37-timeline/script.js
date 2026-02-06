/**
 * Timeline Template - JavaScript
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
            navMenu.style.padding = '2rem';
            navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Timeline Scroll Animations
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Add staggered animation to timeline highlights
            const highlights = entry.target.querySelectorAll('.timeline-highlights li');
            highlights.forEach((highlight, index) => {
                setTimeout(() => {
                    highlight.style.opacity = '1';
                    highlight.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all timeline items
timelineItems.forEach(item => {
    timelineObserver.observe(item);

    // Set initial state for highlights
    const highlights = item.querySelectorAll('.timeline-highlights li');
    highlights.forEach(highlight => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateX(-10px)';
        highlight.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

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

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for reaching out! I\'ll get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Scroll Progress Indicator (Optional Enhancement)
function updateScrollProgress() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top + window.pageYOffset;
    const timelineHeight = timelineRect.height;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    const scrollProgress = Math.max(0, Math.min(1,
        (scrollTop + windowHeight - timelineTop) / (timelineHeight + windowHeight)
    ));

    // Update timeline line color based on progress
    const timelineLine = document.querySelector('.timeline::before');
    if (scrollProgress > 0) {
        timeline.style.setProperty('--timeline-line', '#3b82f6');
    }
}

window.addEventListener('scroll', updateScrollProgress);

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'static';
        navMenu.style.padding = '0';
        navMenu.style.boxShadow = 'none';
    } else {
        navMenu.style.display = 'none';
    }
});

// Timeline Card Hover Effects
timelineItems.forEach(item => {
    const card = item.querySelector('.timeline-card');

    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.timeline-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.timeline-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Skill Tags Interaction
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 4px 10px rgba(59, 130, 246, 0.2)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Add animation to section badge on scroll
const sectionBadges = document.querySelectorAll('.section-badge');

const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease';
        }
    });
}, { threshold: 0.5 });

sectionBadges.forEach(badge => {
    badgeObserver.observe(badge);
});

// Animate section titles
const sectionTitles = document.querySelectorAll('.section-title');

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

sectionTitles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    titleObserver.observe(title);
});

// Timeline Stats Counter
function countTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    console.log(`Total timeline milestones: ${items.length}`);
}

// Initialize
window.addEventListener('load', () => {
    countTimelineItems();
    updateScrollProgress();
    console.log('Timeline template loaded successfully!');
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Navigate timeline with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const currentScroll = window.pageYOffset;
        const visibleItems = Array.from(timelineItems).filter(item => {
            const rect = item.getBoundingClientRect();
            return rect.top > 0 && rect.top < window.innerHeight;
        });

        if (visibleItems.length > 0) {
            const nextItem = e.key === 'ArrowDown'
                ? visibleItems[0].nextElementSibling
                : visibleItems[0].previousElementSibling;

            if (nextItem && nextItem.classList.contains('timeline-item')) {
                nextItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
});

// Add fade-in animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
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
