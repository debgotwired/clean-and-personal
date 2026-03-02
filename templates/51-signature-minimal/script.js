// Signature Minimal Template - JavaScript

(function() {
    'use strict';

    // Theme Toggle
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    root.setAttribute('data-theme', initialTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });

    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply initial styles and observe sections
    document.querySelectorAll('section').forEach((section, index) => {
        if (index > 0) { // Skip hero section
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });

    // Signature animation restart on scroll into view
    const signature = document.querySelector('.signature-svg');
    if (signature) {
        const signatureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const path = signature.querySelector('path');
                    if (path) {
                        path.style.animation = 'none';
                        path.offsetHeight; // Trigger reflow
                        path.style.animation = 'draw 2s ease forwards';
                    }
                }
            });
        }, { threshold: 0.5 });

        signatureObserver.observe(signature);
    }
})();
