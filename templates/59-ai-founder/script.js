// AI Founder Template - JavaScript
// Inspiration: carsonkahn.com

(function() {
    'use strict';

    // Typewriter effect
    const name = "YOUR NAME";
    const typedEl = document.getElementById('typedName');
    let i = 0;

    function typeWriter() {
        if (i < name.length) {
            typedEl.textContent += name.charAt(i);
            i++;
            setTimeout(typeWriter, 44 + Math.random() * 55);
        }
    }

    setTimeout(typeWriter, 500);

    // Custom cursor with ghost trail
    const canvas = document.getElementById('cursorCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Add particle
        particles.push({
            x: mouseX,
            y: mouseY,
            life: 40,
            size: 8
        });
    });

    let rainbowMode = false;
    let hue = 0;

    function animateCursor() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update hue in rainbow mode
        if (rainbowMode) {
            hue = (hue + 3) % 360;
        }

        // Draw particles
        particles.forEach((p, index) => {
            p.life--;
            p.size *= 0.95;

            if (p.life <= 0) {
                particles.splice(index, 1);
                return;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = rainbowMode
                ? `hsla(${hue}, 100%, 50%, ${p.life / 40})`
                : `rgba(58, 146, 197, ${p.life / 40})`;
            ctx.fill();
        });

        // Draw main cursor
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
        ctx.fillStyle = rainbowMode
            ? `hsla(${hue}, 100%, 50%, 0.8)`
            : 'rgba(58, 146, 197, 0.8)';
        ctx.fill();

        requestAnimationFrame(animateCursor);
    }

    // Only enable custom cursor on desktop
    if (window.innerWidth > 640) {
        animateCursor();
    }

    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.getElementById('easterEgg').classList.add('visible');
                konamiIndex = 0;

                // Activate rainbow cursor mode
                rainbowMode = true;
                particles = [];

                // Disable rainbow mode after 10 seconds
                setTimeout(() => {
                    rainbowMode = false;
                }, 10000);
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .company-card, .logo-item, .investment');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Spawn extra particles
            for (let i = 0; i < 5; i++) {
                const rect = el.getBoundingClientRect();
                particles.push({
                    x: rect.left + Math.random() * rect.width,
                    y: rect.top + Math.random() * rect.height,
                    life: 30,
                    size: 5
                });
            }
        });
    });
})();
