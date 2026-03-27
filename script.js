// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.textContent = "Message sent successfully! We'll contact you soon.";
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = "";
            }, 5000);
        });
    }
});