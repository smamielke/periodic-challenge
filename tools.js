// Basic molar masses
const molarMass = {
  H: 1.008, He: 4.0026, C: 12.011, N: 14.007, O: 15.999,
  Na: 22.990, Cl: 35.45, Fe: 55.845, Cu: 63.546, Zn: 65.38
};

// Molar Mass
document.getElementById("calc").onclick = () => {
  const el = document.getElementById("element").value.trim();
  const mass = molarMass[el];
  document.getElementById("mass-result").textContent =
    mass ? `${el} has a molar mass of ${mass} g/mol` : "Element not found.";
};

// Temperature Converter
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

// Distance Converter
document.getElementById("convert-dist").onclick = () => {
  const value = parseFloat(document.getElementById("dist").value);
  const from = document.getElementById("dist-from").value;
  const to = document.getElementById("dist-to").value;
  if (isNaN(value)) return (document.getElementById("dist-result").textContent = "Enter a valid number.");

  let meters;
  if (from === "m") meters = value;
  else if (from === "km") meters = value * 1000;
  else meters = value * 1609.34;

  let result;
  if (to === "m") result = meters;
  else if (to === "km") result = meters / 1000;
  else result = meters / 1609.34;

  document.getElementById("dist-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};

// Mass Converter
document.getElementById("convert-mass").onclick = () => {
  const value = parseFloat(document.getElementById("mass").value);
  const from = document.getElementById("mass-from").value;
  const to = document.getElementById("mass-to").value;
  if (isNaN(value)) return (document.getElementById("massconv-result").textContent = "Enter a valid number.");

  let grams;
  if (from === "g") grams = value;
  else if (from === "kg") grams = value * 1000;
  else grams = value * 453.592;

  let result;
  if (to === "g") result = grams;
  else if (to === "kg") result = grams / 1000;
  else result = grams / 453.592;

  document.getElementById("massconv-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};

// Energy Converter
document.getElementById("convert-energy").onclick = () => {
  const value = parseFloat(document.getElementById("energy").value);
  const from = document.getElementById("energy-from").value;
  const to = document.getElementById("energy-to").value;
  if (isNaN(value)) return (document.getElementById("energy-result").textContent = "Enter a valid number.");

  let joules;
  if (from === "J") joules = value;
  else joules = value * 4.184; // 1 cal = 4.184 J

  let result;
  if (to === "J") result = joules;
  else result = joules / 4.184;

  document.getElementById("energy-result").textContent = `${value} ${from} = ${result.toFixed(3)} ${to}`;
};
