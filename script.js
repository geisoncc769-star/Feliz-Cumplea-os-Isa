const heart = document.querySelector('.heart');
const audio = document.getElementById('audio');

// Mensajes románticos
const messages = [
  "Eres mi razón de sonreír 💖",
  "Tus ojos iluminan mi mundo ✨",
  "Aunque estemos lejos, mi corazón está contigo 💌",
  "Te amo más de lo que las palabras pueden decir 🌹",
  "Cada día contigo es un regalo 🎁",
  "Feliz cumpleaños, mi Isa 🎂❤️",
  "Eres lo mejor que me pasó en la vida 💕",
  "La distancia no puede apagar lo que siento por ti 🌎❤️"
];

// Para mostrar mensajes flotando
function showMessage() {
  const msg = document.createElement('div');
  msg.className = 'floating-message';
  msg.innerText = messages[Math.floor(Math.random() * messages.length)];

  document.body.appendChild(msg);

  msg.style.left = Math.random() * 80 + 10 + "%"; // posición horizontal aleatoria
  msg.style.bottom = "20px";

  setTimeout(() => {
    msg.remove();
  }, 4000);
}

// Evento al tocar el corazón
let started = false;
heart.addEventListener('click', () => {
  if (!started) {
    audio.play(); // arranca la música solo con el primer toque
    started = true;
  }
  showMessage();
});