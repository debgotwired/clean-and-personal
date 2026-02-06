// Y2K Retro Template JS
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form
document.querySelector('.contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const orig = btn.textContent;
    btn.textContent = '✓ Sent!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    btn.disabled = true;
    setTimeout(() => {
        e.target.reset();
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
    }, 3000);
});

// Visitor counter animation
const counter = document.querySelector('.counter');
if (counter) {
    let count = 1337;
    setInterval(() => {
        count++;
        counter.textContent = String(count).padStart(6, '0');
    }, 5000);
}

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .timeline-item, .badge').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    observer.observe(el);
});

// External links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});
