//Quiz Questions

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. Strings", "2. Boolean", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },

  {
    question: "The condition is an if/else statement is enclosed within_____.",
    choices: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    answer: "3. Parenthesis",
  },

  {
    question: "Arrays in JavaScript can be used to store_____.",
    choices: [
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
    choices: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console Log",
    ],
    answer: "4. Console Log",
  },
  {
    question: "The first index of an array is ____.",
    choices: ["a. 0", "b. 1", "c. 10", "d. any"],
    answer: "a. 0",
  },
];

//Variables to be used
const startButtonElement = document.getElementById("start-btn");
const bodyElement = document.body;
const quizIntroElement = document.getElementById("quiz-intro");
const timerElement = document.getElementById("timer");
const questionsContainerDiv = document.createElement("div");
const quizContainer = document.getElementById("quiz-container");
let timerValue = 10;
const formContainerElement = document.getElementById("form-container");

let index = 0;

const createChoices = (choices) => {
  const parentDiv = document.createElement("div");

  const createChoiceAndAppend = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    div.appendChild(button);

    parentDiv.appendChild(div);
  };

  choices.forEach(createChoiceAndAppend);

  return parentDiv;
};

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      quizContainer.removeChild(document.getElementById("question"));
      renderQuestion();
    } else {
      alert("BOO");
    }
  }
};

//Construct the Quiz Container
const createQuestion = (question) => {
  const questionsContainerDiv = document.createElement("div");
  questionsContainerDiv.setAttribute("id", "questions-container");
  questionsContainerDiv.setAttribute("class", "questions-container");
  questionsContainerDiv.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  questionsContainerDiv.append(h2, choices);

  questionsContainerDiv.addEventListener("click", verifyChoice);

  return questionsContainerDiv;
};

const renderQuestion = () => {
  if (index < questions.length) {
    // create question container
    const questionsContainer = createQuestion(questions[index]);

    // append question container to the DOM
    quizContainer.appendChild(questionsContainerDiv);
  } else {
    alert("DONE");
  }
};

// const QuestionsContainer = () => {
//   const questionsContainerDiv = document.createElement("div");
//   questionsContainerDiv.setAttribute("class", "questions-container");
//   bodyElement.appendChild(questionsContainerDiv);

//   const h2 = document.createElement("h2");
//   h2.textContent = "Commonly used data types DO NOT include:";
//   questionsContainerDiv.appendChild(h2);

//   //Add id's to each button and text (option A, 1 etc)

//   const quizBtn1 = document.createElement("button");
//   quizBtn1.setAttribute("class", "quiz-btn");
//   questionsContainerDiv.appendChild(quizBtn1);

//   const quizBtn2 = document.createElement("button");
//   quizBtn2.setAttribute("class", "quiz-btn");
//   questionsContainerDiv.appendChild(quizBtn2);

//   const quizBtn3 = document.createElement("button");
//   quizBtn3.setAttribute("class", "quiz-btn");
//   questionsContainerDiv.appendChild(quizBtn3);

//   const quizBtn4 = document.createElement("button");
//   quizBtn4.setAttribute("class", "quiz-btn");
//   questionsContainerDiv.appendChild(quizBtn4);

//need to add correct incorrect box

//   return questionsContainerDiv;
// };

//Timer

const startTimer = () => {
  const timerTick = () => {
    timerElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);

      //construct formContainer
      const formContainerElement = formContainer();

      //remove questionsContainers
      const questionsContainer = document.getElementById("QuestionsContainer");
      bodyElement.removeChild(questionsContainer);

      //append formContainer to body
      bodyElement.appendChild(formContainer);
    }
  };

  const timer = setInterval(timerTick, 1000);
};

// //Removes start quiz
const startQuiz = () => {
  quizIntroElement.remove();

  renderQuestion();
};

//Event Listeners
startButtonElement.addEventListener("click", startQuiz);
startButtonElement.addEventListener("click", startTimer);
