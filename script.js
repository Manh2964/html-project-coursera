document.addEventListener('DOMContentLoaded', function() {
    // Event fade-in effect as the user scrolls
    const events = document.querySelectorAll('.event');
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        events.forEach(event => {
            if (event.offsetTop < scrollPosition) {
                event.style.opacity = 1;
                event.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Trigger the effect immediately when the page loads

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
