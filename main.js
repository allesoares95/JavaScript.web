function playMidi(idElement) {
  document.querySelector(idElement).play();
}

const listMidi = document.querySelectorAll('.tecla');
let counter = 0;

while (counter < listMidi.length) {
  const key = listMidi[counter];
  const instrument = key.classList[1];
  // template string
  const idAudio = `#som_${instrument}`;

  key.onclick = function() {
    playMidi(idAudio);
  };

  counter = counter + 1;
}