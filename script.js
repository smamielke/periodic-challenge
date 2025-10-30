// ===== Question Sets =====
const questionSets = {
  easy: [
    { q: "What is the symbol for Sodium?", options: ["So","Sn","Na","S"], correct: "Na" },
    { q: "Which element has atomic number 1?", options: ["Oxygen","Nitrogen","Hydrogen","Helium"], correct: "Hydrogen" },
    { q: "What’s the symbol for Iron?", options: ["Fe","Ir","In","I"], correct: "Fe" }
  ],
  medium: [
    { q: "What is the chemical symbol for Potassium?", options: ["P","K","Po","Pt"], correct: "K" },
    { q: "Who created the periodic table?", options: ["Einstein","Mendeleev","Curie","Dalton"], correct: "Mendeleev" },
    { q: "Which element is named after the Sun?", options: ["Solarium","Helium","Sodium","Sulfur"], correct: "Helium" }
  ],
  hard: [
    { q: "Which element has the atomic number 6?", options: ["Carbon","Oxygen","Nitrogen","Boron"], correct: "Carbon" },
    { q: "Which of these is a noble gas?", options: ["Chlorine","Neon","Nitrogen","Carbon"], correct: "Neon" },
    { q: "What is the electron configuration of Oxygen?", options: ["1s2 2s2 2p4","1s2 2s2 2p6","1s2 2s2 2p3","1s2 2s1 2p4"], correct: "1s2 2s2 2p4" }
  ]
};

// ===== DOM Elements =====
const startScreen = document.getElementById("start-screen");
const quizSection = document.getElementById("quiz-section");
const endScreen = document.getElementById("end-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart");
const highScoreEl = document.getElementById("high-score");

let currentQuestions = [];
let index = 0;
let score = 0;
let selectedMode = null;

// ===== Helper =====
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ===== Start Game =====
document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedMode = btn.dataset.mode;
    currentQuestions = [...questionSets[selectedMode]];
    shuffle(currentQuestions);
    startScreen.style.display = "none";
    quizSection.style.display = "block";
    loadQuestion();
  });
});

// ===== Load Question =====
function loadQuestion() {
  if (index >= currentQuestions.length) {
    endQuiz();
    return;
  }
  const q = currentQuestions[index];
  progressEl.textContent = `Question ${index + 1} of ${currentQuestions.length}`;
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option, q.correct));
    optionsEl.appendChild(button);
  });
  resultEl.textContent = "";
}

// ===== Check Answer =====
function checkAnswer(button, selected, correct) {
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);
  if (selected === correct) {
    score++;
    button.style.backgroundColor = "#4CAF50";
    resultEl.textContent = "✅ Correct!";
  } else {
    button.style.backgroundColor = "#e63946";
    resultEl.textContent = `❌ Correct answer: ${correct}`;
  }
}

// ===== Next =====
nextBtn.addEventListener("click", () => {
  index++;
  loadQuestion();
});

// ===== End Quiz =====
function endQuiz() {
  quizSection.style.display = "none";
  endScreen.style.display = "block";
  finalScoreEl.textContent = `You scored ${score} / ${currentQuestions.length}!`;

  const savedScore = localStorage.getItem("highscore-" + selectedMode);
  if (!savedScore || score > savedScore) {
    localStorage.setItem("highscore-" + selectedMode, score);
  }
updateHighScore(); // <--- Add this line
}

// ===== Restart =====
restartBtn.addEventListener("click", () => {
  index = 0;
  score = 0;
  endScreen.style.display = "none";
  quizSection.style.display = "none";
  startScreen.style.display = "block";
  updateHighScore();
});

// ===== High Score Display =====
function updateHighScore() {
  const easy = localStorage.getItem("highscore-easy") || 0;
  const medium = localStorage.getItem("highscore-medium") || 0;
  const hard = localStorage.getItem("highscore-hard") || 0;
  highScoreEl.textContent = `🏆 High Scores — Easy: ${easy} | Medium: ${medium} | Hard: ${hard}`;
}

updateHighScore();
