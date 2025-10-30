window.onload = () => {
  // --- FULL PERIODIC TABLE DATABASE (symbol, name, mass) ---
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
  
// --- MOLAR MASS LOOKUP ---
  document.getElementById("calc").onclick = () => {
    const input = document.getElementById("element").value.trim().toLowerCase();
    let found = null;
    for (const [symbol, [name, mass]] of Object.entries(elements)) {
      if (symbol.toLowerCase() === input || name.toLowerCase() === input) {
        found = { symbol, name, mass };
        break;
      }
    }
    const output = document.getElementById("mass-result");
    output.textContent = found
      ? `${found.name} (${found.symbol}) = ${found.mass} g/mol`
      : "❌ Element not found.";
  };

  // --- TEMPERATURE CONVERTER ---
  document.getElementById("convert-temp").onclick = () => {
    const value = parseFloat(document.getElementById("temp").value);
    const from = document.getElementById("temp-from").value;
    const to = document.getElementById("temp-to").value;
    const result = document.getElementById("temp-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    let celsius;
    if (from === "C") celsius = value;
    else if (from === "F") celsius = (value - 32) * 5 / 9;
    else if (from === "K") celsius = value - 273.15;

    let converted;
    if (to === "C") converted = celsius;
    else if (to === "F") converted = celsius * 9 / 5 + 32;
    else if (to === "K") converted = celsius + 273.15;

    result.textContent = `${value}°${from} = ${converted.toFixed(2)}°${to}`;
  };

  // --- PRESSURE CONVERTER ---
  const pressureUnits = { Pa: 1, atm: 101325, mmHg: 133.322 };
  document.getElementById("convert-pressure").onclick = () => {
    const value = parseFloat(document.getElementById("pressure").value);
    const from = document.getElementById("pressure-from").value;
    const to = document.getElementById("pressure-to").value;
    const result = document.getElementById("pressure-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    const converted = value * (pressureUnits[from] / pressureUnits[to]);
    result.textContent = `${value} ${from} = ${converted.toFixed(3)} ${to}`;
  };

  // --- VOLUME CONVERTER ---
  const volumeUnits = { L: 1, mL: 0.001, gal: 3.78541 };
  document.getElementById("convert-volume").onclick = () => {
    const value = parseFloat(document.getElementById("volume").value);
    const from = document.getElementById("volume-from").value;
    const to = document.getElementById("volume-to").value;
    const result = document.getElementById("volume-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    const converted = value * (volumeUnits[from] / volumeUnits[to]);
    result.textContent = `${value} ${from} = ${converted.toFixed(3)} ${to}`;
  };

  // --- SPEED CONVERTER ---
  const speedUnits = { "m/s": 1, "km/h": 0.277778, "mph": 0.44704 };
  document.getElementById("convert-speed").onclick = () => {
    const value = parseFloat(document.getElementById("speed").value);
    const from = document.getElementById("speed-from").value;
    const to = document.getElementById("speed-to").value;
    const result = document.getElementById("speed-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    const converted = value * (speedUnits[from] / speedUnits[to]);
    result.textContent = `${value} ${from} = ${converted.toFixed(3)} ${to}`;
  };

  // --- ENERGY CONVERTER ---
  const energyUnits = { J: 1, cal: 4.184, eV: 1.602e-19 };
  document.getElementById("convert-energy").onclick = () => {
    const value = parseFloat(document.getElementById("energy").value);
    const from = document.getElementById("energy-from").value;
    const to = document.getElementById("energy-to").value;
    const result = document.getElementById("energy-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    const converted = value * (energyUnits[from] / energyUnits[to]);
    const formatted = (to === "eV" || from === "eV") ? converted.toExponential(3) : converted.toFixed(3);
    result.textContent = `${value} ${from} = ${formatted} ${to}`;
  };

  // --- MASS CONVERTER ---
  const massUnits = { g: 1, kg: 1000, lb: 453.592, oz: 28.3495 };
  document.getElementById("convert-mass").onclick = () => {
    const value = parseFloat(document.getElementById("mass").value);
    const from = document.getElementById("mass-from").value;
    const to = document.getElementById("mass-to").value;
    const result = document.getElementById("mass-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    const converted = value * (massUnits[from] / massUnits[to]);
    result.textContent = `${value} ${from} = ${converted.toFixed(3)} ${to}`;
  };

  // --- LENGTH CONVERTER ---
  const lengthUnits = { m: 1, cm: 0.01, km: 1000, in: 0.0254, ft: 0.3048 };
  document.getElementById("convert-length").onclick = () => {
    const value = parseFloat(document.getElementById("length").value);
    const from = document.getElementById("length-from").value;
    const to = document.getElementById("length-to").value;
    const result = document.getElementById("length-result");

    if (isNaN(value)) return result.textContent = "Enter a valid number.";

    const converted = value * (lengthUnits[from] / lengthUnits[to]);
    result.textContent = `${value} ${from} = ${converted.toFixed(3)} ${to}`;
  };

};
