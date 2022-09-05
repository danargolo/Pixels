const color = document.querySelectorAll('.color');
const pixel = document.getElementsByClassName('pixel');

document.getElementById('black').classList.add('selected');

const load = JSON.parse(localStorage.getItem('colorPalette'));
function loadPalette() {
  if (localStorage.colorPalette) {
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = load[index];
    }
  }
}

window.addEventListener('load', loadPalette);

const pos = JSON.parse(localStorage.getItem('pixelBoard'));
function continuePaint() {
  if (localStorage.pixelBoard) {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = pos[index];
    }
  }
}

window.addEventListener('load', continuePaint);

// Função para selecionar. Target - Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
function selector(param) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
    param.target.classList.add('selected');
  }
}

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selector);
}

function colorPixel(param) {
  const comp = param;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  comp.target.style.backgroundColor = selectedColor;
  const colorPos = [];
  for (let index = 0; index < pixel.length; index += 1) {
    colorPos.push(pixel[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(colorPos));
}

function clickColor() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', colorPixel);
  }
}
clickColor();

// Boards

const userSelect = document.getElementById('board-size');

function removePixel() {
  for (let index = pixel.length - 1; index >= 0; index -= 1) {
    pixel[index].remove();
  }
}

function createPixel(a) {
  removePixel();
  for (let index = 0; index < a ** 2; index += 1) {
    const size = document.createElement('div');
    document.getElementById('pixel-board').appendChild(size);
    size.className = 'pixel';
    size.style.backgroundColor = 'white';
    document.getElementById('pixel-board').style.width = `${(a * 44)}px`; // 46.25
    document.getElementById('pixel-board').style.height = `${(a * 44)}px`;
  }
  clickColor();
}

const size = JSON.parse(localStorage.getItem('boardSize'));
function loadBoard() {
  if (localStorage.boardSize) {
    userSelect.value = size;
    createPixel(size);
  } else {
    createPixel(5);
  }
}
loadBoard();

function ruler(par) {
  if (par === '') { alert('Board inválido!'); }
  if (par < 5) { userSelect.value = 5; }
  if (par > 50) { userSelect.value = 50; }
}

function boardSize() {
  localStorage.setItem('boardSize', JSON.stringify(userSelect.value));
}

const boardBtn = document.getElementById('generate-board');
boardBtn.innerHTML = 'VQV';
boardBtn.addEventListener('click', () => {
  localStorage.clear('pixelBoard');
  ruler(userSelect.value);
  createPixel(userSelect.value);
  boardSize();
});

// Random color - Referência Template string: https://blog.cod3r.com.br/template-strings/
function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
color[0].style.backgroundColor = 'rgb(0, 0, 0)';
for (let index = 1; index < color.length; index += 1) {
  color[index].style.backgroundColor = randomColor();
}

const randomBtn = document.querySelector('#button-random-color');
randomBtn.innerText = 'Cores aleatórias';

function btnRandomColor() {
  const palette = [];
  for (let index = 0; index < color.length; index += 1) {
    if (index > 0) {
      color[index].style.backgroundColor = randomColor();
    }
    palette.push(color[index].style.backgroundColor);
    localStorage.setItem('colorPalette', JSON.stringify(palette));
  }
}

randomBtn.addEventListener('click', btnRandomColor);

const clearBtn = document.querySelector('#clear-board');
clearBtn.innerText = 'Limpar';

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
    localStorage.clear('pixelBoard');
    localStorage.clear('colorPalette'); // Limpa storage ao clicar clear.
  }
}
clearBtn.addEventListener('click', clear);
