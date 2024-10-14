// script.js
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');

  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.innerText = 'Switch to Light Mode';
  } else {
    themeToggle.innerText = 'Switch to Dark Mode';
  }
}

// Initialize with light mode
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('light-mode');
});
