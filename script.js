document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to event details when clicking a link
    const eventLinks = document.querySelectorAll('.event a');
    eventLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});
