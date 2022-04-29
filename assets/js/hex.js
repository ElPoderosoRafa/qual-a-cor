const btn = document.querySelector('.btnColor');
const principal_pag = document.querySelector('.principal')
const colorSpan = document.querySelector('.corSelecionada');

// btnColor.addEventListener('click', function () {
//   console.error('Click no botao de mudar de cor');
// });
const coresHex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function changeColorHex() {
  let corHex = '#';

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * coresHex.length);
    corHex += coresHex[randomNum];
  }
  principal_pag.style.backgroundColor = corHex;
  colorSpan.textContent = corHex;
}

btn.addEventListener('click', changeColorHex);