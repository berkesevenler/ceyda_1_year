// Create floating hearts and rare 'buga buga' and 'Ceyda❤️Berke'
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartCount = 20;
    const bugaCount = 3; // much more rare
    const cbCount = 7; // more often now

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // Random position
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        // Random size
        const size = Math.random() * 15 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        // Random animation delay
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        heartsContainer.appendChild(heart);
    }
    // Add rare floating 'buga buga'
    for (let i = 0; i < bugaCount; i++) {
        const buga = document.createElement('div');
        buga.className = 'buga-buga';
        buga.textContent = 'buga buga';
        buga.style.left = Math.random() * 100 + 'vw';
        buga.style.top = Math.random() * 100 + 'vh';
        buga.style.animationDelay = (Math.random() * 8) + 's';
        buga.style.fontSize = (1.7 + Math.random() * 1.2) + 'rem';
        heartsContainer.appendChild(buga);
    }
    // Add more frequent floating 'Ceyda❤️Berke'
    for (let i = 0; i < cbCount; i++) {
        const cb = document.createElement('div');
        cb.className = 'ceyda-berke';
        cb.textContent = 'Ceyda❤️Berke';
        cb.style.left = Math.random() * 100 + 'vw';
        cb.style.top = Math.random() * 100 + 'vh';
        cb.style.animationDelay = (Math.random() * 10) + 's';
        cb.style.fontSize = (1.7 + Math.random() * 1.3) + 'rem';
        heartsContainer.appendChild(cb);
    }
}

// Show answers with animation
function showAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    const answer = answers[index];
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
        answer.style.animation = 'fadeIn 0.5s ease';
    }
}

// Add click effect for hearts
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.animation = 'float 2s ease-out forwards';
    
    document.querySelector('.hearts-container').appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
});

// Handle intro animation sequence
function handleIntroAnimation() {
    const introOverlay = document.querySelector('.intro-overlay');
    const gamePrompt = document.querySelector('.game-prompt-overlay');
    const step1 = document.querySelector('.game-prompt-content.step1');
    const step2 = document.querySelector('.game-prompt-content.step2');
    // Wait for 5 seconds
    setTimeout(() => {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
            gamePrompt.classList.remove('hidden');
            step1.classList.remove('hidden');
            step2.classList.add('hidden');
        }, 1000);
    }, 5000);
}

function showBurnPrompt() {
    const step1 = document.querySelector('.game-prompt-content.step1');
    const step2 = document.querySelector('.game-prompt-content.step2');
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
}

function moveNoButton(event) {
    const btn = event.target;
    btn.style.position = 'fixed';
    const btnRect = btn.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    btn.style.left = randX + 'px';
    btn.style.top = randY + 'px';
}

function startGames() {
    const gamePrompt = document.querySelector('.game-prompt-overlay');
    const content = document.querySelector('.content');
    gamePrompt.classList.add('hidden');
    setTimeout(() => {
        gamePrompt.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('show');
    }, 700);
}

