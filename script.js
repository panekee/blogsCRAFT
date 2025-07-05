document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-chill').addEventListener('click', () => elegirJugador('chill'));
  document.getElementById('btn-tryhard').addEventListener('click', () => elegirJugador('tryhard'));
  document.getElementById('btn-creativo').addEventListener('click', () => elegirJugador('creativo'));
});

function elegirJugador(tipo) {
  console.log("Jugador elegido:", tipo);
  document.getElementById('popup-jugador').style.display = 'none';
}

function cerrarPopup() {
  document.getElementById('popup-jugador').style.display = 'none';
}
