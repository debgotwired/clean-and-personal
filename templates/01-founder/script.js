// ==========================================
// Zero-Lag Cursor Spotlight Effect
// ==========================================

class CursorSpotlight {
    constructor() {
        this.spotlight = document.getElementById('cursor-spotlight');
        this.mouseX = 0;
        this.mouseY = 0;
        this.isVisible = false;

        this.init();
    }

    init() {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.isVisible = true;
            this.updatePosition();
        });

        // Hide when mouse leaves window
        document.addEventListener('mouseleave', () => {
            this.isVisible = false;
            this.spotlight.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.isVisible = true;
            this.spotlight.style.opacity = '1';
        });

        // Initial hide
        this.spotlight.style.opacity = '0';
    }

    updatePosition() {
        // Use translate3d for GPU acceleration and zero lag
        // NO requestAnimationFrame needed - direct style update is faster
        this.spotlight.style.transform = `translate3d(${this.mouseX}px, ${this.mouseY}px, 0)`;

        if (this.isVisible) {
            this.spotlight.style.opacity = '1';
        }
    }
}

// ==========================================
// Elegant Gradient Mesh Background
// ==========================================

class GradientMesh {
    constructor() {
        this.canvas = document.getElementById('particles');
        this.ctx = this.canvas.getContext('2d');
        this.blobs = [];
        this.blobCount = 5;
        this.mouse = { x: 0, y: 0 };
        this.time = 0;

        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resize();
        this.createBlobs();
        this.addGrainTexture();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    }

    createBlobs() {
        const colors = [
            { r: 34, g: 197, b: 94, a: 0.18 },   // Soft green (more visible)
            { r: 16, g: 185, b: 129, a: 0.16 },  // Emerald
            { r: 134, g: 239, b: 172, a: 0.14 }, // Light green
            { r: 74, g: 222, b: 128, a: 0.12 },  // Pale green
            { r: 209, g: 250, b: 229, a: 0.2 }   // Very light green
        ];

        for (let i = 0; i < this.blobCount; i++) {
            this.blobs.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                baseX: Math.random() * this.canvas.width,
                baseY: Math.random() * this.canvas.height,
                radius: Math.random() * 350 + 250, // Larger blobs for more visible movement
                color: colors[i % colors.length],
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                offset: Math.random() * Math.PI * 2,
                drift: Math.random() * 0.0005 + 0.0001
            });
        }
    }

    addGrainTexture() {
        // Create grain texture overlay
        const grainCanvas = document.createElement('canvas');
        grainCanvas.width = 200;
        grainCanvas.height = 200;
        const grainCtx = grainCanvas.getContext('2d');

        const imageData = grainCtx.createImageData(200, 200);
        for (let i = 0; i < imageData.data.length; i += 4) {
            const noise = Math.random() * 30;
            imageData.data[i] = noise;
            imageData.data[i + 1] = noise;
            imageData.data[i + 2] = noise;
            imageData.data[i + 3] = 8; // Very subtle
        }
        grainCtx.putImageData(imageData, 0, 0);

        this.grainPattern = this.ctx.createPattern(grainCanvas, 'repeat');
    }

    drawBlobs() {
        // Soft gradient background base
        const bgGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        bgGradient.addColorStop(0, '#fafafa');
        bgGradient.addColorStop(0.5, '#f5f5f5');
        bgGradient.addColorStop(1, '#f0fdf4');
        this.ctx.fillStyle = bgGradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw cursor influence area (subtle glow)
        if (this.mouse.x > 0 && this.mouse.y > 0) {
            const cursorGradient = this.ctx.createRadialGradient(
                this.mouse.x, this.mouse.y, 0,
                this.mouse.x, this.mouse.y, 250
            );
            cursorGradient.addColorStop(0, 'rgba(34, 197, 94, 0.03)');
            cursorGradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.01)');
            cursorGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

            this.ctx.fillStyle = cursorGradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        // Draw organic blob shapes
        this.blobs.forEach((blob, index) => {
            // Create radial gradient for each blob
            const gradient = this.ctx.createRadialGradient(
                blob.x, blob.y, 0,
                blob.x, blob.y, blob.radius
            );

            gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a})`);
            gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a * 0.5})`);
            gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

            // Draw organic shape with subtle distortion
            this.ctx.save();
            this.ctx.filter = 'blur(60px)';
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();

            // Create organic shape using sine waves for distortion
            const segments = 12;
            for (let i = 0; i <= segments; i++) {
                const angle = (i / segments) * Math.PI * 2;
                const distortion = Math.sin(angle * 3 + this.time * 0.001 + blob.offset) * 20;
                const r = blob.radius + distortion;
                const x = blob.x + Math.cos(angle) * r;
                const y = blob.y + Math.sin(angle) * r;

                if (i === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }

            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.restore();
        });

        // Apply grain texture
        this.ctx.fillStyle = this.grainPattern;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateBlobs() {
        this.time++;

        this.blobs.forEach((blob, index) => {
            // Very slow, organic movement
            blob.baseX += blob.speedX;
            blob.baseY += blob.speedY;

            // Gentle oscillation
            const oscillation = Math.sin(this.time * blob.drift) * 50;
            const baseXPos = blob.baseX + oscillation;
            const baseYPos = blob.baseY + Math.cos(this.time * blob.drift * 0.7) * 30;

            // Strong cursor interaction - blobs actively follow cursor
            if (this.mouse.x > 0 && this.mouse.y > 0) {
                const dx = this.mouse.x - blob.x;
                const dy = this.mouse.y - blob.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // All blobs react to cursor within a large radius
                const maxDistance = window.innerWidth * 0.8; // 80% of screen width

                // Different reactivity for each blob - creates layered movement
                const baseReactivity = 0.015 + (index * 0.008); // 1.5% to 4.7% pull

                if (distance < maxDistance) {
                    // Strong pull that decreases with distance
                    const influence = Math.pow(1 - distance / maxDistance, 1.5); // Exponential falloff
                    const pull = baseReactivity * (1 + influence * 2); // Up to 3x stronger when close

                    // Smooth interpolation toward cursor
                    blob.x += dx * pull;
                    blob.y += dy * pull;
                } else {
                    // Return to natural position when cursor is far
                    blob.x += (baseXPos - blob.x) * 0.02;
                    blob.y += (baseYPos - blob.y) * 0.02;
                }
            } else {
                // No cursor - return to base position
                blob.x += (baseXPos - blob.x) * 0.03;
                blob.y += (baseYPos - blob.y) * 0.03;
            }

            // Bounce off edges smoothly
            if (blob.baseX < 0 || blob.baseX > this.canvas.width) {
                blob.speedX *= -1;
                blob.baseX = Math.max(0, Math.min(this.canvas.width, blob.baseX));
            }
            if (blob.baseY < 0 || blob.baseY > this.canvas.height) {
                blob.speedY *= -1;
                blob.baseY = Math.max(0, Math.min(this.canvas.height, blob.baseY));
            }
        });
    }

    animate() {
        this.drawBlobs();
        this.updateBlobs();
        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
        });

        window.addEventListener('mousemove', (e) => {
            // Smooth mouse tracking for fluid gradient movement
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY + window.scrollY;
        });

        window.addEventListener('mouseleave', () => {
            // Reset mouse position when cursor leaves window
            this.mouse.x = -1;
            this.mouse.y = -1;
        });

        // Update canvas height on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const newHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
                    if (Math.abs(this.canvas.height - newHeight) > 100) {
                        this.canvas.height = newHeight;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
}

