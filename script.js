const quiz = [
  { q: "What is the symbol for Sodium?", options: ["So","Sn","Na","S"], correct: "Na" },
  { q: "Which element has atomic number 1?", options: ["Oxygen","Nitrogen","Hydrogen","Helium"], correct: "Hydrogen" },
  { q: "What is the lightest noble gas?", options: ["Neon","Helium","Argon","Krypton"], correct: "Helium" },
  { q: "Which element is named after the Sun?", options: ["Solarium","Helium","Sodium","Sulfur"], correct: "Helium" },
  { q: "What’s the symbol for Iron?", options: ["Fe","Ir","In","I"], correct: "Fe" }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const nextBtn    = document.getElementById("next");
const resultEl   = document.getElementById("result");
const scoreEl    = document.getElementById("score");

function loadQuestion() {
  if (index >= quiz.length) {
    questionEl.textContent = "🎉 Quiz complete!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Final Score: ${score}/${quiz.length}`;
    return;
  }
  const current = quiz[index];
  questionEl.textContent = current.q;
  optionsEl.innerHTML = "";
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, current.correct);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    resultEl.textContent = "✅ Correct!";
  } else {
    resultEl.textContent = `❌ Wrong! Correct answer: ${correct}`;
  }
  scoreEl.textContent = `Score: ${score}`;
}

nextBtn.onclick = () => {
  index++;
  resultEl.textContent = "";
  loadQuestion();
};

loadQuestion();
