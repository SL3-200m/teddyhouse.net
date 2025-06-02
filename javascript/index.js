document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.nav-links .dropdown > a');
    dropdowns.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) { // Only for mobile
                event.preventDefault(); // Prevent navigation
                const parentDropdown = this.parentElement;
                parentDropdown.classList.toggle('open');
            }
        });
    });
});