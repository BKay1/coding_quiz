//declare buttons
const goBackBtn = document.getElementById("go-back-btn");
const clearHighScoresBtn = document.getElementById("clear-highscores-btn");

//to revert to start quiz on click
const goBack = () => {
  location.href = "/coding_quiz/index.html";
};

//clears highscores
const clearHighScores = () => {
  localStorage.clear();
  onLoad;
};

//show high scores
const i = 0;
function showHighScores() {
  const savedHighScores = localStorage.getItem("highScores");

  // check if there is any in local storage
  if (savedHighScores === null) {
    return;
  }
  console.log(savedHighScores);

  const storedHighScores = JSON.parse(savedHighScores);

  for (; i < storedHighScores.length; i++) {
    const highScoresContainer = document.querySelector("highscores-container");
    const eachNewHighScores = document.createElement("p");
    highScoresContainer.innerHTML =
      eachNewHighScores[i].initials + ": " + storedHighScores[i].score;
    highScoresContainer.appendChild(eachNewHighScores);
  }
}

//on load show highscores
const onLoad = () => {
  const highScores = showHighScores();
  showHighScores(highScores);
};

//event listeners
goBackBtn.addEventListener("click", goBack);
clearHighScoresBtn.addEventListener("click", clearHighScores);
window.addEventListener("load", onLoad);
