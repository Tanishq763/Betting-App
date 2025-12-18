/***********************
 * QUESTIONS
 ***********************/
const allQuestions = [
    {
        question: "Which of the following is a valid variable name in C?",
        options: ["2num", "num_2", "float", "num-2"],
        correct: 1
    },
    {
        question: "Which symbol is used to terminate a statement in C/C++?",
        options: [":", ".", ";", ","],
        correct: 2
    },
    {
        question: "What is the default value of an uninitialized local variable in C?",
        options: ["0", "Garbage value", "NULL", "Depends on compiler"],
        correct: 1
    },
    {
        question: "Which data type is used to store decimal values in C?",
        options: ["int", "char", "float", "long"],
        correct: 2
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "def", "fun"],
        correct: 2
    },
    {
        question: "Which of the following is used for single-line comments in C++?",
        options: ["/* */", "#", "//", "<!-- -->"],
        correct: 2
    },
    {
        question: "Which data structure follows FIFO order?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correct: 1
    },
    {
        question: "What will be the output of: printf(\"%d\", 5/2); in C?",
        options: ["2.5", "2", "3", "Error"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a loop in C?",
        options: ["for", "while", "repeat", "do-while"],
        correct: 2
    },
    {
        question: "What is the file extension of a Python program?",
        options: [".pt", ".py", ".pyt", ".python"],
        correct: 1
    },
    {
        question: "Which operator has the highest precedence in C?",
        options: ["+", "*", "()", "="],
        correct: 2
    },
    {
        question: "What will be the output of the following Python code? print(type(10))",
        options: ["int", "<class 'int'>", "integer", "number"],
        correct: 1
    },
    {
        question: "Which of the following is a linear data structure?",
        options: ["Graph", "Tree", "Array", "Heap"],
        correct: 2
    },
    {
        question: "What is the size of int in C (on a 32-bit compiler)?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
        correct: 1
    },
    {
        question: "Which sorting algorithm has the best average time complexity?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        correct: 2
    },
    {
        question: "What does break do in a loop?",
        options: ["Skips one iteration", "Stops program execution", "Terminates the loop", "Pauses the loop"],
        correct: 2
    },
    {
        question: "Which of the following is mutable in Python?",
        options: ["Tuple", "String", "List", "Integer"],
        correct: 2
    },
    {
        question: "What is the output of: cout << (5 > 3 && 2 < 1);?",
        options: ["1", "0", "true", "false"],
        correct: 1
    },
    {
        question: "Which data structure is used for recursion?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correct: 1
    },
    {
        question: "What is the worst-case time complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2
    },
    {
        question: "Which function is used to read a string in C safely?",
        options: ["gets()", "scanf()", "fgets()", "puts()"],
        correct: 2
    },
    {
        question: "What does len() function do in Python?",
        options: ["Finds data type", "Finds memory size", "Finds length", "Finds range"],
        correct: 2
    },
    {
        question: "Which traversal technique uses recursion naturally?",
        options: ["BFS", "DFS", "Level Order", "Circular"],
        correct: 1
    },
    {
        question: "Which of the following is NOT an OOP concept?",
        options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"],
        correct: 2
    },
    {
        question: "What is the output of the following C code? int a = 10; printf(\"%d\", a++);",
        options: ["11", "10", "9", "Error"],
        correct: 1
    },
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correct: 1
    },
    {
        question: "Which of the following causes memory leak in C?",
        options: ["Not using pointers", "Using malloc without free", "Using free twice", "Using static variables"],
        correct: 1
    },
    {
        question: "What will be the output of the following Python code? a=[1,2,3]; b=a; b.append(4); print(a)",
        options: ["[1, 2, 3]", "[4]", "[1, 2, 3, 4]", "Error"],
        correct: 2
    },
    {
        question: "Which data structure is best for implementing a priority queue?",
        options: ["Stack", "Queue", "Heap", "Array"],
        correct: 2
    },
    {
        question: "What is the output of the following C++ code? int x = 5; cout << ++x * x++;",
        options: ["30", "36", "Undefined behavior", "25"],
        correct: 2
    },
     {
        question: "Which of the following is a valid keyword in C?",
        options: ["include", "main", "printf", "return"],
        correct: 3
    },
    {
        question: "Which operator is used to get the address of a variable in C?",
        options: ["*", "&", "%", "#"],
        correct: 1
    },
    {
        question: "What is the return type of main() function in C?",
        options: ["void", "int", "float", "char"],
        correct: 1
    },
    {
        question: "Which of the following is used to allocate memory dynamically in C++?",
        options: ["malloc", "calloc", "new", "alloc"],
        correct: 2
    },
    {
        question: "Which symbol is used to start a preprocessor directive?",
        options: ["@", "#", "$", "%"],
        correct: 1
    },
    {
        question: "Which of the following is a user-defined data type in C?",
        options: ["int", "float", "struct", "double"],
        correct: 2
    },
    {
        question: "Which C++ feature allows defining multiple functions with the same name?",
        options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
        correct: 1
    },
    {
        question: "Which access specifier makes class members accessible everywhere?",
        options: ["private", "protected", "public", "default"],
        correct: 2
    },
    {
        question: "Which keyword is used to prevent inheritance in C++?",
        options: ["static", "const", "final", "virtual"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a pillar of OOP?",
        options: ["Inheritance", "Polymorphism", "Compilation", "Encapsulation"],
        correct: 2
    },
    {
        question: "Which operator is used to access members of a structure using pointer?",
        options: [".", "::", "->", "*"],
        correct: 2
    },
    {
        question: "What is a constructor?",
        options: ["A function to destroy objects", "A function to create objects", "A function to initialize objects", "A static function"],
        correct: 2
    },
    {
        question: "Which function is automatically called when an object is destroyed?",
        options: ["delete()", "free()", "destructor", "remove()"],
        correct: 2
    },
    {
        question: "Which keyword is used to inherit a class publicly in C++?",
        options: ["extends", "public", ":", "inherits"],
        correct: 2
    },
    {
        question: "Which concept binds data and functions together?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        correct: 2
    },
    {
        question: "Which type of inheritance involves multiple base classes?",
        options: ["Single", "Multilevel", "Multiple", "Hierarchical"],
        correct: 2
    },
    {
        question: "Which function cannot be overloaded in C++?",
        options: ["Normal function", "Constructor", "Destructor", "Inline function"],
        correct: 2
    },
    {
        question: "Which keyword is used to refer to the current object in C++?",
        options: ["this", "self", "current", "object"],
        correct: 0
    },
    {
        question: "Which memory is allocated during compile time?",
        options: ["Heap", "Stack", "Dynamic", "Virtual"],
        correct: 1
    },
    {
        question: "Which type of polymorphism is achieved using function overloading?",
        options: ["Runtime", "Compile-time", "Dynamic", "Late binding"],
        correct: 1
    },
    {
        question: "Which keyword is used to declare a constant variable in C?",
        options: ["static", "final", "const", "define"],
        correct: 2
    },
    {
        question: "Which of the following supports run-time polymorphism?",
        options: ["Function overloading", "Templates", "Virtual functions", "Inline functions"],
        correct: 2
    },
    {
        question: "Which operator is used to resolve scope in C++?",
        options: [".", "->", "::", ":"],
        correct: 2
    },
    {
        question: "Which function is used to deallocate memory allocated using new?",
        options: ["free()", "delete", "remove()", "clear()"],
        correct: 1
    },
    {
        question: "Which of the following is true about abstract classes?",
        options: ["They cannot have constructors", "They cannot have data members", "Objects cannot be created", "They cannot have functions"],
        correct: 2
    },
    {
        question: "Which keyword is used to define an inline function?",
        options: ["static", "inline", "register", "virtual"],
        correct: 1
    },
    {
        question: "Which inheritance causes the diamond problem?",
        options: ["Single", "Multilevel", "Multiple", "Hierarchical"],
        correct: 2
    },
    {
        question: "Which C++ feature solves the diamond problem?",
        options: ["Templates", "Virtual inheritance", "Polymorphism", "Abstraction"],
        correct: 1
    },
    {
        question: "Which operator cannot be overloaded in C++?",
        options: ["+", "=", "sizeof", "[]"],
        correct: 2
    },
    {
        question: "Which binding happens at compile time?",
        options: ["Dynamic binding", "Late binding", "Static binding", "Runtime binding"],
        correct: 2
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


