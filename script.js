// === QUIZ DATA ===
let quiz = [
  { q: "What is the symbol for Sodium?", options: ["So","Sn","Na","S"], correct: "Na" },
  { q: "Which element has atomic number 1?", options: ["Oxygen","Nitrogen","Hydrogen","Helium"], correct: "Hydrogen" },
  { q: "What is the lightest noble gas?", options: ["Neon","Helium","Argon","Krypton"], correct: "Helium" },
  { q: "Which element is named after the Sun?", options: ["Solarium","Helium","Sodium","Sulfur"], correct: "Helium" },
  { q: "What’s the symbol for Iron?", options: ["Fe","Ir","In","I"], correct: "Fe" },
  { q: "Which element has the atomic number 6?", options: ["Carbon","Oxygen","Nitrogen","Boron"], correct: "Carbon" },
  { q: "What is the chemical symbol for Potassium?", options: ["P","K","Po","Pt"], correct: "K" },
  { q: "What is the only metal that is liquid at room temperature?", options: ["Mercury","Gallium","Sodium","Lead"], correct: "Mercury" },
  { q: "Who created the periodic table?", options: ["Einstein","Mendeleev","Curie","Dalton"], correct: "Mendeleev" },
  { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen","Nitrogen","Carbon Dioxide","Argon"], correct: "Nitrogen" },
  { q: "Which element is used in thermometers?", options: ["Mercury","Iron","Silver","Tin"], correct: "Mercury" },
  { q: "Which element’s symbol is 'Cu'?", options: ["Calcium","Cobalt","Copper","Carbon"], correct: "Copper" },
  { q: "What does 'NaCl' stand for?", options: ["Baking Soda","Sugar","Salt","Chalk"], correct: "Salt" },
  { q: "Which element has the highest melting point?", options: ["Iron","Tungsten","Carbon","Platinum"], correct: "Tungsten" },
  { q: "What is the chemical symbol for Gold?", options: ["Gd","Ag","Au","Go"], correct: "Au" }
];

// === DOM ELEMENTS ===
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const endScreen = document.getElementById("end-screen");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart");
const shareBtn = document.getElementById("share");
const factEl = document.getElementById("fact");

// === SOUNDS ===
const correctSound = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
const wrongSound = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");

let index = 0;
let score = 0;

// === SHUFFLE ===
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(quiz);

// === LOAD QUESTION ===
function loadQuestion() {
  if (index >= quiz.length) {
    showEndScreen();
    return;
  }
  const current = quiz[index];
  progressEl.textContent = `Question ${index + 1} of ${quiz.length}`;
  questionEl.textContent = current.q;
  questionEl.classList.add("fade-in");
  optionsEl.innerHTML = "";
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option, current.correct);
    optionsEl.appendChild(btn);
  });
  resultEl.textContent = "";
}

// === CHECK ANSWER ===
function checkAnswer(button, selected, correct) {
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(b => (b.disabled = true));
  if (selected === correct) {
    score++;
    button.style.backgroundColor = "#4CAF50";
    resultEl.textContent = "✅ Correct!";
    correctSound.play();
  } else {
    button.style.backgroundColor = "#e63946";
    resultEl.textContent = `❌ Wrong! Correct answer: ${correct}`;
    wrongSound.play();
    allButtons.forEach(b => {
      if (b.textContent === correct) b.style.backgroundColor = "#4CAF50";
    });
  }
}

// === NEXT ===
nextBtn.onclick = () => {
  index++;
  loadQuestion();
};

// === END SCREEN ===
function showEndScreen() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.style.display = "none";
  progressEl.style.display = "none";
  endScreen.style.display = "block";
  finalScoreEl.textContent = `You scored ${score} out of ${quiz.length}!`;
  shareBtn.onclick = () => {
    const text = `I scored ${score}/${quiz.length} on the Periodic Challenge! ⚛️`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
  };
}

// === RESTART ===
restartBtn.onclick = () => {
  index = 0;
  score = 0;
  shuffle(quiz);
  questionEl.style.display = "";
  optionsEl.style.display = "";
  nextBtn.style.display = "";
  resultEl.style.display = "";
  progressEl.style.display = "";
  endScreen.style.display = "none";
  loadQuestion();
};

// === FUN FACTS ===
const facts = [
  "Hydrogen is the most abundant element in the universe.",
  "Gold is so soft it can be molded by hand.",
  "Mercury is the only metal liquid at room temperature.",
  "Helium was discovered on the Sun before Earth.",
  "Bananas are slightly radioactive from potassium-40!",
  "Neon lights use gases other than neon for colors.",
  "Water expands when it freezes — most shrink.",
  "Diamonds are pure carbon atoms.",
  "The periodic table still grows with new elements!",
];
factEl.textContent = facts[Math.floor(Math.random() * facts.length)];

// === START ===
loadQuestion();
