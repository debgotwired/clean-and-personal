// Blog-First Template JS
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Newsletter form
document.querySelector('.newsletter-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert('Thanks for subscribing! (This is a demo - implement your newsletter service)');
    e.target.reset();
});

// External links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});
