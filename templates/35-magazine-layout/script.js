/**
 * Magazine Layout Template - JavaScript
 */

// Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const articleCards = document.querySelectorAll('.article-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter articles
        articleCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Smooth Scrolling for Navigation
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
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe article cards for fade-in effect
articleCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(card);
});

// Observe sections
document.querySelectorAll('.about-section, .categories-section, .contact-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeObserver.observe(section);
});

// Reading Progress Bar (optional enhancement)
function createReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary);
        z-index: 9999;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createReadingProgress();

// Parallax Effect for Featured Article
const featuredArticle = document.querySelector('.featured-article');
const featuredImage = document.querySelector('.featured-image');

if (featuredArticle && featuredImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (featuredImage.getBoundingClientRect().top < window.innerHeight) {
            featuredImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Article Card Hover Effect Enhancement
articleCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Category Bar Sticky Effect
const categoriesBar = document.querySelector('.categories-bar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (categoriesBar) {
        if (currentScroll > lastScroll && currentScroll > 200) {
            categoriesBar.style.transform = 'translateY(-100%)';
        } else {
            categoriesBar.style.transform = 'translateY(0)';
        }
    }

    lastScroll = currentScroll;
});

// Drop Cap Enhancement
const dropCaps = document.querySelectorAll('.drop-cap');
dropCaps.forEach(cap => {
    cap.addEventListener('mouseenter', () => {
        cap.style.color = 'var(--accent)';
        cap.style.transition = 'color 0.3s';
    });
    cap.addEventListener('mouseleave', () => {
        cap.style.color = 'var(--primary)';
    });
});

// Lazy Loading for Images (if using actual images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Handle External Links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Print Styles Enhancement
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Number keys 1-5 to jump to sections
    const sections = ['#work', '#about', '#contact'];
    const key = parseInt(e.key);

    if (key >= 1 && key <= sections.length) {
        e.preventDefault();
        const section = document.querySelector(sections[key - 1]);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Article Card Click Tracking (for analytics)
articleCards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.article-title').textContent;
        const category = this.querySelector('.article-tag').textContent;

        // Log for analytics (you would send this to your analytics service)
        console.log('Article clicked:', { title, category });

        // Example: Google Analytics event
        // gtag('event', 'article_click', { title, category });
    });
});

// Add subtle animations to expertise cards
const expertiseCards = document.querySelectorAll('.expertise-card');

expertiseCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

    const expertiseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    expertiseObserver.observe(card);
});

// Load More Articles (for future expansion)
function loadMoreArticles() {
    // Placeholder for loading more content
    console.log('Loading more articles...');
}

// Initialize on page load
window.addEventListener('load', () => {
    console.log('Magazine Layout template loaded successfully!');

    // Optional: Auto-focus search if implementing search functionality
    // const searchInput = document.querySelector('.search-input');
    // if (searchInput) {
    //     searchInput.focus();
    // }
});

// Share Functionality (example for future enhancement)
function shareArticle(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to copying URL to clipboard
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    }
}

console.log('Magazine Layout template loaded successfully!');
