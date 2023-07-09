// Question section
const quizQuestions = [
    {
    question: "Question 1: What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: 0,
    },
    {
    question: "Question 2: Which of the following is NOT a valid JavaScript data type?",
    options: ["String", "Boolean", "Number", "Float"],
    answer: 3,
    },
    {
    question: "Question 3: What is the correct way to write an array in JavaScript?",
    options: ["var colors = 'red', 'blue', 'green';", "var colors = ['red', 'blue', 'green'];", "var colors = 'red'; 'blue'; 'green';", "var colors = { 'red', 'blue', 'green' };"],
    answer: 1,
    },
    {
    question: "Question 4: What does HTML stand for?",
    options: ["Hyperlink Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 1,
    },
    {
    question: "Question 5: What does the 'console.log()' function do in JavaScript?",
    options: ["Displays a message in the console", "Performs mathematical calculations", "Creates an alert box", "Changes the HTML content of an element"],
    answer: 0,
    },
];


// Variables
let currentQuestion = 0;
let time = 60;
let timerInterval;
let highScore = 0;

// Elements
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const initialsInput = document.getElementById("initials");
const timer = document.getElementById("timer");

// Start quiz
startButton.addEventListener("click", startQuiz);

// Make start button work
function startQuiz() {
    startButton.style.display = "none";
    initialsInput.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    displayQuestion();
}

// Make questions work
function displayQuestion() {
    const currentQuizData = quizQuestions[currentQuestion];
    questionElement.innerText = `Question ${currentQuestion + 1}: ${currentQuizData.question}`;
    optionsElement.innerHTML = "";

    for (let i = 0; i < currentQuizData.options.length; i++) {
        const item = document.createElement("li");
        const option = document.createElement("button");
        option.textContent = currentQuizData.options[i];
        option.dataset.index = i;
        option.addEventListener("click", () => checkAnswer(parseInt(option.dataset.index)));
        item.appendChild(option);
        optionsElement.appendChild(option);
    }
}

// Check answers
function checkAnswer(answerIndex) {
    const currentQuizData = quizQuestions[currentQuestion];

    if (answerIndex === currentQuizData.answer) {
        // Right answer
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            endQuiz();
        }
    } else {
        // Wrong answer
        time -= 10; // Takes away 10 seconds from quiz timer if they get the question wrong
    }
    saveScore();
}

// Update timer
function updateTimer() {
    time--;
    if (time <= 0) {
        endQuiz();
    }
    timer.textContent = time;
}

// End quiz
function endQuiz() {
    clearInterval(timerInterval);
    timer.style.display = "none";
    questionElement.innerText = "Completed!";
    optionsElement.innerHTML = "";
    initialsInput.style.display = "block";
    submitButton.style.display = "block";
}

// Save score and initials
submitButton.addEventListener("click", saveScore);

function saveScore() {
    const initials = initialsInput.value;
    const scoreData = { initials: initials, score: time };
    highScores.push(scoreData);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "highscores.html";
}


