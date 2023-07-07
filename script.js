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
    displayHighScore();
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
    timer.style.display = 'none';
    questionElement.innerText = "Completed!";
    optionsElement.innerHTML = "";
    initialsInput.style.display = "block";
    submitButton.style.display = "block";
    localStorage.setItem("highScore", highScore.toString());

    // Attach event listener to submit button
    submitButton.addEventListener("click", saveScore);
}

//displays high score
function displayHighScore() {
    // Retrieve the high score from storage (e.g., localStorage) if available
    const storedHighScore = localStorage.getItem("highScore");
    if (storedHighScore) {
        highScore = parseInt(storedHighScore);
    }

    // Display the high score on the page
    const highScoreElement = document.getElementById("high-score");
    highScoreElement.textContent = highScore.toString();
}

// Save score and initials
submitButton.addEventListener("click", saveScore);

function saveScore() {
    const initials = initialsInput.value;
    // Save the initials and score to a data structure
    console.log("Initials: ", initials);
    console.log("Score: ", time);

    if (time > highScore) {
        highScore = time;
        console.log("New High Score: ", highScore);
    }
}
