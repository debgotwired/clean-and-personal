/**
 * Split Screen Template - JavaScript
 */

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        leftPanel.classList.toggle('active');
        const isOpen = leftPanel.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isOpen);

        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on right panel
if (rightPanel && window.innerWidth <= 768) {
    rightPanel.addEventListener('click', () => {
        if (leftPanel.classList.contains('active')) {
            leftPanel.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');

        // Get target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Calculate scroll position
            const rightPanelRect = rightPanel.getBoundingClientRect();
            const sectionRect = targetSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = scrollTop + sectionRect.top - 100;

            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768 && leftPanel.classList.contains('active')) {
                leftPanel.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// Update Active Nav Link on Scroll
const sections = document.querySelectorAll('.content-section');

function updateActiveNav() {
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for Section Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content sections
sections.forEach(section => {
    sectionObserver.observe(section);
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
        alert('Thank you for your message! I\'ll get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Project Cards Hover Effect Enhancement
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Experience Items Animation
const experienceItems = document.querySelectorAll('.experience-item');

const expObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

experienceItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    expObserver.observe(item);
});

// Skill Items Animation
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.2)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Social Links Animation
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Handle External Links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Parallax Effect for Left Panel (Desktop Only)
if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const leftContent = document.querySelector('.left-content');

        if (leftContent) {
            const parallax = scrolled * 0.05;
            leftContent.style.transform = `translateY(${parallax}px)`;
        }
    });
}

// Handle Window Resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            // Reset mobile menu state
            leftPanel.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';

            // Enable parallax
            const leftContent = document.querySelector('.left-content');
            if (leftContent) {
                leftContent.style.transform = 'translateY(0)';
            }
        }
    }, 250);
});

// Typing Effect for Title (Optional Enhancement)
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Smooth Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Log template info
    console.log('Split Screen template loaded successfully!');
    console.log(`Sections: ${sections.length}`);
    console.log(`Navigation links: ${navLinks.length}`);
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Navigate sections with Page Up/Down
    if (e.key === 'PageDown' || e.key === 'PageUp') {
        e.preventDefault();
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });

        if (currentSection) {
            const currentIndex = Array.from(sections).indexOf(currentSection);
            const nextIndex = e.key === 'PageDown'
                ? Math.min(currentIndex + 1, sections.length - 1)
                : Math.max(currentIndex - 1, 0);

            sections[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Add scroll progress indicator
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // You can add a progress bar element if desired
    console.log(`Scroll progress: ${scrolled.toFixed(0)}%`);
}

window.addEventListener('scroll', updateScrollProgress);

// Mobile viewport height fix
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("DOMContentLoaded", setVh);
window.addEventListener("resize", setVh);

