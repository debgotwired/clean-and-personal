// Resume Template - Minimal JS
// Print functionality
document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        window.print();
    }
});

// Add print button dynamically (optional)
const addPrintButton = false;
if (addPrintButton) {
    const btn = document.createElement('button');
    btn.textContent = '🖨️ Print';
    btn.style.cssText = 'position:fixed;top:1rem;right:1rem;padding:0.5rem 1rem;background:#2563eb;color:white;border:none;border-radius:6px;cursor:pointer;';
    btn.onclick = () => window.print();
    document.body.appendChild(btn);
}
