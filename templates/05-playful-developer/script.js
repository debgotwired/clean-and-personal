// ==========================================
// Playful Developer Template JS
// ==========================================

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Random color on social link hover (playful!)
const socialLinks = document.querySelectorAll('.social-link');
const colors = ['var(--green)', 'var(--pink)', 'var(--blue)', 'var(--gold)', 'var(--purple)'];

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.post-card, .project-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.borderBottomColor = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.borderBottomColor = 'var(--blue)';
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Fun: Random emoji cursor trail (optional, can be disabled)
let enableCursorTrail = false; // Set to true for extra fun!

if (enableCursorTrail) {
    const emojis = ['✨', '🎨', '💫', '⭐', '🌟'];

    document.addEventListener('mousemove', (e) => {
        const emoji = document.createElement('span');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = e.clientX + 'px';
        emoji.style.top = e.clientY + 'px';
        emoji.style.pointerEvents = 'none';
        emoji.style.fontSize = '1.5rem';
        emoji.style.zIndex = '9999';
        emoji.style.opacity = '1';
        emoji.style.transition = 'all 1s ease';

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.style.opacity = '0';
            emoji.style.transform = 'translateY(-50px) scale(0.5)';
        }, 100);

        setTimeout(() => {
            emoji.remove();
        }, 1000);
    });
}

// External links in new tab
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
