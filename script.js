const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const load = JSON.parse(localStorage.getItem('colorPalette'));

document.getElementById('black').classList.add('selected')

if (localStorage.colorPalette) {
  window.onload = function loadColor () {
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = load[index];
    }
  }
}
// Função para selecionar. Target - Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
function selector(par) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
    par.target.classList.add('selected');
  } 
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
  let palette = [];
  for (let index = 0; index < color.length; index += 1) {
    if (index > 0) {
      color[index].style.backgroundColor = randomColor();
    }
    palette.push(color[index].style.backgroundColor);
    localStorage.clear('colorPalette');
    localStorage.setItem('colorPalette', JSON.stringify(palette));
  }
}
randomBtn.addEventListener('click', btnRandomColor);



function colorPixel(param) {
  const selectedColor = document.querySelector('.selected');
  param.target.style.backgroundColor = selectedColor.style.backgroundColor;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', colorPixel);
}

const clearBtn = document.querySelector('#clear-board');
clearBtn.innerText = 'Limpar';

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearBtn.addEventListener('click', clear);


// const palette = []
//   for(let index = 0; index < color.length; index += 1) {
//     palette.push(color[index].style.backgroundColor);
//   }

    // localStorage.clear();
    // window.localStorage.setItem('colorPalette', JSON.stringify(color[index].style.backgroundColor));
    // console.log(color[index]);
