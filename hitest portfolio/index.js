
// Handle Form Submission
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('status-modal');

contactForm.onsubmit = async (e) => {
    e.preventDefault();
    
    // To make this functional, go to formspree.io, create a form, 
    // and replace "YOUR_ID_HERE" in the action attribute.
    // For this demo, we'll simulate the success response.
    
    const button = contactForm.querySelector('button');
    const originalContent = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
    button.disabled = true;

    // Simple timeout to simulate network request
    setTimeout(() => {
        modal.style.display = 'flex';
        contactForm.reset();
        button.innerHTML = originalContent;
        button.disabled = false;
    }, 1500);
};

function closeModal() {
    modal.style.display = 'none';
}

// Add smooth reveals for scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
        }
    });
});
