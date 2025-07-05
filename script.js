document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.popup-btn');
  const popup = document.getElementById('popup-jugador');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const tipo = boton.getAttribute('data-tipo');
      console.log("Jugador elegido:", tipo);
      popup.style.display = 'none';
    });
  });
});
