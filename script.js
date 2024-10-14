function toggleTheme() {
  const body = document.body;
  const themeText = document.getElementById('theme-text');

  // Toggle the dark theme class
  body.classList.toggle('dark-theme');

  // Change button text based on the theme
  if (body.classList.contains('dark-theme')) {
    themeText.textContent = 'Light Mode'; // Update text for light mode
    localStorage.setItem('theme', 'dark'); // Save dark theme in local storage
  } else {
    themeText.textContent = 'Dark Mode'; // Update text for dark mode
    localStorage.removeItem('theme'); // Remove theme from local storage
  }
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.getElementById('theme-text').textContent = 'Light Mode'; // Update text on load
  }
});
