/**
 * One Page Scroll Template - JavaScript
 */

// Progress Bar
function updateProgressBar() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Section Navigation
function updateActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollPosition = scrollContainer.scrollTop + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');
        }
    });
}

// Parallax Effect
function handleParallax() {
    const scrollContainer = document.querySelector('.scroll-container');
    const parallaxElements = document.querySelectorAll('.parallax-bg');

    parallaxElements.forEach(element => {
        const section = element.closest('.section');
        const sectionTop = section.offsetTop;
        const scrollTop = scrollContainer.scrollTop;
        const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;

        // Calculate parallax offset
        const offset = (scrollTop - sectionTop) * speed;
        element.style.transform = `translateY(${offset}px)`;
    });
}

// Smooth scroll to section
const navDots = document.querySelectorAll('.nav-dot');
const scrollContainer = document.querySelector('.scroll-container');

navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            scrollContainer.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll event listeners
scrollContainer.addEventListener('scroll', () => {
    updateProgressBar();
    updateActiveSection();
    handleParallax();
});

// Animated Counters
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('[data-count]').forEach(counter => {
    counterObserver.observe(counter);
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const sliderDots = document.querySelector('.slider-dots');

// Create slider dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dots .dot');

function goToTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

// Previous/Next buttons
document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    goToTestimonial(currentTestimonial);
});

document.querySelector('.slider-btn.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(currentTestimonial);
}, 5000);

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for reaching out! I\'ll get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const sections = document.querySelectorAll('.section');
    const currentIndex = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
    });

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
            scrollContainer.scrollTo({
                top: sections[currentIndex + 1].offsetTop,
                behavior: 'smooth'
            });
        }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentIndex > 0) {
            scrollContainer.scrollTo({
                top: sections[currentIndex - 1].offsetTop,
                behavior: 'smooth'
            });
        }
    } else if (e.key === 'Home') {
        e.preventDefault();
        scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else if (e.key === 'End') {
        e.preventDefault();
        scrollContainer.scrollTo({
            top: sections[sections.length - 1].offsetTop,
            behavior: 'smooth'
        });
    }
});

// Initialize on load
window.addEventListener('load', () => {
    updateProgressBar();
    updateActiveSection();
});

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

console.log('One Page Scroll template loaded successfully!');