function moveSkipButton(event) {
    const btn = event.target;
    // Use position: fixed to move across the whole viewport
    btn.style.position = 'fixed';
    const btnRect = btn.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    btn.style.left = randX + 'px';
    btn.style.top = randY + 'px';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    handleIntroAnimation();
    
    // Add some sparkle to the title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        title.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    showQuizQuestion();
    // Add hover event for skip button
    const skipBtn = document.querySelector('.game-skip-btn');
    if (skipBtn) {
        skipBtn.addEventListener('mouseenter', moveSkipButton);
    }

    // Add hover event for no button (Hayır)
    const observer = new MutationObserver(() => {
        const noBtn = document.querySelector('.game-no-btn');
        if (noBtn && !noBtn._hasHover) {
            noBtn.addEventListener('mouseenter', moveNoButton);
            noBtn._hasHover = true;
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

// Add confetti effect when clicking the title
document.querySelector('.title').addEventListener('click', () => {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animation = 'float 2s ease-out forwards';
        
        document.querySelector('.hearts-container').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});

// Compliment Wheel Logic
const compliments = [
    "You light up my world like nobody else! ✨",
    "Your smile is my favorite thing in the universe! 😊",
    "Every day with you is my new best day. 💖",
    "You make my heart do a happy dance! 💃🕺",
    "You're the peanut butter to my jelly! 🥜🍓",
    "I love you more than all the stars in the sky! ⭐️",
    "You are my sunshine on a cloudy day! ☀️",
    "Being with you is my favorite adventure! 🌈",
    "You make even ordinary moments magical! 🪄",
    "I'm so lucky to call you mine! 🍀"
];

function spinWheel() {
    const btn = document.querySelector('.spin-btn');
    const result = document.querySelector('.compliment-result');
    // Remove previous animation
    btn.classList.remove('spinning');
    result.classList.remove('show');
    // Force reflow for animation restart
    void btn.offsetWidth;
    btn.classList.add('spinning');
    // Pick a random compliment after spin
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        result.textContent = compliments[randomIndex];
        result.classList.add('show');
        btn.classList.remove('spinning');
    }, 1000);
}

// --- Cute Couple Quiz Logic ---
const quizQuestions = [
    {
        question: "Where did we go on our first date?",
        options: ["A cozy cafe ☕", "The movies 🎬 ;)", "A park walk 🌳", "Ice cream shop 🍦"],
        answer: 0
    },
    {
        question: "What's my favorite thing about you?",
        options: ["Your smile 😁", "Your hugs 🤗", "Your laugh 😂", "Everything! 💖"],
        answer: 3
    },
    {
        question: "Which song reminds me of us?",
        options: ["Our silly dance song 💃", "A romantic ballad 🎶", "A road trip jam 🚗", "All of them! 🎵"],
        answer: 3
    },
    {
        question: "What's our favorite thing to do together?",
        options: ["Watch movies 🍿", "Go on adventures 🌍", "Eat yummy food 🍕", "Cuddle! 🥰"],
        answer: 3
    },
    {
        question: "How much do I love you?",
        options: ["To the moon 🌙", "To infinity ♾️", "More than chocolate 🍫", "All of the above!"],
        answer: 3
    }
];
let quizIndex = 0;
let quizScore = 0;
let quizSelected = [];

function showQuizQuestion() {
    quizSelected = [];
    const q = quizQuestions[quizIndex];
    document.querySelector('.quiz-question').textContent = q.question;
    const optionsDiv = document.querySelector('.quiz-options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.textContent = opt;
        btn.setAttribute('data-index', i);
        btn.disabled = false;
        optionsDiv.appendChild(btn);
    });
    // Attach a single event listener to the parent
    optionsDiv.onclick = function(e) {
        if (e.target && e.target.classList.contains('quiz-option-btn')) {
            const idx = parseInt(e.target.getAttribute('data-index'));
            toggleQuizOption(idx);
        }
    };
    document.querySelector('.quiz-next-btn').classList.remove('show');
    document.querySelector('.quiz-result').classList.remove('show');
    document.querySelector('.quiz-result').textContent = '';
}

function toggleQuizOption(selected) {
    const idx = quizSelected.indexOf(selected);
    if (idx === -1) {
        quizSelected.push(selected);
    } else {
        quizSelected.splice(idx, 1);
    }
    // Apply highlight to all selected options
    const btns = document.querySelectorAll('.quiz-option-btn');
    btns.forEach((btn, i) => {
        btn.classList.remove('quiz-correct', 'quiz-wrong', 'quiz-selected');
        if (quizSelected.includes(i)) {
            btn.classList.add('quiz-selected');
        }
    });
    document.querySelector('.quiz-next-btn').classList.toggle('show', quizSelected.length > 0);
}

function nextQuizQuestion() {
    if (quizSelected.length === 0) return; // Don't advance if nothing selected
    const q = quizQuestions[quizIndex];
    const btns = document.querySelectorAll('.quiz-option-btn');
    // Remove .quiz-selected and show correct/wrong
    btns.forEach((btn, i) => {
        btn.classList.remove('quiz-selected');
        if (quizSelected.includes(i)) {
            btn.classList.add(i === q.answer ? 'quiz-correct' : 'quiz-wrong');
        }
        btn.disabled = true;
    });
    if (quizSelected.includes(q.answer)) quizScore++;
    quizIndex++;
    setTimeout(() => {
        if (quizIndex < quizQuestions.length) {
            showQuizQuestion();
        } else {
            showQuizResult();
        }
    }, 700); // Slightly longer for feedback
}

function showQuizResult() {
    const resultDiv = document.querySelector('.quiz-result');
    let msg = '';
    if (quizScore === 5) msg = "Wow! You know us so well! We're soulmates! 💞";
    else msg = "No matter the score, I love you the most ❤️❤️❤️.";
    resultDiv.textContent = msg;
    resultDiv.classList.add('show');
    document.querySelector('.quiz-question').textContent = '';
    document.querySelector('.quiz-options').innerHTML = '';
    document.querySelector('.quiz-next-btn').classList.remove('show');
    // Reset for replay
    quizIndex = 0;
    quizScore = 0;
    setTimeout(showQuizQuestion, 5000);
}

// --- Love Fortune Cookie Logic ---
const fortunes = [
    "A big surprise is coming your way (hint: it's me with hugs)! 🤗",
    "You make every day brighter! ☀️",
    "Our love story is my favorite! 📖💖",
    "You are my lucky charm! 🍀",
    "A kiss from me is on its way! 😘",
    "You are the sweetest part of my life! 🍬",
    "We're going to make so many more memories! 📸",
    "You are my forever and always! 💝",
    "You're cuter than a basket of puppies! 🐶",
    "I love you more every single day! 🌹"
];

function openFortune() {
    const btn = document.querySelector('.fortune-btn');
    const result = document.querySelector('.fortune-result');
    btn.classList.remove('cracking');
    result.classList.remove('show');
    void btn.offsetWidth;
    btn.classList.add('cracking');
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        result.textContent = fortunes[randomIndex];
        result.classList.add('show');
        btn.classList.remove('cracking');
    }, 700);
}

function burnTheWorld() {
    const gamePrompt = document.querySelector('.game-prompt-overlay');
    const videoOverlay = document.querySelector('.video-overlay');
    const burnVideo = document.getElementById('burnVideo');
    const content = document.querySelector('.content');
    const justKidding = document.querySelector('.just-kidding-overlay');
    // Hide prompt and content immediately
    gamePrompt.classList.add('hidden');
    content.classList.add('hidden');
    videoOverlay.style.display = 'flex';
    videoOverlay.classList.remove('hidden');
    document.body.classList.add('burning');
    // Play video after a short delay to ensure overlay is visible
    setTimeout(() => {
        gamePrompt.style.display = 'none';
        burnVideo.currentTime = 0;
        burnVideo.play();
        // After 5 seconds, hide video and show 'just kidding', then games
        setTimeout(() => {
            videoOverlay.classList.add('hidden');
            burnVideo.pause();
            document.body.classList.remove('burning');
            justKidding.classList.remove('hidden');
            setTimeout(() => {
                justKidding.classList.add('hidden');
                setTimeout(() => {
                    videoOverlay.style.display = 'none';
                    content.classList.remove('hidden');
                    content.classList.add('show');
                }, 700);
            }, 2000);
        }, 5000);
    }, 50);
} 