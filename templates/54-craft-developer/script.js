// Craft Developer Template - JavaScript
// Minimal by design - craft is in the details

(function() {
    'use strict';

    // Command menu shortcut (optional feature)
    // Press Cmd+K or Ctrl+K to focus on navigation
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            // Could open a command menu here
            console.log('Command menu triggered');
        }
    });

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

    // Add subtle hover effect to project items
    const projectItems = document.querySelectorAll('.project-list li');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(4px)';
            item.style.transition = 'transform 0.15s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
})();
