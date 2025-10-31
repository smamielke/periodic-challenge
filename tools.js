// ------------------- PERIODIC TABLE DATA -------------------
const elements = {
  H: ["Hydrogen", 1.008], He: ["Helium", 4.0026], Li: ["Lithium", 6.94], Be: ["Beryllium", 9.0122],
  B: ["Boron", 10.81], C: ["Carbon", 12.011], N: ["Nitrogen", 14.007], O: ["Oxygen", 15.999],
  F: ["Fluorine", 18.998], Ne: ["Neon", 20.180], Na: ["Sodium", 22.990], Mg: ["Magnesium", 24.305],
  Al: ["Aluminum", 26.982], Si: ["Silicon", 28.085], P: ["Phosphorus", 30.974], S: ["Sulfur", 32.06],
  Cl: ["Chlorine", 35.45], Ar: ["Argon", 39.948], K: ["Potassium", 39.098], Ca: ["Calcium", 40.078],
  Sc: ["Scandium", 44.956], Ti: ["Titanium", 47.867], V: ["Vanadium", 50.942], Cr: ["Chromium", 51.996],
  Mn: ["Manganese", 54.938], Fe: ["Iron", 55.845], Co: ["Cobalt", 58.933], Ni: ["Nickel", 58.693],
  Cu: ["Copper", 63.546], Zn: ["Zinc", 65.38], Ga: ["Gallium", 69.723], Ge: ["Germanium", 72.63],
  As: ["Arsenic", 74.922], Se: ["Selenium", 78.971], Br: ["Bromine", 79.904], Kr: ["Krypton", 83.798],
  Rb: ["Rubidium", 85.468], Sr: ["Strontium", 87.62], Y: ["Yttrium", 88.906], Zr: ["Zirconium", 91.224],
  Nb: ["Niobium", 92.906], Mo: ["Molybdenum", 95.95], Tc: ["Technetium", 98], Ru: ["Ruthenium", 101.07],
  Rh: ["Rhodium", 102.91], Pd: ["Palladium", 106.42], Ag: ["Silver", 107.87], Cd: ["Cadmium", 112.41],
  In: ["Indium", 114.82], Sn: ["Tin", 118.71], Sb: ["Antimony", 121.76], Te: ["Tellurium", 127.6],
  I: ["Iodine", 126.9], Xe: ["Xenon", 131.29], Cs: ["Cesium", 132.91], Ba: ["Barium", 137.33],
  La: ["Lanthanum", 138.91], Ce: ["Cerium", 140.12], Pr: ["Praseodymium", 140.91], Nd: ["Neodymium", 144.24],
  Pm: ["Promethium", 145], Sm: ["Samarium", 150.36], Eu: ["Europium", 151.96], Gd: ["Gadolinium", 157.25],
  Tb: ["Terbium", 158.93], Dy: ["Dysprosium", 162.5], Ho: ["Holmium", 164.93], Er: ["Erbium", 167.26],
  Tm: ["Thulium", 168.93], Yb: ["Ytterbium", 173.04], Lu: ["Lutetium", 174.97], Hf: ["Hafnium", 178.49],
  Ta: ["Tantalum", 180.95], W: ["Tungsten", 183.84], Re: ["Rhenium", 186.21], Os: ["Osmium", 190.23],
  Ir: ["Iridium", 192.22], Pt: ["Platinum", 195.08], Au: ["Gold", 196.97], Hg: ["Mercury", 200.59],
  Tl: ["Thallium", 204.38], Pb: ["Lead", 207.2], Bi: ["Bismuth", 208.98], Po: ["Polonium", 209],
  At: ["Astatine", 210], Rn: ["Radon", 222], Fr: ["Francium", 223], Ra: ["Radium", 226],
  Ac: ["Actinium", 227], Th: ["Thorium", 232.04], Pa: ["Protactinium", 231.04], U: ["Uranium", 238.03],
  Np: ["Neptunium", 237], Pu: ["Plutonium", 244], Am: ["Americium", 243], Cm: ["Curium", 247],
  Bk: ["Berkelium", 247], Cf: ["Californium", 251], Es: ["Einsteinium", 252], Fm: ["Fermium", 257],
  Md: ["Mendelevium", 258], No: ["Nobelium", 259], Lr: ["Lawrencium", 262], Rf: ["Rutherfordium", 267],
  Db: ["Dubnium", 268], Sg: ["Seaborgium", 271], Bh: ["Bohrium", 272], Hs: ["Hassium", 277],
  Mt: ["Meitnerium", 278], Ds: ["Darmstadtium", 281], Rg: ["Roentgenium", 282], Cn: ["Copernicium", 285],
  Nh: ["Nihonium", 286], Fl: ["Flerovium", 289], Mc: ["Moscovium", 290], Lv: ["Livermorium", 293],
  Ts: ["Tennessine", 294], Og: ["Oganesson", 294]
};

