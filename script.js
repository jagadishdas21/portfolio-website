function toggleTheme() {
  const body = document.body;
  const themeText = document.getElementById('theme-text');

  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    themeText.innerText = 'Light Mode';
  } else {
    themeText.innerText = 'Dark Mode';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('light-mode');
});
