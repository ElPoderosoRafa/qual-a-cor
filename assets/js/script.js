const btnColor = document.querySelector('.btnColor');
const principal = document.querySelector('.principal')
const corSpan = document.querySelector('.corSelecionada');

// btnColor.addEventListener('click', function () {
//   console.error('Click no botao de mudar de cor');
// });

btnColor.addEventListener('click', changeColor);

function changeColor() {
  const cores = ['red', 'blue', 'green', 'purple', 'yellow', 'rgb(125, 89, 65)', 'rgba(125, 89, 65, 0.5)', 'hsl(120, 100%, 50%)', ' hsla(120, 50%, 50%, 0.5)'];

  /*['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
     '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
     '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
     '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
     '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
     '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
     '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
     '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
     '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
     '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']; */

  const randomNumber = Math.floor(Math.random() * cores.length);
  let corSelecionada = cores[randomNumber];

  principal.style.backgroundColor = corSelecionada;
  corSpan.textContent = corSelecionada;

  if (corSelecionada === 'red') {
    btnColor.style.backgroundColor = 'gray';
  } else {
    btnColor.style.backgroundColor = 'red';
  }
}