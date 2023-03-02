function playMidi(selectElement) {
  const element = document.querySelector(selectElement);

  if (element != null && element.localName === 'audio') {
    element.play();
  } else {
    alert('Elemento não encontrado ou seletor inválido !');
  }
}

const listMidi = document.querySelectorAll('.tecla');

for (let counter = 0; counter < listMidi.length; counter++) {
  const key = listMidi[counter];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`; // template string

  key.onclick = function () {
    playMidi(idAudio);
  };

  key.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      key.classList.add('ativa');
    }
  };

  key.onkeyup = function () {
    key.classList.remove('ativa'); // remove
  };
}