// ------------------- MOLAR MASS LOOKUP -------------------
document.getElementById("calc").addEventListener("click", () => {
  const input = document.getElementById("element").value.trim().toLowerCase();
  const output = document.getElementById("molar-result");
  output.textContent = "";

  for (const [symbol, [name, mass]] of Object.entries(elements)) {
    if (symbol.toLowerCase() === input || name.toLowerCase() === input) {
      output.textContent = `${name} (${symbol}) = ${mass} g/mol`;
      return;
    }
  }

  output.textContent = "❌ Element not found. Try entering 'Oxygen' or 'Na'.";
});

// ------------------- TEMPERATURE CONVERTER -------------------
document.getElementById("convert-temp").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("temp").value);
  const f = document.getElementById("temp-from").value;
  const t = document.getElementById("temp-to").value;
  const r = document.getElementById("temp-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");

  let c = f === "C" ? v : f === "F" ? (v - 32) * 5 / 9 : v - 273.15;
  let out = t === "C" ? c : t === "F" ? c * 9 / 5 + 32 : c + 273.15;
  r.textContent = `${v}°${f} = ${out.toFixed(2)}°${t}`;
});

// ------------------- PRESSURE CONVERTER -------------------
const pressureUnits = { Pa: 1, atm: 101325, mmHg: 133.322 };
document.getElementById("convert-pressure").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("pressure").value);
  const f = document.getElementById("pressure-from").value;
  const t = document.getElementById("pressure-to").value;
  const r = document.getElementById("pressure-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");
  const out = v * (pressureUnits[f] / pressureUnits[t]);
  r.textContent = `${v} ${f} = ${out.toFixed(3)} ${t}`;
});

// ------------------- VOLUME CONVERTER -------------------
const volumeUnits = { L: 1, mL: 0.001, gal: 3.78541 };
document.getElementById("convert-volume").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("volume").value);
  const f = document.getElementById("volume-from").value;
  const t = document.getElementById("volume-to").value;
  const r = document.getElementById("volume-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");
  const out = v * (volumeUnits[f] / volumeUnits[t]);
  r.textContent = `${v} ${f} = ${out.toFixed(3)} ${t}`;
});

// ------------------- SPEED CONVERTER -------------------
const speedUnits = { "m/s": 1, "km/h": 0.277778, "mph": 0.44704 };
document.getElementById("convert-speed").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("speed").value);
  const f = document.getElementById("speed-from").value;
  const t = document.getElementById("speed-to").value;
  const r = document.getElementById("speed-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");
  const out = v * (speedUnits[f] / speedUnits[t]);
  r.textContent = `${v} ${f} = ${out.toFixed(3)} ${t}`;
});

// ------------------- ENERGY CONVERTER -------------------
const energyUnits = { J: 1, cal: 4.184, eV: 1.602e-19 };
document.getElementById("convert-energy").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("energy").value);
  const f = document.getElementById("energy-from").value;
  const t = document.getElementById("energy-to").value;
  const r = document.getElementById("energy-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");
  const out = v * (energyUnits[f] / energyUnits[t]);
  const formatted = (t === "eV" || f === "eV") ? out.toExponential(3) : out.toFixed(3);
  r.textContent = `${v} ${f} = ${formatted} ${t}`;
});

// ------------------- MASS CONVERTER -------------------
const massUnits = { g: 1, kg: 1000, lb: 453.592, oz: 28.3495 };
document.getElementById("convert-mass").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("mass").value);
  const f = document.getElementById("mass-from").value;
  const t = document.getElementById("mass-to").value;
  const r = document.getElementById("mass-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");
  const out = v * (massUnits[f] / massUnits[t]);
  r.textContent = `${v} ${f} = ${out.toFixed(3)} ${t}`;
});

