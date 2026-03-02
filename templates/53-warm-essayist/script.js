// Warm Essayist Template - JavaScript

(function() {
    'use strict';

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;

            // Replace with your actual newsletter signup logic
            console.log('Newsletter signup:', email);

            // Show success message
            const button = newsletterForm.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Subscribed!';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                newsletterForm.reset();
            }, 2000);
        });
    }

    // Subscribe button in header
    const subscribeBtn = document.querySelector('.subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const ctaSection = document.querySelector('.newsletter-cta');
            if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    ctaSection.querySelector('input')?.focus();
                }, 500);
            }
        });
    }

    // Reading progress indicator (optional)
    const addReadingProgress = () => {
        const progress = document.createElement('div');
        progress.className = 'reading-progress';
        progress.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--accent, #b8860b);
            z-index: 1000;
            transition: width 0.1s;
        `;
        document.body.appendChild(progress);

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progress.style.width = `${scrollPercent}%`;
        });
    };

    // Only add reading progress on article pages
    if (document.querySelector('article.full-essay')) {
        addReadingProgress();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
