/**
 * Horizontal Scroll Template - JavaScript
 */

const scrollContainer = document.getElementById('scroll-container');
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');
const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');
const currentSectionSpan = document.querySelector('.current-section');
const progressFill = document.getElementById('progress-fill');
const keyboardHint = document.getElementById('keyboard-hint');

let currentSection = 0;
const totalSections = sections.length;

// Update navigation state
function updateNavigation() {
    // Update counter
    currentSectionSpan.textContent = String(currentSection + 1).padStart(2, '0');

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSection);
    });

    // Update arrow buttons
    navLeft.disabled = currentSection === 0;
    navRight.disabled = currentSection === totalSections - 1;

    // Update progress bar
    const progress = (currentSection / (totalSections - 1)) * 100;
    progressFill.style.width = `${progress}%`;
}

// Scroll to section
function scrollToSection(index) {
    if (index >= 0 && index < totalSections) {
        const targetScroll = index * window.innerWidth;
        scrollContainer.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
        currentSection = index;
        updateNavigation();
    }
}

// Handle scroll events
let scrollTimeout;
scrollContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const scrollLeft = scrollContainer.scrollLeft;
        const newSection = Math.round(scrollLeft / window.innerWidth);

        if (newSection !== currentSection) {
            currentSection = newSection;
            updateNavigation();
        }
    }, 100);
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToSection(index);
        hideKeyboardHint();
    });
});

// Arrow navigation
navLeft.addEventListener('click', () => {
    scrollToSection(currentSection - 1);
    hideKeyboardHint();
});

navRight.addEventListener('click', () => {
    scrollToSection(currentSection + 1);
    hideKeyboardHint();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
        hideKeyboardHint();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
        hideKeyboardHint();
    } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
        hideKeyboardHint();
    } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(totalSections - 1);
        hideKeyboardHint();
    }
});

// Hide keyboard hint
function hideKeyboardHint() {
    if (keyboardHint) {
        keyboardHint.style.opacity = '0';
        setTimeout(() => {
            keyboardHint.style.display = 'none';
        }, 1000);
    }
}

// Touch/Mouse wheel navigation
let isScrolling = false;
scrollContainer.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        isScrolling = true;
        if (e.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else {
            scrollToSection(currentSection - 1);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    hideKeyboardHint();
}, { passive: false });

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Section animations on scroll
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, {
    root: scrollContainer,
    threshold: 0.5
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'scale(0.95)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// Initialize
updateNavigation();

// Handle window resize
window.addEventListener('resize', () => {
    scrollToSection(currentSection);
});

// Preload next section for smooth transitions
function preloadNextSection() {
    if (currentSection < totalSections - 1) {
        const nextSection = sections[currentSection + 1];
        if (nextSection) {
            nextSection.style.willChange = 'transform, opacity';
        }
    }
}

scrollContainer.addEventListener('scroll', preloadNextSection);

console.log('Horizontal Scroll template loaded successfully!');
console.log(`Total sections: ${totalSections}`);
