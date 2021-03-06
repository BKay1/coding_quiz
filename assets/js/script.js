//Quiz Questions

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. Strings", "2. Boolean", "3. Alerts", "4. Numbers"],
    correctAnswer: "3. Alerts",
  },

  {
    question: "The condition is an if/else statement is enclosed within_____.",
    choices: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parenthesis",
      "4. Square Brackets",
    ],
    correctAnswer: "3. Parenthesis",
  },

  {
    question: "Arrays in JavaScript can be used to store_____.",
    choices: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    correctAnswer: "4. All of the above",
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
    correctAnswer: "4. Console Log",
  },
  {
    question: "The first index of an array is ____.",
    choices: ["a. 0", "b. 1", "c. 10", "d. any"],
    correctAnswer: "a. 0",
  },
];

//Variables to be used
const startButtonElement = document.getElementById("start-btn");
const bodyElement = document.body;
const quizIntroElement = document.getElementById("quiz-intro");
const timerElement = document.getElementById("timer");
const questionsContainerDiv = document.createElement("div");
const quizContainer = document.getElementById("quiz-container");
let timerValue = 60;

let index = 0;

const createChoices = (choices) => {
  const parentDiv = document.createElement("div");

  const createChoiceAndAppend = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.setAttribute("class", "quiz-btn");
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

      quizContainer.removeChild(document.getElementById("questions-container"));
      renderQuestion();
    } else {
      alert("Incorrect - Try Again");
      timerValue -= 5;
    }
  }
};

//Construct the Quiz Container
const createQuestion = (question) => {
  const questionsContainer = document.createElement("div");
  questionsContainer.setAttribute("id", "questions-container");
  questionsContainer.setAttribute("class", "questions-container");
  questionsContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.question;

  const choices = createChoices(question.choices);

  questionsContainer.appendChild(h2);
  questionsContainer.appendChild(choices);
  quizContainer.append(questionsContainer);

  questionsContainer.addEventListener("click", verifyChoice);

  return questionsContainer;
};

const renderQuestion = () => {
  if (index < questions.length) {
    // create question container
    const questionsContainer = createQuestion(questions[index]);

    // append question container to the DOM
    quizContainer.appendChild(questionsContainer);
  } else {
  }
};

//construct form container
const formContainerDiv = () => {
  const formContainer = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "All Done!";

  const finalScoreDiv = document.createElement("div");
  finalScoreDiv.textContent = "Your final score is " + timerValue + ".";

  const enterInitialsDiv = document.createElement("label");
  enterInitialsDiv.textContent = "Enter your Initials: ";

  const inputInitialsDiv = document.createElement("input");
  inputInitialsDiv.setAttribute("type", "text");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submit-btn");
  submitButton.textContent = "Submit";

  formContainer.appendChild(h1);
  formContainer.appendChild(finalScoreDiv);
  formContainer.appendChild(enterInitialsDiv);
  formContainer.appendChild(inputInitialsDiv);
  formContainer.appendChild(submitButton);
  bodyElement.appendChild(formContainer);

  //Create saveScore function

  const saveScore = (initials, score) => {
    //Getting scores from local storage and parsing.
    const storedHighScores = localStorage.getItem("highScores");
    const parsedHighScores = JSON.parse(storedHighScores);
    //create new highScoresArray and spread in existing highScores.
    console.log(storedHighScores);
    const highScoresArray = [];
    if (parsedHighScores) {
      highScoresArray.push(...parsedHighScores);
    }
    // push new high score
    highScoresArray.push({ initials: initials, score: score });
    //stringifying new high scores
    const newHighScores = JSON.stringify(highScoresArray);
    //store new high scores array.
    localStorage.setItem("highScores", newHighScores);
  };

  submitButton.addEventListener(
    "click",
    //submit High scores to local storage
    function (event) {
      event.preventDefault();

      if (inputInitialsDiv.value === "") {
        alert("Please enter your initials!");
        return;
      }

      saveScore(inputInitialsDiv.value, timerValue);
      window.location = "highscores.html";
    }
  );
};

//Timer

const startTimer = () => {
  const timerTick = () => {
    timerElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue <= 0 || index === questions.length) {
      clearInterval(timer);

      // //construct formContainer
      const formContainer = formContainerDiv();

      quizContainer.removeChild(document.getElementById("questions-container"));

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

  startTimer();
};

//Event Listeners
startButtonElement.addEventListener("click", startQuiz);
