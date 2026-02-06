// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Animate facts counter
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const isPercent = String(target).includes('%');
    const isDollar = String(target).includes('$');
    const isPlus = String(target).includes('+');

    // Extract numeric value
    const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''));

    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current);
        if (isDollar) {
            displayValue = '$' + displayValue + 'M';
        } else if (isPercent) {
            displayValue = displayValue + '%';
        } else if (isPlus) {
            displayValue = displayValue + '+';
        }

        element.textContent = displayValue;
    }, 16);
};

const factsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const factNumbers = entry.target.querySelectorAll('.fact-number');
            factNumbers.forEach(number => {
                const target = number.textContent;
                animateCounter(number, target);
            });
            factsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const summarySection = document.querySelector('.summary');
if (summarySection) {
    factsObserver.observe(summarySection);
}

// Download PDF function
function downloadPDF() {
    // In a real implementation, this would generate or download a PDF
    // For now, we'll show an alert and log the action
    alert('In a production environment, this would download your resume as a PDF.\n\nFor now, you can use your browser\'s "Print to PDF" feature (Ctrl/Cmd + P) to save this page as a PDF.');

    // Optional: Open print dialog
    // window.print();

    console.log('PDF download initiated');
}

// Form validation and submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value
        };

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // In a real implementation, you would send this data to a server
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// Add scroll-based animations for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px'
});

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    timelineObserver.observe(item);
});

// Add fade-in animation for cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

const animatedCards = document.querySelectorAll('.education-item, .cert-item, .fact');
animatedCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    cardObserver.observe(card);
});

// Print styles optimization
window.addEventListener('beforeprint', () => {
    // Ensure all content is visible for printing
    document.querySelectorAll('.timeline-item, .education-item, .cert-item, .fact').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Alt + D to download PDF
    if (e.altKey && e.key === 'd') {
        e.preventDefault();
        downloadPDF();
    }

    // Alt + C to go to contact section
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Resume template loaded successfully. Alt+D to download PDF, Alt+C to jump to contact.');
