// Now Page Focus Template - JavaScript
// Minimal JS - the beauty is in simplicity

(function() {
    'use strict';

    // Smooth scroll for anchor links (only enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Highlight current section in nav (optional)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length && navLinks.length) {
        const highlightNav = () => {
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPos >= top && scrollPos < bottom) {
                    navLinks.forEach(link => {
                        link.style.fontWeight = link.getAttribute('href') === `#${section.id}` ? 'bold' : 'normal';
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightNav);
        highlightNav(); // Run on load
    }
})();
