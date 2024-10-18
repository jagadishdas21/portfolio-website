// Wait for the DOM to load
    document.addEventListener('DOMContentLoaded', () => {
        // Dark Mode Toggle Button Logic
        const modeToggle = document.getElementById('modeToggle');
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                modeToggle.textContent = 'Light Mode';
            } else {
                modeToggle.textContent = 'Dark Mode';
            }
        });

        // Dark Mode Toggle using Checkbox Switch (if used)
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        if (toggleSwitch) {
            toggleSwitch.addEventListener('change', () => {
                document.body.classList.toggle('dark-mode');
                modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
                toggleSwitch.checked = document.body.classList.contains('dark-mode');
            });
        }
    });

    // Email Link Handler
    function handleEmailLink() {
        // Detect if the user is on a mobile device
        if (/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
            // Mobile device - use mailto link
            window.location.href = "mailto:jagadishdas.nitrkl@gmail.com?subject=Inquiry&body=Hello Jagadish, I would like to connect with you regarding...";
        } else {
            // Desktop device - open Gmail in a new tab
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jagadishdas.nitrkl@gmail.com&su=Inquiry&body=Hello Jagadish, I would like to connect with you regarding...', '_blank');
        }
    }
