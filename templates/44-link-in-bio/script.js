// Link click tracking
const linkButtons = document.querySelectorAll('.link-button');
linkButtons.forEach(link => {
    link.addEventListener('click', function(e) {
        const title = this.querySelector('.link-title').textContent;
        console.log('Link clicked:', title);

        // Add analytics tracking here
        // Example: gtag('event', 'link_click', { link_name: title });
    });
});

// Social icon tracking
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        const platform = this.getAttribute('aria-label');
        console.log('Social clicked:', platform);

        // Add analytics tracking here
        // Example: gtag('event', 'social_click', { platform: platform });
    });
});

// Add ripple effect on click
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    if (!document.querySelector('style[data-ripple]')) {
        rippleStyle.setAttribute('data-ripple', 'true');
        document.head.appendChild(rippleStyle);
    }

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(ripple);
}

linkButtons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Particle effect on avatar hover (optional enhancement)
const avatar = document.querySelector('.avatar');
if (avatar) {
    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });

    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Link in Bio template loaded successfully!');

// Mobile viewport height fix
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("DOMContentLoaded", setVh);
window.addEventListener("resize", setVh);

