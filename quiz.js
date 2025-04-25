const quizData = [
    {
        question: "How many views does our most viewed video have?",
        options: ["3.1k", "2.7k", "3.2k", "2.8k"],
        answer: "2.8k"
    },
    {
        question: "Why did I make this quiz?",
        options: ["Because I needed to add something to the nav bar", "Why not", "I was bored", "Other"],
        answer: "Because I needed to add something to the nav bar"
    },
    {
        question: "Do we have more than 100 subscribers?",
        options: ["Yes", "I don't know", "Sadly no", "Wait a sec I gotta watch the game"],
        answer: "Sadly no"
    },
    {
        question: "On September 25th, 2025, which video did we post?",
        options: ["Steve Speedrun 2", "Why should I know", "Steve Speedrun 1", "None of the above"],
        answer: "None of the above"
    },
    {
        question: "Which soccer player from Marseille did we mention in one of our videos?",
        options: ["Mason Greenwood", "Luis Henrique", "Pierre Emerick Aubameyang", "Dimitri Payet"],
        answer: "Luis Henrique"
    },
    {
        question: "What object is noticeable on our profile picture?",
        options: ["A flashlight", "A computer", "A camera", "The logo of a stop motion editing app"],
        answer: "A camera"
    }
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;

// Load a question
function loadQuiz() {
    quizContainer.innerHTML = "";
    resultsContainer.innerHTML = "";

    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];

        const questionEl = document.createElement("h2");
        questionEl.innerText = currentQuestion.question;
        quizContainer.appendChild(questionEl);

        currentQuestion.options.forEach(option => {
            const optionLabel = document.createElement("label");
            optionLabel.innerHTML = `
                <input type="radio" name="option" value="${option}">
                ${option}
            `;
            quizContainer.appendChild(optionLabel);
            quizContainer.appendChild(document.createElement("br"));
        });
    } else {
        quizContainer.innerHTML = `<h2>Quiz Finished! 🎉</h2>`;
        submitButton.style.display = "none";
    }
}

// Check selected answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        resultsContainer.innerText = "Please select an answer first!";
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption.value === currentQuestion.answer) {
        resultsContainer.innerText = "Correct ✅";
    } else {
        resultsContainer.innerText = `Wrong ❌. Correct answer: ${currentQuestion.answer}`;
    }

    currentQuestionIndex++;

    setTimeout(() => {
        loadQuiz();
    }, 1500); // Wait 1.5 seconds before loading next question
}

// Event listener for button
submitButton.addEventListener("click", checkAnswer);

// Start the quiz
loadQuiz();
