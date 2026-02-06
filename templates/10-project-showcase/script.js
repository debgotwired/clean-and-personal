// Project Showcase Template JS

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Project filtering
const filterTags = document.querySelectorAll('.filter-tags .tag');
const projectCards = document.querySelectorAll('.project-card');

filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filter = tag.dataset.filter;

        // Update active tag
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const category = card.dataset.category;

            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// External links handling
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(category);
});

// GitHub stats updater (optional - requires API integration)
const updateGitHubStats = async () => {
    // Example: Fetch real GitHub stats
    // Replace with your actual GitHub username
    const username = 'yourusername';

    try {
        // Uncomment to use real GitHub API:
        /*
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        // Update stats in hero section
        const statsElements = document.querySelectorAll('.hero-stats .stat-number');
        if (statsElements[1]) {
            // Assuming second stat is GitHub stars
            statsElements[1].textContent = `${(data.public_repos || 0)}+`;
        }
        */
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
    }
};

// Uncomment to enable GitHub stats updates:
// updateGitHubStats();

// Project card hover effects
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.project-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.project-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Keyboard navigation for filters
filterTags.forEach((tag, index) => {
    tag.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' && index < filterTags.length - 1) {
            filterTags[index + 1].focus();
        } else if (e.key === 'ArrowLeft' && index > 0) {
            filterTags[index - 1].focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tag.click();
        }
    });
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active nav styles
const navStyle = document.createElement('style');
navStyle.textContent = `
    nav a.active {
        color: var(--primary) !important;
        position: relative;
    }
    nav a.active::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--primary);
    }
`;
document.head.appendChild(navStyle);

// Copy button for tech stack (optional enhancement)
const addCopyButtons = () => {
    document.querySelectorAll('.tech-stack').forEach(stack => {
        const copyBtn = document.createElement('button');
        copyBtn.textContent = '📋';
        copyBtn.className = 'copy-tech-btn';
        copyBtn.setAttribute('aria-label', 'Copy tech stack');
        copyBtn.style.cssText = `
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            opacity: 0;
            transition: opacity 0.3s;
        `;

        stack.style.position = 'relative';
        stack.appendChild(copyBtn);

        stack.addEventListener('mouseenter', () => {
            copyBtn.style.opacity = '1';
        });

        stack.addEventListener('mouseleave', () => {
            copyBtn.style.opacity = '0';
        });

        copyBtn.addEventListener('click', () => {
            const techs = Array.from(stack.querySelectorAll('span'))
                .map(span => span.textContent)
                .filter(text => text !== '📋')
                .join(', ');

            navigator.clipboard.writeText(techs).then(() => {
                copyBtn.textContent = '✓';
                setTimeout(() => {
                    copyBtn.textContent = '📋';
                }, 2000);
            });
        });
    });
};

// Uncomment to enable copy buttons:
// addCopyButtons();

// Performance: Lazy load if images are added
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
}

// Mobile menu functionality
const createMobileMenu = () => {
    const header = document.querySelector('header .container');
    const nav = document.querySelector('nav');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-toggle';
        toggle.innerHTML = '☰';
        toggle.setAttribute('aria-label', 'Toggle menu');
        toggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text);
        `;

        toggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });

        header.appendChild(toggle);

        // Add mobile nav styles
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            @media (max-width: 768px) {
                nav {
                    position: fixed;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 2rem;
                    transform: translateY(-100%);
                    transition: transform 0.3s ease;
                    border-bottom: 1px solid var(--border);
                    align-items: flex-start;
                }
                nav.mobile-open {
                    transform: translateY(0);
                }
                @media (prefers-color-scheme: dark) {
                    nav {
                        background: var(--bg);
                    }
                }
            }
        `;
        document.head.appendChild(mobileStyle);
    }
};

// Initialize mobile menu if needed
if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
});

// Track project card clicks (for analytics)
projectCards.forEach(card => {
    const projectName = card.querySelector('h3')?.textContent;
    const links = card.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Project link clicked: ${projectName} - ${link.textContent}`);
            // Add your analytics tracking here
            // Example: gtag('event', 'project_link_click', { project: projectName });
        });
    });
});

// Scroll progress indicator (optional)
const addScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
};

// Uncomment to enable scroll progress indicator:
// addScrollProgress();
