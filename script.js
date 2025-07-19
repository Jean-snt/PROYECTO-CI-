document.getElementById("conversor-form").addEventListener("submit", function (e) {
  const valorInput = document.getElementById("temperatura").value;
  const resultadoDiv = document.getElementById("resultado");

  const de = document.getElementById("de-unidad").value;
  const a = document.getElementById("a-unidad").value;

  const valor = parseFloat(valorInput);

  if (isNaN(valor)) {
    resultadoDiv.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  if (de === a) {
    resultadoDiv.textContent = `El valor convertido es el mismo: ${valor}°`;
    return;
  }

  let convertido;

  if (de === "celsius" && a === "fahrenheit") {
    convertido = (valor * 9 / 5) + 32;
    resultadoDiv.textContent = `Resultado: ${convertido.toFixed(2)} °F`;
  } else if (de === "celsius" && a === "kelvin") {
    convertido = valor + 273.15;
    resultadoDiv.textContent = `Resultado: ${convertido.toFixed(2)} °K`;
  } else if (de === "fahrenheit" && a === "celsius") {
    convertido = (valor - 32) * 5 / 9;
    resultadoDiv.textContent = `Resultado: ${convertido.toFixed(2)} °C`;
  } else if (de === "fahrenheit" && a === "kelvin") {
    convertido = ((valor - 32) * 5 / 9) + 273.15;
    resultadoDiv.textContent = `Resultado: ${convertido.toFixed(2)} °K`;
  } else if (de === "kelvin" && a === "celsius") {
    convertido = valor - 273.15;
    resultadoDiv.textContent = `Resultado: ${convertido.toFixed(2)} °C`;
  } else if (de === "kelvin" && a === "fahrenheit") {
    convertido = ((valor - 273.15) * 9 / 5) + 32;
    resultadoDiv.textContent = `Resultado: ${convertido.toFixed(2)} °F`;
  } else {
    resultadoDiv.textContent = "Conversión no soportada.";
  }
});
