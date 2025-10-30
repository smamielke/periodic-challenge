// ---- QUIZ QUESTIONS ----
let quiz = [
  { q: "What is the symbol for Sodium?", options: ["So","Sn","Na","S"], correct: "Na" },
  { q: "Which element has atomic number 1?", options: ["Oxygen","Nitrogen","Hydrogen","Helium"], correct: "Hydrogen" },
  { q: "What is the lightest noble gas?", options: ["Neon","Helium","Argon","Krypton"], correct: "Helium" },
  { q: "Which element is named after the Sun?", options: ["Solarium","Helium","Sodium","Sulfur"], correct: "Helium" },
  { q: "What’s the symbol for Iron?", options: ["Fe","Ir","In","I"], correct: "Fe" },
  { q: "Which element has the atomic number 6?", options: ["Carbon", "Oxygen", "Nitrogen", "Boron"], correct: "Carbon" },
  { q: "What is the chemical symbol for Potassium?", options: ["P", "K", "Po", "Pt"], correct: "K" },
  { q: "What is the only metal that is liquid at room temperature?", options: ["Mercury", "Gallium", "Sodium", "Lead"], correct: "Mercury" },
  { q: "Who created the periodic table?", options: ["Einstein", "Mendeleev", "Curie", "Dalton"], correct: "Mendeleev" },
  { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: "Nitrogen" },
  { q: "Which element is used in thermometers?", options: ["Mercury", "Iron", "Silver", "Tin"], correct: "Mercury" },
  { q: "Which element’s symbol is 'Cu'?", options: ["Calcium", "Cobalt", "Copper", "Carbon"], correct: "Copper" },
  { q: "What does 'NaCl' stand for?", options: ["Baking Soda", "Sugar", "Salt", "Chalk"], correct: "Salt" },
  { q: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Carbon", "Platinum"], correct: "Tungsten" },
  { q: "What is the chemical symbol for Gold?", options: ["Gd", "Ag", "Au", "Go"], correct: "Au" }
];

// ---- QUIZ VARIABLES ----
let index = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const shareBtn = document.getElementById("share") || document.createElement("button");

// ---- SHUFFLE QUESTIONS EACH TIME ----
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(quiz);

// ---- LOAD QUESTIONS ----
function loadQuestion() {
  if (index >= quiz.length) {
    questionEl.textContent = "🎉 Quiz complete!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Final Score: ${score}/${quiz.length}`;

    // Show Share button
    shareBtn.style.display = "inline-block";
    shareBtn.id = "share";
    shareBtn.textContent = "Share Your Score";
    shareBtn.onclick = () => {
      const text = `I scored ${score}/${quiz.length} on the Periodic Challenge! ⚛️`;
      const url = window.location.href;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
    };
    resultEl.appendChild(shareBtn);

    // Add "Play Again" button
    const againBtn = document.createElement("button");
    againBtn.textContent = "Play Again 🔁";
    againBtn.onclick = restartQuiz;
    resultEl.appendChild(document.createElement("br"));
    resultEl.appendChild(againBtn);
    return;
  }

  const current = quiz[index];
  questionEl.textContent = current.q;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option, current.correct);
    optionsEl.appendChild(btn);
  });

  resultEl.textContent = "";
}

// ---- CHECK ANSWER ----
function checkAnswer(button, selected, correct) {
  const allButtons = optionsEl.querySelectorAll("button");

  // Disable all buttons after one click
  allButtons.forEach(b => b.disabled = true);

  if (selected === correct) {
    score++;
    button.style.backgroundColor = "green";
    resultEl.textContent = "✅ Correct!";
  } else {
    button.style.backgroundColor = "red";
    resultEl.textContent = `❌ Wrong! The correct answer was ${correct}`;
    // highlight correct answer
    allButtons.forEach(b => {
      if (b.textContent === correct) b.style.backgroundColor = "green";
    });
  }

  scoreEl.textContent = `Score: ${score}`;
}

// ---- NEXT QUESTION ----
nextBtn.onclick = () => {
  index++;
  loadQuestion();
};

// ---- RESTART QUIZ ----
function restartQuiz() {
  score = 0;
  index = 0;
  scoreEl.textContent = `Score: ${score}`;
  nextBtn.style.display = "inline-block";
  shuffle(quiz);
  loadQuestion();
}

// ---- START ----
loadQuestion();
