// Friendly Blogger Template - Theme Toggle & Greeting Rotation

(function() {
    'use strict';

    // Rotating greetings inspired by endler.dev
    const greetings = [
        'Servus',
        'Aloha',
        'Howdy',
        'Ahoi',
        'Ohai',
        'Yo',
        'Hey',
        'Hola',
        'Bonjour',
        'Ciao'
    ];

    // Initialize greeting
    function setRandomGreeting() {
        const greetingEl = document.querySelector('.greeting');
        if (greetingEl) {
            const randomIndex = Math.floor(Math.random() * greetings.length);
            greetingEl.textContent = greetings[randomIndex];
        }
    }

    // Theme management
    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    }

    // Initialize on load
    function init() {
        // Set theme immediately to prevent flash
        setTheme(getPreferredTheme());

        // Set random greeting
        setRandomGreeting();

        // Theme toggle button
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Run immediately for theme (prevents flash)
    setTheme(getPreferredTheme());

    // Run rest on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
