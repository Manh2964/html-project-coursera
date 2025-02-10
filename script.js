// Scroll-to-Top Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// AOS (Animate On Scroll) Initialization
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1200 });
});