// ==========================================
// Scroll-based Fade-in Animation
// ==========================================

class ScrollAnimations {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        this.observeElements();
    }

    observeElements() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('fade-in');
            this.observer.observe(section);
        });
    }
}

// ==========================================
// Smooth Scroll Enhancement
// ==========================================

class SmoothScroll {
    constructor() {
        this.setupSmoothScroll();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// ==========================================
// Blog Link Handler
// ==========================================

class BlogLinkHandler {
    constructor() {
        this.setupBlogLink();
    }

    setupBlogLink() {
        const blogLink = document.getElementById('blog-link');
        if (blogLink) {
            blogLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Blog coming soon! It will be hosted on a subdomain or Substack.');
            });
        }
    }
}

// ==========================================
// Initialize Everything
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Always enable cursor spotlight (zero lag, smooth)
    new CursorSpotlight();

    if (!prefersReducedMotion) {
        new ScrollAnimations();
    } else {
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    }

    new SmoothScroll();
    new BlogLinkHandler();

    // Subtle parallax on hero - fade out as you scroll
    if (!prefersReducedMotion) {
        const hero = document.querySelector('.hero');
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const windowHeight = window.innerHeight;
                    const fadeStart = windowHeight * 0.3;

                    if (scrolled > fadeStart) {
                        const fadeProgress = (scrolled - fadeStart) / (windowHeight * 0.3);
                        hero.style.opacity = Math.max(0, 1 - fadeProgress);
                    } else {
                        hero.style.opacity = 1;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        });
    }
});

// Performance logging (dev only)
window.addEventListener('load', () => {
    if (performance.getEntriesByType) {
        const perfEntries = performance.getEntriesByType('navigation');
        if (perfEntries.length > 0) {
            console.log(`Page load time: ${perfEntries[0].loadEventEnd - perfEntries[0].loadEventStart}ms`);
        }
    }
});

// Mobile viewport height fix
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("DOMContentLoaded", setVh);
window.addEventListener("resize", setVh);

