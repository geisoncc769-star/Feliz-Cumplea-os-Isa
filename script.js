cconst messages = [
  "🎉 Feliz cumpleaños mi Isa 💖",
  "Aunque estemos lejos, mi corazón late por ti 💕",
  "Tus ojos son mi luz, tu sonrisa mi alegría ✨",
  "Eres lo más hermoso que tengo en la vida 💞",
  "Cada día te amo más, Isa 🌹",
  "Eres mi todo, mi razón de sonreír 💝"
];

let index = 0;
const heart = document.getElementById("heart");
const messageDiv = document.getElementById("message");

// Cargar música
const audio = new Audio("song.mp3");
audio.loop = true;

heart.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  }
  messageDiv.textContent = messages[index];
  index = (index + 1) % messages.length;
});
