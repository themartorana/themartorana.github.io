document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer > h6.copyright');
    copyrightElement.textContent = `© ${currentYear} Dave Martorana. All Rights Reserved`;
});