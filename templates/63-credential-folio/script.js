/* Credential Folio - Scroll Fade-in */

(function () {
    const fadeEls = document.querySelectorAll('.fade-in');

    if (!fadeEls.length) return;

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
        observer.observe(el);
    });
})();
