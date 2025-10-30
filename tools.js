// --- FULL ELEMENT DATABASE: SYMBOL + NAME + MASS ---
const elements = [
  ["H", "Hydrogen", 1.008], ["He", "Helium", 4.0026], ["Li", "Lithium", 6.94], ["Be", "Beryllium", 9.0122],
  ["B", "Boron", 10.81], ["C", "Carbon", 12.011], ["N", "Nitrogen", 14.007], ["O", "Oxygen", 15.999],
  ["F", "Fluorine", 18.998], ["Ne", "Neon", 20.180], ["Na", "Sodium", 22.990], ["Mg", "Magnesium", 24.305],
  ["Al", "Aluminum", 26.982], ["Si", "Silicon", 28.085], ["P", "Phosphorus", 30.974], ["S", "Sulfur", 32.06],
  ["Cl", "Chlorine", 35.45], ["Ar", "Argon", 39.948], ["K", "Potassium", 39.098], ["Ca", "Calcium", 40.078],
  ["Fe", "Iron", 55.845], ["Cu", "Copper", 63.546], ["Zn", "Zinc", 65.38], ["Br", "Bromine", 79.904],
  ["Ag", "Silver", 107.87], ["Sn", "Tin", 118.71], ["I", "Iodine", 126.90], ["Au", "Gold", 196.97],
  ["Hg", "Mercury", 200.59], ["Pb", "Lead", 207.2], ["U", "Uranium", 238.03]
  // (Shortened list for speed — can expand with all 118 if you want full version)
];

// --- MOLAR MASS LOOKUP ---
document.getElementById("calc").onclick = () => {
  const query = document.getElementById("element").value.trim().toLowerCase();
  if (!query) {
    document.getElementById("mass-result").textContent = "Please enter an element name or symbol.";
    return;
  }

  const found = elements.find(([sym, name]) =>
    sym.toLowerCase() === query || name.toLowerCase() === query
  );

  if (found) {
    document.getElementById("mass-result").textContent =
      `${found[1]} (${found[0]}) has a molar mass of ${found[2]} g/mol.`;
  } else {
    document.getElementById("mass-result").textContent = "❌ Element not found. Try again!";
  }
};

// --- TEMPERATURE CONVERTER ---
document.getElementById("convert-temp").onclick = () => {
  const value = parseFloat(document.getElementById("temp").value);
  const from = document.getElementById("temp-from").value;
  const to = document.getElementById("temp-to").value;
  if (isNaN(value)) return (document.getElementById("temp-result").textContent = "Enter a valid number.");

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

// --- PRESSURE CONVERTER ---
document.getElementById("convert-pressure").onclick = () => {
  const value = parseFloat(document.getElementById("pressure").value);
  const from = document.getElementById("pressure-from").value;
  const to = document.getElementById("pressure-to").value;
  if (isNaN(value)) return (document.getElementById("pressure-result").textContent = "Enter a valid number.");

  const conversion = { Pa: 1, atm: 101325, mmHg: 133.322 };
  const result = value * (conversion[from] / conversion[to]);
  document.getElementById("pressure-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};

// --- VOLUME CONVERTER ---
document.getElementById("convert-volume").onclick = () => {
  const value = parseFloat(document.getElementById("volume").value);
  const from = document.getElementById("volume-from").value;
  const to = document.getElementById("volume-to").value;
  if (isNaN(value)) return (document.getElementById("volume-result").textContent = "Enter a valid number.");

  const conversion = { L: 1, mL: 0.001, gal: 3.78541 };
  const result = value * (conversion[from] / conversion[to]);
  document.getElementById("volume-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};

// --- SPEED CONVERTER ---
document.getElementById("convert-speed").onclick = () => {
  const value = parseFloat(document.getElementById("speed").value);
  const from = document.getElementById("speed-from").value;
  const to = document.getElementById("speed-to").value;
  if (isNaN(value)) return (document.getElementById("speed-result").textContent = "Enter a valid number.");

  const conversion = { "m/s": 1, "km/h": 0.277778, "mph": 0.44704 };
  const result = value * (conversion[from] / conversion[to]);
  document.getElementById("speed-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};
