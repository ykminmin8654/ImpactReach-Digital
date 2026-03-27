document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('main > section');
    const footer = document.querySelector('footer');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(sec => sec.classList.remove('active'));

            if (targetSection) {
                targetSection.classList.add('active');
            }

            footer.classList.add('active');

            navList.classList.remove('active');
        });
    });

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