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

console.log("Script loaded");
    
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

   
    const data = {
        "who are you": "I am Jagadish Das, a data scientist focused on healthcare AI.",
        "what are your passions": "I am passionate about integrating AI into healthcare to improve diagnostics.",
        "what are your goals": "My goal is to contribute to AI-driven healthcare research and improve diagnostic accuracy.",
        "what's your education": "I am in my final year of a master's program at NIT Rourkela, studying Life Science."
    };

    
    searchButton.addEventListener('click', () => {
        console.log("Search button clicked");
        
        const query = searchInput.value.toLowerCase().trim();
        console.log("Query:", query);
        displayResults(query);
    });

    
    function displayResults(query) {
        searchResults.innerHTML = '';
        let found = false;

        for (const key in data) {
            if (key.includes(query)) {
                const resultDiv = document.createElement('div');
                resultDiv.textContent = data[key];
                searchResults.appendChild(resultDiv);
                found = true;
            }
        }

        if (!found) {
            const noResultDiv = document.createElement('div');
            noResultDiv.textContent = 'No results found for your query.';
            searchResults.appendChild(noResultDiv);
        }

        searchResults.style.display = searchResults.innerHTML ? 'block' : 'none';
    }
