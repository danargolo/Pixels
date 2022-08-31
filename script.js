// Referência: https://www.w3schools.com/jsref/met_win_setTimeout.asp
window.onload = setTimeout(function selectedBlack() {
  document.getElementById('black').className = 'selected';
}, 1500);

// Variáveis e Const
const selectedColor = document.getElementsByClassName('selected');
const black = document.getElementById('black');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');


// Função para selecionar.
function selector(par) {
  selectedColor[0].className = 'color';
  par.target.className = 'selected'; // Target - Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
}

// Listeners
black.addEventListener('click', selector);
color2.addEventListener('click', selector);
color3.addEventListener('click', selector);
color4.addEventListener('click', selector);

console.log(document.getElementById('black').className);

console.log(document.getElementById('black').style.backgroundColor);
