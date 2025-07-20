document.getElementById("conversor-form").addEventListener("submit", function (e) {
  const valorInput = document.getElementById("temperatura").value;
  const unidadOrigen = document.getElementById("de-unidad").value;
  const unidadDestino = document.getElementById("a-unidad").value;
  const resultadoDiv = document.getElementById("resultado");

  const valor = parseFloat(valorInput);

  if (isNaN(valor)) {
    mostrarResultado("Por favor, ingresa un número válido.");
    return;
  }

  if (unidadOrigen === unidadDestino) {
    mostrarResultado(`El valor convertido es el mismo: ${valor}°`);
    return;
  }

  const convertido = convertirTemperatura(valor, unidadOrigen, unidadDestino);
  mostrarResultado(`Resultado: ${convertido.toFixed(2)} °${unidadDestino[0].toUpperCase()}`);
});

function convertirTemperatura(valor, de, a) {
  const conversiones = {
    celsius: {
      fahrenheit: v => v * 9 / 5 + 32,
      kelvin: v => v + 273.15
    },
    fahrenheit: {
      celsius: v => (v - 32) * 5 / 9,
      kelvin: v => ((v - 32) * 5 / 9) + 273.15
    },
    kelvin: {
      celsius: v => v - 273.15,
      fahrenheit: v => ((v - 273.15) * 9 / 5) + 32
    }
  };

  return conversiones[de][a](valor);
}

function mostrarResultado(mensaje) {
  document.getElementById("resultado").textContent = mensaje;
}
