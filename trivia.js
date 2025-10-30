const triviaQuestions = [
  { q: "What planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Mercury"], correct: "Mars" },
  { q: "Water’s chemical formula is:", options: ["HO2", "H2O", "O2H", "H2"], correct: "H2O" },
  { q: "The center of an atom is called the:", options: ["Core", "Proton", "Nucleus", "Electron"], correct: "Nucleus" },
  { q: "What is the largest organ in the human body?", options: ["Brain", "Skin", "Heart", "Liver"], correct: "Skin" },
  { q: "The Sun is mostly made of:", options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"], correct: "Hydrogen" }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next");

function loadQuestion() {
  if (index >= triviaQuestions.length) {
    questionEl.textContent = `Quiz Complete! You scored ${score}/${triviaQuestions.length}!`;
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    return;
  }
  const q = triviaQuestions[index];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.correct) {
        score++;
        resultEl.textContent = "✅ Correct!";
      } else {
        resultEl.textContent = `❌ The correct answer was ${q.correct}`;
      }
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });
  resultEl.textContent = "";
  nextBtn.disabled = true;
}

nextBtn.onclick = () => {
  index++;
  loadQuestion();
};

loadQuestion();
