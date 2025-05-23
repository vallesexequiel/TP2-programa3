function validar() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const edad = parseInt(document.getElementById('edad').value);
  const altura = parseInt(document.getElementById('altura').value);
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje');

  let errores = [];

  if (!nombre || nombre.length > 50) errores.push("Nombre inválido.");
  if (!apellido || apellido.length > 50) errores.push("Apellido inválido.");
  if (edad < 0) errores.push("Edad no puede ser negativa.");
  else if (edad < 18) errores.push("Debe ser mayor de edad.");
  if (altura < 0 || altura > 230) errores.push("Altura inválida.");
  if (!email.includes("@")) errores.push("Correo inválido.");

  if (errores.length > 0) {
    mensaje.style.color = "red";
    mensaje.innerText = errores.join(" ");
  } else {
    mensaje.style.color = "green";
    mensaje.innerText = "Todos los datos son válidos.";
  }
}
