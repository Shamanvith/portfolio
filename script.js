document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // This checks if the link is an internal page link (starts with '#')
        if (href.startsWith('#')) {
            // If it is, prevent the default jump and scroll smoothly
            e.preventDefault();
            const targetID = href.substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // If the href does not start with '#', like 'Resume.pdf', 
        // the script does nothing, and the browser performs the default action (opens the link).
    });
});