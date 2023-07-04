// Question section
const quizQuestions = [
    {
        question: "Question 1",
        options: ["A", "B", "C", "D"],
        answer: 0
    },
    {
        question: "Question 2",
        options: ["A", "B", "C", "D"],
        answer: 3
    },
    {
        question: "Question 3",
        options: ["A", "B", "C", "D"],
        answer: 1
    },
    {
        question: "Question 4",
        options: ["A", "B", "C", "D"],
        answer: 0
    },
    {
        question: "Question 5",
        options: ["A", "B", "C", "D"],
        answer: 2
    },
];

// Variables
let currentQuestion = 0;
let time = 60;
let timerInterval;

// Elements
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const initialsInput = document.getElementById("initials");

// Start quiz
startButton.addEventListener("click", startQuiz);

// Make start button work
function startQuiz() {
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    displayQuestion();
}

// Make questions work
function displayQuestion() {
    const currentQuizData = quizQuestions[currentQuestion];
    questionElement.innerText = `Question ${currentQuestion + 1}: ${currentQuizData.question}`;
    optionsElement.innerHTML = "";

    for (let i = 0; i < currentQuizData.options.length; i++) {
        const option = document.createElement("li");
        option.textContent = currentQuizData.options[i];
        option.dataset.index = i;
        option.addEventListener("click", () => checkAnswer(parseInt(option.dataset.index)));
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
}

// End quiz
function endQuiz() {
    clearInterval(timerInterval);
    questionElement.innerText = "Completed!";
    optionsElement.innerHTML = "";
    initialsInput.style.display = "block";
    submitButton.style.display = "block";
}

// Save score and initials
submitButton.addEventListener("click", saveScore);

function saveScore() {
    const initials = initialsInput.value;
    // Save the initials and score to a data structure
    console.log("Initials: ", initials);
    console.log("Score: ", time);
}