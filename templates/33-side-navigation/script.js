/**
 * Side Navigation Template - JavaScript
 */

// Mobile Sidebar Toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const mobileOverlay = document.getElementById('mobileOverlay');

function openSidebar() {
    sidebar.classList.add('open');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', openSidebar);
}

if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeSidebar);
}

// Collapsible Navigation Sections
const sectionTitles = document.querySelectorAll('.nav-section-title');

sectionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const sectionId = title.getAttribute('data-section');
        const content = document.querySelector(`[data-content="${sectionId}"]`);

        title.classList.toggle('open');
        if (content) {
            content.classList.toggle('open');
        }
    });
});

// Initialize first section as open
if (sectionTitles.length > 0) {
    sectionTitles[0].classList.add('open');
    const firstSectionId = sectionTitles[0].getAttribute('data-section');
    const firstContent = document.querySelector(`[data-content="${firstSectionId}"]`);
    if (firstContent) {
        firstContent.classList.add('open');
    }
}

// Active Navigation Item
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content section');

// Highlight active nav item based on scroll position
function highlightNav() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });

    // Update TOC
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);
highlightNav();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile sidebar
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        }
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
let searchResults = [];

if (searchInput) {
    // Build search index from content
    const contentText = document.querySelector('.content').textContent;
    const headings = document.querySelectorAll('.content h1, .content h2, .content h3');

    searchResults = Array.from(headings).map(heading => ({
        title: heading.textContent,
        id: heading.closest('section')?.id || '',
        preview: heading.nextElementSibling?.textContent.slice(0, 100) || ''
    }));

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (query.length < 2) return;

        const matches = searchResults.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.preview.toLowerCase().includes(query)
        );

        console.log('Search results:', matches);
        // In production, you would display these results
    });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
    const themeText = themeToggle?.querySelector('span:last-child');
    if (themeText) {
        themeText.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
    }
}

// Copy Code Buttons
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const codeBlock = button.closest('.code-block');
        const code = codeBlock.querySelector('code').textContent;

        try {
            await navigator.clipboard.writeText(code);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = 'Failed';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        }
    });
});

// Handle Window Resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// Update Breadcrumbs
function updateBreadcrumbs() {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (!breadcrumbs) return;

    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav) {
        const pageTitle = activeNav.textContent.trim();
        const currentPage = breadcrumbs.querySelector('span:last-child');
        if (currentPage && currentPage !== breadcrumbs.querySelector('span:first-child')) {
            currentPage.textContent = pageTitle;
        }
    }
}

window.addEventListener('scroll', updateBreadcrumbs);

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes sidebar on mobile
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        closeSidebar();
    }

    // Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
    }
});

console.log('Side Navigation template loaded successfully!');
