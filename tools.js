const molarMass = {
  H: 1.008, He: 4.0026, C: 12.011, N: 14.007, O: 15.999, Na: 22.990, Cl: 35.45, Fe: 55.845
};

document.getElementById("calc").onclick = () => {
  const el = document.getElementById("element").value.trim();
  const mass = molarMass[el];
  document.getElementById("mass-result").textContent =
    mass ? `${el} has a molar mass of ${mass} g/mol` : "Element not found.";
};

document.getElementById("convert").onclick = () => {
  const c = parseFloat(document.getElementById("celsius").value);
  if (isNaN(c)) {
    document.getElementById("temp-result").textContent = "Enter a valid number.";
    return;
  }
  const k = c + 273.15;
  document.getElementById("temp-result").textContent = `${c} °C = ${k.toFixed(2)} K`;
};
