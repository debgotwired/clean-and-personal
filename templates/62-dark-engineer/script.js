// ==================== //
// Intersection Observer for fade-in animations
// ==================== //

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .stack-card, .tech-stack').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // ==================== //
    // Counter animation for stats
    // ==================== //

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-value').forEach(el => {
        statObserver.observe(el);
    });

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;

        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            el.textContent = formatNumber(current);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = formatNumber(target);
            }
        }

        requestAnimationFrame(update);
    }

    function formatNumber(n) {
        if (n >= 1000) {
            return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return n.toLocaleString();
    }

    // ==================== //
    // Smooth scroll for nav links
    // ==================== //

    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ==================== //
    // Nav background on scroll
    // ==================== //

    let lastScroll = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
            nav.style.borderBottomColor = 'rgba(38, 38, 38, 1)';
        } else {
            nav.style.borderBottomColor = 'rgba(38, 38, 38, 0.5)';
        }

        lastScroll = currentScroll;
    }, { passive: true });
});
