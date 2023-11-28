let tiempoRestante = 24 * 60 * 60;

// Función para actualizar el contador y mostrarlo en la página
function actualizarContador() {
  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;

  document.getElementById('contador').innerHTML = `${horas}:${minutos}:${segundos}`;

  // Reducir el tiempo restante en 1 segundo
  tiempoRestante--;

  // Si el tiempo restante llega a 0, detener el contador
  if (tiempoRestante < 0) {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = '¡Tiempo agotado!';
  }
}

// Llamar a la función actualizarContador cada segundo
const intervalo = setInterval(actualizarContador, 1000);