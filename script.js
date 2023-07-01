//question section :D
const quizQuestions = [
    {
        question: "Question 1",
        options: ["A","B","C","D"],
        answer: 0
    },
    {
        question: "Question 2",
        options: ["A","B","C","D"],
        answer: 3
    },
    {
        question: "Question 3",
        options: ["A","B","C","D"],
        answer: 1
    },
    {
        question: "Question 4",
        options: ["A","B","C","D"],
        answer: 0
    },
    {
        question: "Question 5",
        options: ["A","B","C","D"],
        answer: 2
    },
];

//variables
let currentQuestion = 0;
let time = 60;
let timerInterval;

//elements
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const initialsInput = document.getElementById("initials");

//start quiz
startButton.addEventListener("click", startQuiz);

//make start button work
function startQuiz() {
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    displayQuestion
}

//make questions work
function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
}