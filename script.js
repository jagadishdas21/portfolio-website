const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});
    document.getElementById('sendEmailLink').addEventListener('click', function() {
        const message = document.getElementById('message').value;
        const mailtoLink = `mailto:jagadishdas.nitrkl@gmail.com?subject=Inquiry&body=${encodeURIComponent(message)}`;
        this.href = mailtoLink;
});
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
