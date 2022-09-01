localStorage.getItem('colorPalette');

// Variáveis e Const

const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

document.getElementById('black').classList.add('selected')
// Função para selecionar.
function selector(par) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
    par.target.classList.add('selected');
  } // Target - Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
}

// Listeners
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', selector);
}

// // Random color - Referência Template string: https://blog.cod3r.com.br/template-strings/
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
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = randomColor();
  }
}
randomBtn.addEventListener('click', btnRandomColor);

function colorPixel(par) {
  const selectedColor = document.getElementsByClassName('selected');
  par.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', colorPixel);
}

const clearBtn = document.querySelector('#clear-board')
clearBtn.innerText = 'Limpar;'

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearBtn.addEventListener('click', clear);
