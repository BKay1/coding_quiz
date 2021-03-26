const goBackBtn = document.getElementById("go-back-btn");
goBackBtn.setAttribute;
const clearBtn = document.getElementById("clear-highscores-btn");

const goBack = () => {
  location.href = "/coding_quiz/index.html";
};

const clearHighScores = () => {
  localStorage.clear();
  onLoad;
};

const getFromLS = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};

const renderHighScoresTable = (highscores) => {
  if (highScores.Length === 0) {
    console.log("empty");
  } else {
    console.log("create table");
  }
};

const onLoad = () => {
  const highScores = getFromLS();
  renderHighScoresTable(highScores);
};

goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clear);
window.addEventListener("load", onLoad);
