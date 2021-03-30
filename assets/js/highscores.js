//declare buttons
const goBackBtn = document.getElementById("go-back-btn");
const clearHighScoresBtn = document.getElementById("clear-highscores-btn");
const highScoresContainer = document.getElementById("highscores-container");

//to revert to start quiz on click
const goBack = () => {
  location.href = "/coding_quiz/index.html";
};

//clears highscores
const clearHighScores = () => {
  localStorage.clear();
  highScoresContainer.innerHTML = "";
};

//show high scores
function showHighScores() {
  const savedHighScores = localStorage.getItem("highScores");

  // check if there is any in local storage
  if (savedHighScores === null) {
    return;
  }
  console.log(savedHighScores);

  const storedHighScores = JSON.parse(savedHighScores);
  const highScoreList = highScoresContainer.appendChild(
    document.createElement("ul")
  );

  for (let i = 0; i < storedHighScores.length; i++) {
    const eachNewHighScores = document.createElement("li");
    eachNewHighScores.innerHTML =
      storedHighScores[i].initials + ": " + storedHighScores[i].score;
    highScoreList.appendChild(eachNewHighScores);
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
