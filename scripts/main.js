// This file contains the JavaScript code for the portfolio. 
// It includes functionality for interactive elements such as a mobile menu toggle and form validation.

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;

        if (!name || !email) {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});