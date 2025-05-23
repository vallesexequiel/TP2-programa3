function calcularArea() {
  const b1 = parseFloat(document.getElementById('b1').value);
  const h1 = parseFloat(document.getElementById('h1').value);
  const b2 = parseFloat(document.getElementById('b2').value);
  const h2 = parseFloat(document.getElementById('h2').value);

  if ([b1, h1, b2, h2].every(val => val > 0)) {
    const area = (b1 * h1) - (b2 * h2);
    document.getElementById('resultado').innerText = `Área: ${area.toFixed(2)} m²`;
  } else {
    document.getElementById('resultado').innerText = 'Datos inválidos.';
  }
}