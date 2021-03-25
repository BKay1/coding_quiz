const goBackBtn = document.getElementById("go-back-btn");
goBackBtn.setAttribute;
const clearBtn = document.getElementById("clear-highscores-btn");

const goBack = () => {
  location.href = "/coding_quiz/index.html";
};

goBackBtn.addEventListener("click", goBack);

const clearHighScores = () => {
  localStorage.clear();
  onLoad;
};

const getFromLS = () => {
  const highScores = localStorage.getItem("highScores");
};
