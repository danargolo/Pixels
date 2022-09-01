// Referência: https://www.w3schools.com/jsref/met_win_setTimeout.asp
window.onload = setTimeout(function selectedBlack() {
  document.getElementById('black').classList.add('selected');
}, 1000);

// Variáveis e Const
const randomBtn = document.querySelector('#button-random-color');
randomBtn.innerText = 'Cores aleatórias';
const selectedColor = document.getElementsByClassName('selected');
const color = document.querySelectorAll('.color');

// Função para selecionar.
function selector(par) {
  selectedColor[0].className = 'color';
  par.target.classList.add('selected'); // Target - Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
}

// Listeners 
for (let index = 1; index < color.length; index += 1) {
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

function btnRandomColor() {
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = randomColor();
  }
}
randomBtn.addEventListener('click', btnRandomColor);

// // console.log(document.getElementById('black').classList);
// let color = document.querySelectorAll('.color');
// console.log(color[0].style.backgroundColor = 'black');
