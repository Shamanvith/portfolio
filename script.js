// Smooth scroll to anchors (if not using native 'scroll-behavior')
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Placeholder for contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you shortly.');
  this.reset();
});
