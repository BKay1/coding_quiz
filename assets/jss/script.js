//Quiz Questions

const quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["1. Strings", "2. Boolean", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },

  {
    question: "The condition is an if/else statement is enclosed within_____.",
    options: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    answer: "3. Parenthesis",
  },

  {
    question: "Arrays in JavaScript can be used to store_____.",
    options: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    answer: "4. All of the above",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console Log",
    ],
    answer: "4. Console Log",
  },
  {
    question: "The first index of an array is ____.",
    optiona: ["a. 0", "b. 1", "c. 10", "d. any"],
    answer: "a. 0",
  },
];

//Variables to be used
const startButtonElement = document.getElementById("start-btn");
const bodyElement = document.body;
const quizIntroElement = document.getElementById("quiz-intro");
const timerElement = document.getElementById("timer");

//Construct the Quiz Container
const constructQuestionsContainer = () => {
  const questionsContainerDiv = document.createElement("div");
  questionsContainerDiv.setAttribute("class", "questions-container");
  bodyElement.appendChild(questionsContainerDiv);

  const h2 = document.createElement("h2");
  h2.textContent = "Commonly used data types DO NOT include:";
  questionsContainerDiv.appendChild(h2);

  const quizBtnA = document.createElement("buttonA");
  quizBtnA.setAttribute("class", "quiz-btn");
  questionsContainerDiv.appendChild(quizBtnA);

  const quizBtnB = document.createElement("buttonB");
  quizBtnB.setAttribute("class", "quiz-btn");
  questionsContainerDiv.appendChild(quizBtnB);

  const quizBtnC = document.createElement("buttonC");
  quizBtnC.setAttribute("class", "quiz-btn");
  questionsContainerDiv.appendChild(quizBtnC);

  const quizBtnD = document.createElement("buttonD");
  quizBtnD.setAttribute("class", "quiz-btn");
  questionsContainerDiv.appendChild(quizBtnD);

  //need to add correct incorrect box

  return questionsContainerDiv;
};

//Timer

//Removes first page upon start of quiz
const removeStartQuiz = () => {
  quizIntroElement.remove();
  return;
};

const startGame = () => {
  const remove = removeStartQuiz();
  const questionsDivElement = constructQuestionsContainer();
  document.body.appendChild(questionsDivElement);
};

//Event Listeners
startButtonElement.addEventListener("click", startGame);
