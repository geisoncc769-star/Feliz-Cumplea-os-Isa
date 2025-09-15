const messages = [
  "🎉 Hoy celebro tu vida, mi Isa hermosa 💖",
  "Aunque estemos lejos, mi corazón late por ti 🌍💕",
  "Tus ojos son estrellas que iluminan mi universo ✨👀",
  "Tu sonrisa es mi sol, mi razón de vivir ☀💞",
  "Eres lo más especial que tengo, mi todo 💝",
  "Feliz cumpleaños, amor de mi vida 🎂❤"
];

let index = 0;
const heart = document.getElementById("heart");
const messageDiv = document.getElementById("message");

// Música
const audio = new Audio("cancion.mp3");
audio.loop = true;

function typeMessage(text, callback) {
  let i = 0;
  messageDiv.textContent = "";
  const interval = setInterval(() => {
    messageDiv.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (callback) setTimeout(callback, 1500);
    }
  }, 80);
}

heart.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  }
  typeMessage(messages[index], () => {
    index = (index + 1) % messages.length;
  });
});
