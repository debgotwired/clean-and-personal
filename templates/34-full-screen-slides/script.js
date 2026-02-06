/**
 * Full Screen Slides Template - JavaScript
 */

let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

// Initialize
function init() {
    createSlideDots();
    updateSlideCounter();
    updateProgressBar();
    showSlide(currentSlide);
}

// Create slide dots
function createSlideDots() {
    const dotsContainer = document.getElementById('slideDots');
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (i === 1) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');

    // Remove active class from all
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current
    slides[n - 1].classList.add('active');
    dots[n - 1].classList.add('active');

    // Add prev class to previous slides
    for (let i = 0; i < n - 1; i++) {
        slides[i].classList.add('prev');
    }

    currentSlide = n;
    updateSlideCounter();
    updateProgressBar();
}

// Next slide
function nextSlide() {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
}

// Previous slide
function prevSlide() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
}

// Go to specific slide
function goToSlide(n) {
    if (n >= 1 && n <= totalSlides) {
        showSlide(n);
    }
}

// Update slide counter
function updateSlideCounter() {
    document.querySelector('.slide-counter .current').textContent = currentSlide;
    document.querySelector('.slide-counter .total').textContent = totalSlides;
}

// Update progress bar
function updateProgressBar() {
    const progress = (currentSlide / totalSlides) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Navigation buttons
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides);
            break;
        case 'n':
        case 'N':
            toggleNotes();
            break;
        case '?':
            toggleHelp();
            break;
    }
});

// Speaker Notes Toggle
const notesToggle = document.getElementById('notesToggle');
const speakerNotes = document.getElementById('speakerNotes');

function toggleNotes() {
    speakerNotes.classList.toggle('open');
}

if (notesToggle) {
    notesToggle.addEventListener('click', toggleNotes);
}

// Shortcuts Help
const shortcutsHelp = document.getElementById('shortcutsHelp');

function toggleHelp() {
    shortcutsHelp.classList.toggle('open');
}

// Close help with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        shortcutsHelp.classList.remove('open');
    }
});

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left
        } else {
            prevSlide(); // Swipe right
        }
    }
}

// Mouse wheel navigation
let wheelTimeout;
document.addEventListener('wheel', (e) => {
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            nextSlide();
        } else if (e.deltaY < 0) {
            prevSlide();
        }
    }, 100);
}, { passive: true });

// Prevent default context menu on right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Update speaker notes content based on slide
function updateNotes() {
    const notesContent = document.getElementById('notesContent');
    const notes = {
        1: 'Welcome slide. Introduce yourself and set expectations for the presentation.',
        2: 'Talk about your background, experience, and what drives you.',
        3: 'Showcase your best work. Focus on impact and results.',
        4: 'Explain your methodology and what makes your process unique.',
        5: 'Call to action. Encourage questions and provide contact information.'
    };

    notesContent.innerHTML = `
        <h4>Speaker Notes - Slide ${currentSlide}</h4>
        <p>${notes[currentSlide] || 'No notes available for this slide.'}</p>
    `;
}

// Update notes when slide changes
const observer = new MutationObserver(() => {
    updateNotes();
});

observer.observe(document.querySelector('.slide.active'), {
    attributes: true,
    attributeFilter: ['class']
});

// Fullscreen API
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// F key for fullscreen
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
    }
});

// Presentation timer
let presentationStartTime = Date.now();
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - presentationStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        console.log(`Presentation time: ${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Start timer when first advancing from slide 1
let timerStarted = false;
document.addEventListener('keydown', (e) => {
    if (!timerStarted && currentSlide === 1 && ['ArrowRight', 'ArrowDown', ' '].includes(e.key)) {
        startTimer();
        timerStarted = true;
    }
});

// Initialize on load
window.addEventListener('load', init);

console.log('Full Screen Slides template loaded successfully!');
console.log('Press ? for keyboard shortcuts');
