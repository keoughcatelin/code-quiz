// Retrieve high scores from localStorage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Sort the high scores in descending order
highScores.sort((a, b) => b.score - a.score);

// Get the high scores list element
const highScoresList = document.getElementById("high-scores-list");

// Populate the high scores list
highScores.forEach((scoreData) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Initials: ${scoreData.initials} - Score: ${scoreData.score}`;
    highScoresList.appendChild(listItem);
});
