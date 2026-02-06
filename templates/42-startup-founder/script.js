// Animated Counter Function
const animateCounter = (element, target, duration = 2000) => {
    const isDecimal = target.toString().includes('.');
    const isMoney = element.closest('.stat-item')?.querySelector('.stat-label')?.textContent.includes('Raised') ||
                    element.closest('.stat-item')?.querySelector('.stat-label')?.textContent.includes('ARR');
    const isPercent = element.closest('.traction-card')?.querySelector('.traction-label')?.textContent.includes('Growth') ||
                     element.closest('.traction-card')?.querySelector('.traction-label')?.textContent.includes('Rate');
    const isUsers = element.closest('.stat-item')?.querySelector('.stat-label')?.textContent.includes('Users') ||
                    element.closest('.traction-card')?.querySelector('.traction-label')?.textContent.includes('Users');
    const isPartners = element.closest('.traction-card')?.querySelector('.traction-label')?.textContent.includes('Partners');

    const numericTarget = parseFloat(target);
    let current = 0;
    const increment = numericTarget / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            current = numericTarget;
            clearInterval(timer);
        }

        let displayValue;
        if (isDecimal) {
            displayValue = current.toFixed(1);
        } else if (isUsers && numericTarget >= 1000) {
            displayValue = Math.floor(current).toLocaleString();
        } else {
            displayValue = Math.floor(current);
        }

        if (isMoney) {
            displayValue = '$' + displayValue + 'M';
        } else if (isPercent) {
            displayValue = displayValue + '%';
        } else if (isPartners) {
            displayValue = displayValue + '+';
        } else if (isUsers) {
            displayValue = displayValue + '+';
        }

        element.textContent = displayValue;
    }, 16);
};

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

// Animate hero stats
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                const target = number.getAttribute('data-target');
                animateCounter(number, target);
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    heroObserver.observe(heroStats);
}

// Animate traction metrics
const tractionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const tractionNumbers = entry.target.querySelectorAll('.traction-number');
            tractionNumbers.forEach(number => {
                const target = number.getAttribute('data-target');
                animateCounter(number, target);
            });
            tractionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const tractionSection = document.querySelector('.traction');
if (tractionSection) {
    tractionObserver.observe(tractionSection);
}

// Fade-in animations for cards
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

const animatedCards = document.querySelectorAll('.feature-card, .team-member, .traction-card');
animatedCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    cardObserver.observe(card);
});

// Smooth scroll
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

// Download pitch deck function
function downloadDeck() {
    alert('In a production environment, this would download your pitch deck PDF.\n\nYou can integrate this with:\n- Google Drive links\n- AWS S3 presigned URLs\n- Direct file downloads');
    console.log('Pitch deck download initiated');
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            inquiry: document.getElementById('inquiry').value,
            message: document.getElementById('message').value
        };

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate inquiry type
        if (!formData.inquiry) {
            alert('Please select an inquiry type.');
            return;
        }

        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
        contactForm.reset();
    });
}

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Startup Founder template loaded successfully!');

// Mobile viewport height fix
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("DOMContentLoaded", setVh);
window.addEventListener("resize", setVh);