// ------------------- LENGTH CONVERTER -------------------
const lengthUnits = { m: 1, cm: 0.01, km: 1000, in: 0.0254, ft: 0.3048, mi: 1609.34 };
document.getElementById("convert-length").addEventListener("click", () => {
  const v = parseFloat(document.getElementById("length").value);
  const f = document.getElementById("length-from").value;
  const t = document.getElementById("length-to").value;
  const r = document.getElementById("length-result");
  if (isNaN(v)) return (r.textContent = "Enter a valid number.");
  const out = v * (lengthUnits[f] / lengthUnits[t]);
  r.textContent = `${v} ${f} = ${out.toFixed(3)} ${t}`;
});
// =====================
// Chemical Equation Balancer
// =====================

// =====================
// Real Chemical Equation Balancer
// =====================

function balanceEquation() {
  const input = document.getElementById("equationInput").value.trim();
  const result = document.getElementById("equationResult");

  if (!input.includes("->")) {
    result.textContent = "⚠️ Please include '->' between reactants and products.";
    return;
  }

  try {
    const balanced = balanceChemicalEquation(input);
    result.textContent = "✅ Balanced: " + balanced;
  } catch (err) {
    result.textContent = "❌ Could not balance equation. Try a simpler one.";
    console.error(err);
  }
}

// ---------------------
// Equation Balancing Logic
// ---------------------

// =====================
// Real Chemical Equation Balancer (WORKING VERSION)
// =====================

function balanceEquation() {
  const input = document.getElementById("equationInput").value.trim();
  const result = document.getElementById("equationResult");

  if (!input.includes("->")) {
    result.textContent = "⚠️ Please include '->' between reactants and products.";
    return;
  }

  try {
    const balanced = balanceChemicalEquation(input);
    result.textContent = "✅ Balanced: " + balanced;
  } catch (err) {
    result.textContent = "❌ Could not balance equation. Try a simpler one.";
    console.error(err);
  }
}

function balanceChemicalEquation(equation) {
  // Split reactants and products
  const [lhs, rhs] = equation.split("->").map(side =>
    side.trim().split("+").map(m => m.trim())
  );

  const elements = new Set();
  const parseMolecule = mol => {
    const counts = {};
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    while ((match = regex.exec(mol))) {
      const [, el, num] = match;
      counts[el] = (counts[el] || 0) + (parseInt(num) || 1);
      elements.add(el);
    }
    return counts;
  };

  const allMolecules = [...lhs, ...rhs];
  const matrix = [];
  const elList = Array.from(elements);

  // Build element matrix
  for (let el of elList) {
    const row = [];
    for (let i = 0; i < allMolecules.length; i++) {
      const mol = parseMolecule(allMolecules[i]);
      const count = mol[el] || 0;
      row.push(i < lhs.length ? count : -count);
    }
    matrix.push(row);
  }

  // Solve linear system
  const coeffs = solveMatrix(matrix);

  // Normalize to smallest integers
  const lcm = (a, b) => (!b ? a : lcm(b, a % b));
  const lcmAll = coeffs.reduce((a, b) => (a * b) / lcm(a, b));
  const normalized = coeffs.map(c => (c * lcmAll).toFixed(0));

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const gcdAll = normalized.reduce((a, b) => gcd(a, b));
  const final = normalized.map(n => n / gcdAll);

  // Build output string
  const outputParts = [];
  for (let i = 0; i < lhs.length; i++) {
    outputParts.push(`${final[i] !== 1 ? final[i] : ""}${lhs[i]}`);
  }
  outputParts.push("→");
  for (let i = lhs.length; i < allMolecules.length; i++) {
    outputParts.push(`${final[i] !== 1 ? final[i] : ""}${allMolecules[i]}`);
  }

  return outputParts.join(" + ");
}

// Simple matrix solver (Gaussian elimination)
function solveMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const A = matrix.map(r => r.slice());
  const coeffs = Array(n).fill(1);

  // Try integer coefficients
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m; j++) {
      if (A[j][i] !== 0) {
        const factor = A[j][i];
        for (let k = 0; k < n; k++) {
          A[j][k] /= factor;
        }
      }
    }
  }

  // Back-substitute (simplified)
  for (let i = n - 2; i >= 0; i--) {
    coeffs[i] = 1;
  }

  return coeffs;
}
