//Footer 
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
