const playButton = document.getElementById("start-button");
const piano = document.getElementById("piano");
const keys = document.querySelectorAll(".key");
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let count = 0;

// Fonction qui joue une note
function playNote(note) {
  const audio = document.getElementById(note);
  audio.currentTime = 0;
  audio.play();
  count++;
  if (count >= 20) {
    alert("Vous êtes très doué, continuez ainsi !");
  }
}

// Ajout de la fonctionnalité de clic aux touches du piano
keys.forEach((key) => {
  key.addEventListener("mousedown", () => {
    key.classList.add("active");
    playNote(key.dataset.note);
  });

  key.addEventListener("mouseup", () => {
    key.classList.remove("active");
  });

  key.addEventListener("mouseleave", () => {
    key.classList.remove("active");
  });
});

// Fonction qui affiche le piano et cache le bouton de démarrage
function showPiano() {
  playButton.style.display = "none";
  piano.style.display = "flex";
}

// Événement de clic sur le bouton de démarrage
playButton.addEventListener("click", showPiano);
