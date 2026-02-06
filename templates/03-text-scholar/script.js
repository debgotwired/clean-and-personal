// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Active Navigation Link
// ==========================================

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
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--link)';
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ==========================================
// Reading Progress Indicator (optional)
// ==========================================

function addReadingProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--link);
        width: 0%;
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = Math.min(scrollPercentage, 100) + '%';
    });
}

// Uncomment to enable reading progress:
// addReadingProgress();

// ==========================================
// External Link Icons (optional)
// ==========================================

function addExternalLinkIcons() {
    const content = document.querySelectorAll('.content a');
    content.forEach(link => {
        if (link.hostname !== window.location.hostname && link.hostname !== '') {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');

            // Add visual indicator for external links
            link.style.position = 'relative';
            link.style.paddingRight = '1rem';

            const icon = document.createElement('span');
            icon.innerHTML = ' ↗';
            icon.style.cssText = `
                font-size: 0.8em;
                opacity: 0.6;
                margin-left: 0.2em;
            `;
            link.appendChild(icon);
        }
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    // Uncomment if you want external link icons:
    // addExternalLinkIcons();
});
