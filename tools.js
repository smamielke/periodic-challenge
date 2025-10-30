// --- FULL MOLAR MASS DATABASE (118 ELEMENTS) ---
const molarMass = {
  H: 1.008, He: 4.0026, Li: 6.94, Be: 9.0122, B: 10.81, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.180,
  Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.085, P: 30.974, S: 32.06, Cl: 35.45, Ar: 39.948,
  K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693,
  Cu: 63.546, Zn: 65.38, Ga: 69.723, Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798,
  Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.224, Nb: 92.906, Mo: 95.95, Tc: 98, Ru: 101.07, Rh: 102.91, Pd: 106.42,
  Ag: 107.87, Cd: 112.41, In: 114.82, Sn: 118.71, Sb: 121.76, Te: 127.60, I: 126.90, Xe: 131.29,
  Cs: 132.91, Ba: 137.33, La: 138.91, Ce: 140.12, Pr: 140.91, Nd: 144.24, Pm: 145, Sm: 150.36, Eu: 151.96, Gd: 157.25,
  Tb: 158.93, Dy: 162.50, Ho: 164.93, Er: 167.26, Tm: 168.93, Yb: 173.04, Lu: 174.97,
  Hf: 178.49, Ta: 180.95, W: 183.84, Re: 186.21, Os: 190.23, Ir: 192.22, Pt: 195.08, Au: 196.97, Hg: 200.59,
  Tl: 204.38, Pb: 207.2, Bi: 208.98, Po: 209, At: 210, Rn: 222,
  Fr: 223, Ra: 226, Ac: 227, Th: 232.04, Pa: 231.04, U: 238.03, Np: 237, Pu: 244, Am: 243, Cm: 247,
  Bk: 247, Cf: 251, Es: 252, Fm: 257, Md: 258, No: 259, Lr: 262, Rf: 267, Db: 268, Sg: 271,
  Bh: 272, Hs: 277, Mt: 278, Ds: 281, Rg: 282, Cn: 285, Nh: 286, Fl: 289, Mc: 290, Lv: 293, Ts: 294, Og: 294
};

// --- MOLAR MASS LOOKUP ---
document.getElementById("calc").onclick = () => {
  const el = document.getElementById("element").value.trim();
  const upperEl = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  const mass = molarMass[upperEl];
  document.getElementById("mass-result").textContent = 
    mass ? `${upperEl} has a molar mass of ${mass} g/mol` : "❌ Element not found. Try a valid symbol (e.g., H, Na, Fe).";
};

// --- TEMPERATURE CONVERSION ---
document.getElementById("convert-temp").onclick = () => {
  const value = parseFloat(document.getElementById("temp").value);
  const from = document.getElementById("temp-from").value;
  const to = document.getElementById("temp-to").value;
  if (isNaN(value)) return (document.getElementById("temp-result").textContent = "Please enter a number.");

  let celsius;
  if (from === "C") celsius = value;
  else if (from === "F") celsius = (value - 32) * 5/9;
  else celsius = value - 273.15;

  let result;
  if (to === "C") result = celsius;
  else if (to === "F") result = (celsius * 9/5) + 32;
  else result = celsius + 273.15;

  document.getElementById("temp-result").textContent = `${value}°${from} = ${result.toFixed(2)}°${to}`;
};

// --- DISTANCE CONVERSION ---
document.getElementById("convert-dist").onclick = () => {
  const value = parseFloat(document.getElementById("dist").value);
  const from = document.getElementById("dist-from").value;
  const to = document.getElementById("dist-to").value;
  if (isNaN(value)) return (document.getElementById("dist-result").textContent = "Please enter a number.");

  const conversionRates = { m: 1, km: 1000, mi: 1609.34 };
  const meters = value * conversionRates[from];
  const result = meters / conversionRates[to];
  document.getElementById("dist-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};

// --- MASS CONVERSION ---
document.getElementById("convert-mass").onclick = () => {
  const value = parseFloat(document.getElementById("mass").value);
  const from = document.getElementById("mass-from").value;
  const to = document.getElementById("mass-to").value;
  if (isNaN(value)) return (document.getElementById("massconv-result").textContent = "Please enter a number.");

  const grams = from === "g" ? value : from === "kg" ? value * 1000 : value * 453.592;
  const result = to === "g" ? grams : to === "kg" ? grams / 1000 : grams / 453.592;
  document.getElementById("massconv-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};

// --- ENERGY CONVERSION ---
document.getElementById("convert-energy").onclick = () => {
  const value = parseFloat(document.getElementById("energy").value);
  const from = document.getElementById("energy-from").value;
  const to = document.getElementById("energy-to").value;
  if (isNaN(value)) return (document.getElementById("energy-result").textContent = "Please enter a number.");

  const joules = from === "J" ? value : value * 4.184;
  const result = to === "J" ? joules : joules / 4.184;
  document.getElementById("energy-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};
