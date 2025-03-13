const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.style.setProperty('--dark-bg', '#151922');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--secondary-bg', '#1e1e1e');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.style.setProperty('--dark-bg', '#f5f5f5');
        document.documentElement.style.setProperty('--text-color', '#151922');
        document.documentElement.style.setProperty('--secondary-bg', '#e0e0e0');
        themeToggle.textContent = '🌙';
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});