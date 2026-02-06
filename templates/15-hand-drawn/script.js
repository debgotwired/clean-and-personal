document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); }); });
document.querySelector('.contact-form')?.addEventListener('submit', e => { e.preventDefault(); alert('Thanks!'); e.target.reset(); });
