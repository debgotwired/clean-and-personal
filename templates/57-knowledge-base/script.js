// Knowledge Base Template - JavaScript

(function() {
    'use strict';

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Mobile sidebar toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Category filtering
    const navItems = document.querySelectorAll('.nav-item[data-filter]');
    const noteCards = document.querySelectorAll('.note-card');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = item.dataset.filter;

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Filter cards
            noteCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Close mobile sidebar
            sidebar.classList.remove('open');
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        noteCards.forEach(card => {
            const searchable = card.dataset.searchable || '';
            const title = card.querySelector('h2').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();

            const matches = title.includes(query) ||
                           content.includes(query) ||
                           searchable.includes(query);

            card.style.display = matches ? 'block' : 'none';
        });
    });

    // Smooth scroll
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
