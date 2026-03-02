// Angel Investor Template - JavaScript

(function() {
    'use strict';

    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add hover effect to company cards
    const companies = document.querySelectorAll('.company');
    companies.forEach(company => {
        company.addEventListener('mouseenter', () => {
            company.style.transform = 'translateY(-2px)';
        });
        company.addEventListener('mouseleave', () => {
            company.style.transform = 'translateY(0)';
        });
    });

    // Portfolio filtering (if needed in future)
    const filterPortfolio = (sector) => {
        const groups = document.querySelectorAll('.sector-group');
        groups.forEach(group => {
            if (sector === 'all' || group.querySelector('h3').textContent.toLowerCase().includes(sector)) {
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        });
    };

    // Expose for potential use
    window.filterPortfolio = filterPortfolio;
})();
