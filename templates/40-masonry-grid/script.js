/**
 * Masonry Grid Template - JavaScript
 */

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.padding = '2rem';
            navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Category Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const masonryItems = document.querySelectorAll('.masonry-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items
        masonryItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = `fadeInScale 0.6s ease ${index * 0.05}s forwards`;
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const viewButtons = document.querySelectorAll('.view-btn');

let currentLightboxIndex = 0;
let visibleItems = Array.from(masonryItems);

function updateVisibleItems() {
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    visibleItems = Array.from(masonryItems).filter(item => {
        const category = item.getAttribute('data-category');
        return activeFilter === 'all' || category === activeFilter;
    });
}

function openLightbox(index) {
    updateVisibleItems();
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const item = visibleItems[currentLightboxIndex];
    if (!item) return;

    const button = item.querySelector('.view-btn');
    const title = button.getAttribute('data-title');
    const category = button.getAttribute('data-category');
    const imageStyle = item.querySelector('.placeholder-img').style.background;

    document.querySelector('.lightbox-title').textContent = title;
    document.querySelector('.lightbox-category').textContent = category;
    document.querySelector('.lightbox-placeholder').style.background = imageStyle;

    // Update navigation buttons
    lightboxPrev.style.display = currentLightboxIndex === 0 ? 'none' : 'block';
    lightboxNext.style.display = currentLightboxIndex === visibleItems.length - 1 ? 'none' : 'block';
}

viewButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = button.closest('.masonry-item');
        updateVisibleItems();
        currentLightboxIndex = visibleItems.indexOf(item);
        openLightbox(currentLightboxIndex);
    });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        updateLightboxContent();
    }
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentLightboxIndex < visibleItems.length - 1) {
        currentLightboxIndex++;
        updateLightboxContent();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft' && currentLightboxIndex > 0) {
        currentLightboxIndex--;
        updateLightboxContent();
    } else if (e.key === 'ArrowRight' && currentLightboxIndex < visibleItems.length - 1) {
        currentLightboxIndex++;
        updateLightboxContent();
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 150;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        alert('Thank you for reaching out! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Load More Functionality
const loadMoreBtn = document.getElementById('load-more');
let itemsLoaded = 12;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        // Simulate loading more items
        const masonryGrid = document.getElementById('masonry-grid');
        const categories = ['architecture', 'nature', 'portrait', 'abstract'];
        const heights = ['short', '', 'tall'];
        const colors = [
            'linear-gradient(135deg, #0ea5e9, #06b6d4)',
            'linear-gradient(135deg, #10b981, #14b8a6)',
            'linear-gradient(135deg, #f59e0b, #f97316)',
            'linear-gradient(135deg, #8b5cf6, #a855f7)'
        ];

        for (let i = 0; i < 6; i++) {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const height = heights[Math.floor(Math.random() * heights.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];

            const newItem = document.createElement('article');
            newItem.className = `masonry-item ${height}`;
            newItem.setAttribute('data-category', category);
            newItem.innerHTML = `
                <div class="item-image">
                    <div class="placeholder-img" style="background: ${color};">
                        <span class="placeholder-icon">🎨</span>
                    </div>
                    <div class="item-overlay">
                        <button class="view-btn" data-title="New Item ${itemsLoaded + i + 1}" data-category="${category}">View</button>
                    </div>
                </div>
                <div class="item-content">
                    <h3 class="item-title">New Item ${itemsLoaded + i + 1}</h3>
                    <p class="item-category">${category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </div>
            `;

            masonryGrid.appendChild(newItem);

            // Add event listener to new view button
            const newViewBtn = newItem.querySelector('.view-btn');
            newViewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const item = newViewBtn.closest('.masonry-item');
                updateVisibleItems();
                currentLightboxIndex = visibleItems.indexOf(item);
                openLightbox(currentLightboxIndex);
            });
        }

        itemsLoaded += 6;

        // Optionally hide button after loading enough items
        if (itemsLoaded >= 30) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// Intersection Observer for lazy loading
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            imageObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

masonryItems.forEach(item => {
    imageObserver.observe(item);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'static';
        navMenu.style.padding = '0';
        navMenu.style.boxShadow = 'none';
    } else {
        navMenu.style.display = 'none';
    }
});

// Masonry item hover effects
masonryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

console.log('Masonry Grid template loaded successfully!');
console.log(`Total items: ${masonryItems.length}`);
console.log(`Filter categories: ${filterButtons.length - 1}`);
