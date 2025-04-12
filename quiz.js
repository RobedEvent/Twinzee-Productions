const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used for the main heading in HTML?",
    options: ["<h1>", "<head>", "<heading>"],
    answer: "<h1>"
  }
];
let currentQuestionIndex = 0;

function showQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = ""; // clear previous question

  const currentData = quizData[currentQuestionIndex];

  // Create question element
  const questionElement = document.createElement("h2");
  questionElement.textContent = currentData.question;
  quizContainer.appendChild(questionElement);

  // Create answer buttons
  currentData.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => {
      checkAnswer(answer);
    };
    quizContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = quizData[currentQuestionIndex].correct;
  if (selectedAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h2>Quiz Finished!</h2>";
  }
}

// Call the function to show the first question
showQuestion();
