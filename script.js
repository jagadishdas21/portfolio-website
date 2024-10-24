const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});
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


document.addEventListener('DOMContentLoaded', () => {
        console.log("Script loaded");

        const qaPairs = [
  { question: "Hey, Hey!, Hye, Hye!, Hi, Hi!, Hello, Hello!, Wassup, Waasup?, Sup, Sup?,Holla, Holla!, Heya", answer: "How can i help you?" },
  { question: "Who are you?, who is your boss?, What is your name?, Tell me about yourself?", answer: "I'm an AI assistant of Mr. Jagadish Das!" },
  { question: "Who is he?, Who is Mr. Jagadish Das?, Who is Jagadish Das?, Who is Jagadish?", answer: "He's my Boss and Creator!" },
  { question: "He is from?, Where is he from? Where he is from?, From where he is?, He is from where? Where i can find him?, He's belong to which city?, What is his hometown?", answer: "He is from Cuttack, Odisha!" },
  { question: "What he is doing?, What is he doing?, What he is doing now?, What is his occupation?, what is his qualification? Where he is studying?, Curently, he is where?, Curently, where he is?", answer: "He's is currently studying in NIT Rourkela!" },
  { question: "Can we connect?", answer: "Yes, of course!" },
  { question: "I want a meeting with him, How can we get connected?, How can I approach him?, How can I get help?", answer: "You can send us an Email!" },
  { question: "Tell me about your boss, Who is your boss?, Who created you?, Who built you?, Who made you?", answer: "Mr. Jagadish Das" },
  { question: "What does your boss do?, What's his work?, What does he do?, What’s his profession?, What is his job?", answer: "He is a data scientist working on healthcare research, focusing on AI." },
  { question: "Where does he study?, Where is he studying?, What’s his qualification?, What’s his education?, What degree is he pursuing?", answer: "He is a master's student at NIT Rourkela, studying Life Science." },
  { question: "What are his interests?, What's he passionate about?, What does he enjoy?, What's his field of interest?", answer: "He is passionate about the intersection of life science and AI." },
  { question: "Where is he from?, What's his hometown?, Where was he born?, Where does he live?, Where's he located?", answer: "He is from Cuttack, Odisha." },
  { question: "What projects is he working on?, What's his current project?, What’s he doing now?, What project is he busy with?", answer: "He is working on healthcare-related AI projects, improving diagnostics." },
  { question: "What type of AI does he work on?, What’s his expertise?, What is his specialty?, What area of AI does he focus on?", answer: "He specializes in deep learning, computer vision, and medical diagnostics." },
  { question: "Can I connect with him?, How can I reach him?, Can we talk?, Can I meet him?", answer: "You can contact him via email!" },
  { question: "Can I get help with projects?, Can I collaborate with him?, Does he work with others?, Can we work together?", answer: "Yes, he works on AI projects, especially in healthcare." },
  { question: "Does he mentor?, Can I get mentorship?, Does he guide students?, Is he a mentor?", answer: "Yes, he has mentored many students in AI and event management." },
  { question: "What's his area of study?, What's his major?, What is his specialization?, What field is he in?", answer: "He is specializing in life science with a focus on AI for healthcare." },
  { question: "What’s his goal?, What’s his ambition?, What is he working towards?, What’s his career aim?", answer: "His goal is to improve diagnostic accuracy using AI in healthcare." },
  { question: "What are his technical skills?, What tools does he use?, What technologies does he work with?", answer: "He uses Python, TensorFlow, Keras, deep learning, and computer vision." },
  { question: "Does he build AI models?, Does he work with machine learning?, Does he develop algorithms?", answer: "Yes, he develops AI models and algorithms for medical diagnostics." },
  { question: "What is his research about?, What does he research?, What is his focus area?, What’s his field of study?", answer: "He researches the integration of AI in medical diagnostics." },
  { question: "Does he have any achievements?, What has he accomplished?, What are his key achievements?", answer: "He has developed AI models for breast cancer prediction and brain tumor detection." },
  { question: "Where can I find more about him?, Is he on social media?, Does he have a portfolio website?", answer: "You can visit his portfolio website to learn more!" },
  { question: "Has he participated in hackathons?, Has he done any competitions?, Does he compete in contests?", answer: "Yes, he has participated in national-level hackathons and worked on healthcare projects." },
  { question: "Can he help with AI research?, Does he offer guidance in AI?, Can he help with AI-related queries?", answer: "Yes, he is knowledgeable in AI research, especially in healthcare applications." },
  { question: "What’s his role in projects?, Does he lead projects?, Is he a project manager?, Does he guide project teams?", answer: "Yes, he has led multiple AI healthcare projects and guided teams." },
  { question: "Is he a student?, What’s his academic status?, Is he still studying?, Is he a researcher?", answer: "Yes, he is a final-year master’s student at NIT Rourkela." },
  { question: "What kind of healthcare projects does he do?, Is he involved in healthcare research?, What does his healthcare work involve?", answer: "He focuses on using AI to improve diagnostic tools in healthcare." },
  { question: "Has he written any papers?, Has he published research?, Does he write academic papers?", answer: "Yes, he has worked on research papers related to AI in healthcare." },
  { question: "Can he help with healthcare research?, Does he collaborate on healthcare projects?, Is he interested in medical research?", answer: "Yes, he is actively involved in healthcare research using AI." },
  { question: "What coding languages does he know?, Does he code?, What programming languages does he use?", answer: "He is proficient in Python, and uses frameworks like TensorFlow and Keras." },
  { question: "Does he have any certifications?, Is he certified in AI?, What qualifications does he have?", answer: "He has experience and certifications in AI, deep learning, and healthcare research." },
  { question: "What is his latest project?, What’s his newest work?, What is he working on right now?", answer: "He is currently working on AI models for improving diagnostic accuracy in healthcare." },
  { question: "What’s his educational background?, Where did he study?, What’s his academic qualification?", answer: "He has a strong foundation in life sciences and AI from NIT Rourkela." },
  { question: "Is he involved in deep learning?, Does he work on neural networks?, What kind of AI models does he build?", answer: "Yes, he builds deep learning models, especially CNNs for healthcare diagnostics." },
  { question: "Does he focus on medical imaging?, Does he work on MRI scans?, What kind of images does he process?", answer: "He works with medical imaging, including MRI scans, to detect diseases like tumors." },
  { question: "What’s his specialty in AI?, Does he focus on any specific AI technique?, What’s his main AI focus?", answer: "His main focus is on deep learning and computer vision for medical diagnostics." },
  { question: "What tools does he use for AI?, Does he use TensorFlow?, What software does he use for AI?", answer: "He uses TensorFlow, Keras, NumPy, and other AI and machine learning tools." },
  { question: "Does he have a GitHub?, Can I see his code?, Where can I find his projects?", answer: "Yes, his projects are available on GitHub!" },
  { question: "Does he work with teams?, Does he collaborate with others?, Is he a team player?", answer: "Yes, he has led and collaborated with teams in multiple projects." },
  { question: "Can he provide AI consulting?, Does he offer AI advice?, Can I get AI-related help?", answer: "Yes, he can provide consulting and advice on AI-related healthcare projects." },
  { question: "What is his focus in healthcare?, Is he only focused on AI?, What’s his goal in healthcare?", answer: "His goal is to leverage AI to enhance diagnostics and improve patient outcomes." },
  { question: "Is he involved in research groups?, Does he collaborate on research?, Is he part of any research communities?", answer: "Yes, he collaborates on research within the AI and healthcare community." },
  { question: "What’s his experience with healthcare AI?, How long has he been working on healthcare AI?", answer: "He has several years of experience working on AI models for healthcare diagnostics." },
  { question: "Does he have any AI-based applications?, Has he built any AI tools?, What applications has he built?", answer: "Yes, he has built AI applications for detecting breast cancer and brain tumors." },
  { question: "What industries does he work with?, Does he only work in healthcare?, Does he explore other industries?", answer: "He primarily focuses on healthcare but is open to exploring AI in other fields." },
  { question: "Can I collaborate with him on AI projects?, Does he take on collaboration?, How can I work with him?", answer: "Yes, you can reach out to collaborate on AI projects, especially in healthcare." },
  { question: "Is he an AI engineer?, Is he a software developer?, What’s his role in AI development?", answer: "He is a data scientist and AI researcher with a focus on healthcare solutions." },
  { question: "Does he give talks or presentations?, Does he speak at conferences?, Can I attend his lectures?", answer: "He has given talks and presentations on AI in healthcare at various forums." },
  { question: "Can he mentor in AI?, Does he teach AI?, Does he offer AI workshops?", answer: "Yes, he mentors students and offers guidance in AI-related projects." },
  { question: "Has he won any awards?, What are his achievements?, Has he been recognized for his work?", answer: "He has received recognition for his contributions to AI in healthcare research." },
  { question: "What events has he organized?, Does he organize AI events?, Is he involved in event management?", answer: "He has organized national-level AI and dance events in the past." },
  { question: "What is his GitHub repository for AI?, Where can I see his AI projects?, Does he have a public repository?", answer: "Yes, his AI projects are publicly available on his GitHub repository." },
  { question: "Is he working on AI healthcare systems?, Does he build healthcare AI?, What AI tools does he develop?", answer: "Yes, he works on AI systems to improve healthcare diagnostics." },
  { question: "Does he have any patents?, Has he patented any of his AI work?, Does he have intellectual property?", answer: "Not yet, but he is working on innovative healthcare solutions using AI." },
  { question: "Can I get guidance on healthcare AI research?, Does he mentor AI healthcare students?", answer: "Yes, he offers guidance and mentorship in AI healthcare research." },
  { question: "What datasets does he use?, Does he work with medical data?, What kind of data does he process?", answer: "He works with medical datasets like MRI scans, and publicly available healthcare data." },
  { question: "Can I see his AI models?, Does he share his code?, Where are his AI models?", answer: "Yes, you can see his AI models on his GitHub or portfolio website." },
  { question: "Does he have any internships?, Is he interning somewhere?, Has he worked with companies?", answer: "He has experience collaborating with healthcare research labs and AI teams." },
  { question: "Does he take AI students?, Can I work with him?, Does he offer internships?", answer: "Yes, he mentors and collaborates with AI students interested in healthcare." },
  { question: "What’s his programming background?, What languages does he code in?, What’s his expertise in coding?", answer: "He has expertise in Python and uses TensorFlow, Keras, and Scikit-Learn for AI." },
  { question: "Can I work on AI healthcare projects with him?, Does he collaborate on healthcare projects?", answer: "Yes, he collaborates on healthcare AI projects and is always open to new ideas." },
  { question: "Has he developed any AI apps?, Does he build AI software?, What kind of AI applications does he work on?", answer: "He has developed AI applications, such as diagnostic tools for detecting diseases." },
  { question: "Is he involved in research papers?, Has he published any papers?, Where can I find his research?", answer: "Yes, he has worked on research papers in the field of AI healthcare." },
  { question: "What’s his academic background in AI?, Where did he study AI?, How did he learn AI?", answer: "He has a strong academic background in AI and life sciences from NIT Rourkela." },
  { question: "What conferences does he attend?, Does he go to AI conferences?, Where does he present his work?", answer: "He attends and presents at AI and healthcare conferences to share his research." },
  { question: "What’s his current AI research?, What’s his latest AI project?, What is he researching now?", answer: "He is currently researching how AI can improve diagnostic accuracy in healthcare." },
  { question: "Does he have any healthcare AI collaborations?, Is he part of healthcare research groups?", answer: "Yes, he collaborates with research teams focused on AI in healthcare." },
  { question: "Has he taught AI?, Does he teach others?, What teaching experience does he have?", answer: "Yes, he has taught and mentored students in AI and healthcare." },
  { question: "Tell me about your boss's personality., How is he as a person?, What is your boss like?, Describe his personality.", answer: "He’s down-to-earth, humble, and always ready to help others." },
  { question: "What are his strengths?, What is his greatest strength?, What does he excel at?, What are his best qualities?", answer: "His greatest strengths are his discipline, dedication to his work" },
  { question: "What are his weaknesses?, What is his biggest weakness?, Does he have any weak points?, Where could he improve?", answer: "He gets so involved in his projects that he can forget to take breaks." },
  { question: "What makes him special?, What sets him apart?, Why is he unique?, What’s different about him?", answer: "Jagadish’s ability to combine AI with healthcare, his tireless work ethic, and his loyalty to his work and his students make him truly special." },
  { question: "How does he treat others?, Is he polite?, Is he kind?, How does he interact with people?", answer: "He’s incredibly polite and humble. Despite his achievements, he remains down-to-earth and always treats others with respect and kindness." },
  { question: "What are his skills?, What does he specialize in?, What are his professional skills?, What are his best abilities?", answer: "He’s highly skilled in AI, deep learning, medical imaging, and programming with Python." },
  { question: "Is he a hard worker?, Is he dedicated?, How committed is he?, Does he work hard?", answer: "Absolutely! Jagadish is known for his unwavering dedication to his work. He’s a man of his word, always going above and beyond in everything he does." },
  { question: "What’s his leadership style?, How does he lead?, What’s his approach as a leader?, How is he as a leader?", answer: "He leads by example, with a focus on mentoring and nurturing talent." },
  { question: "Does he have any disciples?, Does he mentor people?, Who are his students?, Has he left a legacy?", answer: "He has mentored over 100 students in event management." },
  { question: "Is he passionate?, Does he love what he does?, Is he driven?, How passionate is he?", answer: "He’s incredibly passionate about AI and healthcare, constantly seeking to make a positive impact. His drive and enthusiasm are contagious." },
  { question: "What kind of projects is your boss working on?, What is he currently developing?, What types of projects does he work on?", answer: "He is currently focused on developing AI systems for healthcare" },
  { question: "What are his latest projects?, What’s his recent work?, Is he working on anything new?", answer: "His latest project involves using deep learning models to improve the accuracy of brain tumor detection through MRI scans." },
  { question: "Does he work on AI projects?, What AI projects is he involved in?, Is he building AI systems?", answer: "Yes, he specializes in AI projects, especially those that involve medical imaging and predictive models for healthcare." },
  { question: "What healthcare projects does he do?, Is he focused on healthcare?, What healthcare solutions is he building?", answer: "He is dedicated to building healthcare AI solutions" },
  { question: "Is he working on any research projects?, What research is he doing?, Is he involved in AI research?", answer: "Yes, he is actively involved in AI healthcare research" },
  { question: "What technical projects does he work on?, What kind of tech is he developing?, What technical skills is he applying?", answer: "His technical projects involve the application of deep learning, neural networks, and computer vision to solve medical problems." },
  { question: "What is his biggest project?, What major project is he working on?, What is his flagship project?", answer: "One of his major projects is the development of an AI chatbot for medical research assistance and healthcare support." },
  { question: "Does he work on web development?, Is he involved in building websites?, What kind of web projects does he do?", answer: "Yes, he has worked on several web development projects, you can check it in our website" },
];

        window.searchQuestion = function() {
            const input = document.getElementById("search-input").value.toLowerCase().trim();
            const chatBox = document.getElementById("chat-box");

            if (input === '') return; // Prevent empty submissions

            // Create a new div for the user input
            const userMessage = document.createElement('div');
            userMessage.classList.add('message', 'user-msg');  
            userMessage.innerHTML = `<p>${input}</p>`;
            chatBox.appendChild(userMessage);

            // Check for a match in qaPairs
            const match = qaPairs.find(pair => pair.question.toLowerCase().includes(input));
            console.log("User input:", input);
            console.log("Match found:", match);

            // Create a new div for the bot's response
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-msg');

            if (match) {
                botMessage.innerHTML = `<p>${match.answer}</p>`;
            } else {
                botMessage.innerHTML = `<p>Sorry, I can't tell you this.</p>`;
            }

            console.log("Bot message:", botMessage.innerHTML);

            // Append the bot's response to the chat
            chatBox.appendChild(botMessage);

            // Scroll the chatbox to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;

            // Clear input field after submission
            document.getElementById("search-input").value = '';

            // Reset the height of the input box
            document.getElementById("search-input").style.height = '40px';
        }

        window.adjustInputHeight = function() {
            const input = document.getElementById("search-input");
            input.style.height = '40px';  // Reset to default height
            input.style.height = input.scrollHeight + 'px';  // Adjust based on content
        }
    });
