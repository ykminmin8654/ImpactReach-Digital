document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('main > section');
    const footer = document.querySelector('footer');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Mobile menu toggle
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    // Show only clicked section
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            sections.forEach(sec => sec.classList.remove('active'));

            // Show clicked section
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Show footer when any section is open
            footer.classList.add('active');

            // Close mobile menu after click
            navList.classList.remove('active');
        });
    });

    // Form submit
    const form = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            formStatus.textContent = "Message sent successfully!";
            form.reset();
            setTimeout(() => formStatus.textContent = '', 4000);
        });
    }
});