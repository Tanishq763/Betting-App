/***********************
 * QUESTIONS
 ***********************/
const allQuestions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: 1
    },
    {
        question: "Which language runs in the browser?",
        options: ["C++", "Java", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "2 + 2 * 2 = ?",
        options: ["6", "8", "4", "10"],
        correct: 0
    }
    
];

/***********************
 * GLOBALS
 ***********************/
let questions = [];
let currentIndex = 0;
let timer = null;
let timeLeft = 10;
let timePerQuestion = 10;

let teamAScore = 0;
let teamBScore = 0;

let teamAAnswer = null;
let teamBAnswer = null;
let timerStarted = false;

/***********************
 * DOM
 ***********************/
const settingsDiv = document.getElementById("settings");
const quizDiv = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");

const teamAScoreEl = document.getElementById("teamAScore");
const teamBScoreEl = document.getElementById("teamBScore");

const betAEl = document.getElementById("betA");
const betBEl = document.getElementById("betB");

/***********************
 * START QUIZ
 ***********************/
function startQuiz() {
    timePerQuestion = parseInt(document.getElementById("timeInput").value);
    const count = parseInt(document.getElementById("countInput").value);

    questions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

    teamAScore = 0;
    teamBScore = 0;
    currentIndex = 0;

    updateScores();

    settingsDiv.classList.add("hidden");
    quizDiv.classList.remove("hidden");

    loadQuestion();
}

/***********************
 * LOAD QUESTION
 ***********************/
function loadQuestion() {
    clearInterval(timer);
    timerStarted = false;

    teamAAnswer = null;
    teamBAnswer = null;

    betAEl.value = "";
    betBEl.value = "";

    timeLeft = timePerQuestion;
    timerEl.textContent = "⏱ Waiting for bets…";

    questionEl.textContent = questions[currentIndex].question;
    optionsEl.innerHTML = "";

    questions[currentIndex].options.forEach((opt, idx) => {
        const row = document.createElement("div");
        row.className = "option-row";

        const btnA = document.createElement("button");
        btnA.textContent = `A: ${opt}`;
        btnA.onclick = () => selectOption(idx, "A", btnA);

        const btnB = document.createElement("button");
        btnB.textContent = `B: ${opt}`;
        btnB.onclick = () => selectOption(idx, "B", btnB);

        row.appendChild(btnA);
        row.appendChild(btnB);
        optionsEl.appendChild(row);
    });

    betAEl.oninput = checkStartTimer;
    betBEl.oninput = checkStartTimer;
}

/***********************
 * START TIMER ONLY AFTER BETS
 ***********************/
function checkStartTimer() {
    if (timerStarted) return;

    if (betAEl.value !== "" && betBEl.value !== "") {
        timerStarted = true;
        startTimer();
    }
}

/***********************
 * TIMER
 ***********************/
function startTimer() {
    timerEl.textContent = `⏱ ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `⏱ ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            evaluateBets();
            showCorrect();
            setTimeout(nextQuestion, 2000);
        }
    }, 1000);
}

/***********************
 * OPTION SELECTION (BLUE)
 ***********************/
function selectOption(index, team, button) {
    if (team === "A") teamAAnswer = index;
    if (team === "B") teamBAnswer = index;

    button.classList.add("selected");
}

/***********************
 * EVALUATE BETS
 ***********************/
function evaluateBets() {
    const correct = questions[currentIndex].correct;
    const betA = parseInt(betAEl.value) || 0;
    const betB = parseInt(betBEl.value) || 0;

    if (teamAAnswer !== null)
        teamAScore += (teamAAnswer === correct ? betA : -betA);

    if (teamBAnswer !== null)
        teamBScore += (teamBAnswer === correct ? betB : -betB);

    updateScores();
}

/***********************
 * SHOW CORRECT
 ***********************/
function showCorrect() {
    const correct = questions[currentIndex].correct;
    const rows = optionsEl.children;

    for (let i = 0; i < rows.length; i++) {
        if (i === correct) {
            rows[i].children[0].classList.add("correct");
            rows[i].children[1].classList.add("correct");
        }
        rows[i].children[0].disabled = true;
        rows[i].children[1].disabled = true;
    }
}

/***********************
 * NEXT / END
 ***********************/
function nextQuestion() {
    currentIndex++;
    currentIndex < questions.length ? loadQuestion() : endQuiz();
}

function endQuiz() {
    let result = "🤝 Tie!";
    if (teamAScore > teamBScore) result = "🏆 Team A Wins!";
    if (teamBScore > teamAScore) result = "🏆 Team B Wins!";

    questionEl.textContent = result;
    optionsEl.innerHTML = `
        <p>Team A: ${teamAScore}</p>
        <p>Team B: ${teamBScore}</p>
    `;
    timerEl.textContent = "Finished";
}

/***********************
 * RESTART
 ***********************/
function restartQuiz() {
    clearInterval(timer);
    quizDiv.classList.add("hidden");
    settingsDiv.classList.remove("hidden");
}

function updateScores() {
    teamAScoreEl.textContent = teamAScore;
    teamBScoreEl.textContent = teamBScore;
}
