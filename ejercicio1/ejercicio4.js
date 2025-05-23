function calcularIMC() {
  const estatura = parseFloat(document.getElementById('estatura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  if (estatura > 0 && peso > 0) {
    const imc = peso / (estatura * estatura);
    alert(`Tu IMC es: ${imc.toFixed(2)}`);
  } else {
    alert('Por favor, ingresa valores válidos.');
  }
}