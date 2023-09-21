const selectedElement = document.getElementById("selected");
const sineButton = document.getElementById("sine");
const squareButton = document.getElementById("square");
const sawButton = document.getElementById("sawtooth");
const triangleButton = document.getElementById("triangle");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const attackInput = document.getElementById("attack");
const decayInput = document.getElementById("decay");
const sustainInput = document.getElementById("sustain");
const releaseInput = document.getElementById("release");
const delayTimeInput = document.getElementById("delayTime");
const feedbackInput = document.getElementById("feedback");

let delay;
let synth;

window.addEventListener("load", () => {
  delay = new Tone.FeedbackDelay(1.0, 0.5).toDestination();
  synth = new Tone.PolySynth().connect(delay);
});

sineButton.addEventListener("click", () => {
  synth.set({
    oscillator: {
      type: "sine",
    },
  });
  selectedElement.innerText = "Selected: Sine";
});

squareButton.addEventListener("click", () => {
  synth.set({
    oscillator: {
      type: "square",
    },
  });
  selectedElement.innerText = "Selected: Square";
});

sawButton.addEventListener("click", () => {
  synth.set({
    oscillator: {
      type: "sawtooth",
    },
  });
  selectedElement.innerText = "Selected: SawTooth";
});

triangleButton.addEventListener("click", () => {
  synth.set({
    oscillator: {
      type: "triangle",
    },
  });
  selectedElement.innerText = "Selected: Triangle";
});

attackInput.addEventListener("change", () => {
  synth.set({
    envelope: {
      attack: attackInput.value,
    },
  });
});

decayInput.addEventListener("change", () => {
  synth.set({
    envelope: {
      decay: decayInput.value,
    },
  });
});

sustainInput.addEventListener("change", () => {
  synth.set({
    envelope: {
      sustain: sustainInput.value,
    },
  });
});

releaseInput.addEventListener("change", () => {
  synth.set({
    envelope: {
      release: releaseInput.value,
    },
  });
});

delayTimeInput.addEventListener("change", () => {
  delay.delayTime.value = delayTimeInput.value;
});

feedbackInput.addEventListener("input", () => {
  delay.feedback.value = feedbackInput.value;
});

// All the above codes come from https://ju.slides.com/garrit/cc2023-generative-sound?token=dXZj41Ep#/8/11 Access time: 2023-09-20
const frereJacquesMusicButton = document.getElementById("frereJacquesMusic");
frereJacquesMusicButton.addEventListener("click", playFrereJacquesMusic);

function playFrereJacquesMusic() {
  const frereJacquesNotes = [
    "C4",
    "D4",
    "E4",
    "C4",
    "C4",
    "D4",
    "E4",
    "C4",
    "E4",
    "F4",
    "G4",
    "E4",
    "F4",
    "G4",
    "G4",
    "A4",
    "G4",
    "F4",
    "E4",
    "C4",
    "G4",
    "A4",
    "G4",
    "F4",
    "E4",
    "C4",
    "G4",
    "C5",
    "G4",
    "C4",
    "G4",
    "C5",
    "G4",
    "C4",
  ];
  playMusic(frereJacquesNotes);
}

const happyBirthdayMusicButton = document.getElementById("happyBirthdayMusic");
happyBirthdayMusicButton.addEventListener("click", playHappyBirthdayMusic);

function playHappyBirthdayMusic() {
  const happyBirthdayNotes = [
    "C4",
    "C4",
    "D4",
    "C4",
    "F4",
    "E4",
    "C4",
    "C4",
    "D4",
    "C4",
    "G4",
    "F4",
    "C4",
    "C4",
    "C5",
    "A4",
    "F4",
    "E4",
    "D4",
    "B4",
    "B4",
    "A4",
    "F4",
    "G4",
    "F4",
  ];
  playMusic(happyBirthdayNotes);
}

const odeToJoyMusicButton = document.getElementById("odeToJoyMusic");
odeToJoyMusicButton.addEventListener("click", playOdeToJoyMusic);

function playOdeToJoyMusic() {
  const odeToJoyNotes = [
    "E4",
    "E4",
    "F4",
    "G4",
    "G4",
    "F4",
    "E4",
    "D4",
    "C4",
    "C4",
    "D4",
    "E4",
    "E4",
    "D4",
    "D4",
    "E4",
    "E4",
    "F4",
    "G4",
    "G4",
    "F4",
    "E4",
    "D4",
    "C4",
    "C4",
    "D4",
    "E4",
    "D4",
    "C4",
    "C4",
    "D4",
    "D4",
    "E4",
    "C4",
    "D4",
    "E4",
    "F4",
    "E4",
    "C4",
    "D4",
    "D4",
    "C4",
    "D4",
    "E4",
    "C4",
    "D4",
    "E4",
    "F4",
    "E4",
    "D4",
    "C4",
    "D4",
    "D4",
    "C4",
  ];
  playMusic(odeToJoyNotes);
}

const eineKleineMusicButton = document.getElementById("eineKleineMusic");
eineKleineMusicButton.addEventListener("click", playEineKleineMusic);

function playEineKleineMusic() {
  const eineKleineNotes = [
    "G4",
    "D5",
    "D5",
    "E5",
    "C5",
    "B4",
    "A4",
    "A4",
    "B4",
    "C5",
    "D5",
    "C5",
    "B4",
    "A4",
    "G4",
    "A4",
    "E5",
    "E5",
    "F5",
    "D5",
    "C5",
    "B4",
    "A4",
    "G4",
    "F4",
    "E5",
    "D5",
    "C5",
    "B4",
    "A4",
    "G4",
  ];
  playMusic(eineKleineNotes);
}

function playMusic(scale) {
  let time = 0;
  for (let note of scale) {
    synth.triggerAttackRelease(note, "4n", `+${time}`);
    time += 0.5;
  }
}

window.addEventListener("click", () => {
  Tone.start();
});
