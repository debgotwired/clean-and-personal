/**
 * Multi Page Classic Template - JavaScript
 */

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        if (mainNav.style.display === 'block') {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'block';
            mainNav.style.position = 'absolute';
            mainNav.style.top = '80px';
            mainNav.style.right = '2rem';
            mainNav.style.background = 'white';
            mainNav.style.padding = '1rem';
            mainNav.style.borderRadius = '8px';
            mainNav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mainNav && mobileToggle) {
        if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
            if (window.innerWidth <= 768) {
                mainNav.style.display = 'none';
            }
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768 && mainNav) {
                mainNav.style.display = 'none';
            }
        }
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message. We will get back to you within 24 hours.');

        // Reset form
        contactForm.reset();
    });
}

// Active navigation highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
});

// Scroll to top on page navigation
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav) {
        mainNav.style.display = '';
        mainNav.style.position = '';
        mainNav.style.top = '';
        mainNav.style.right = '';
        mainNav.style.background = '';
        mainNav.style.padding = '';
        mainNav.style.borderRadius = '';
        mainNav.style.boxShadow = '';
    }
});

// Add fade-in animation to content sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe content sections
document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(section);
});

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

console.log('Multi Page Classic template loaded successfully!');
