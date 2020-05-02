import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria div contendo informações contendo
  // o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;

    return div;
  }

  // Preenche cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima so números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais atrvés de um arquivo json
  // e cria cada animal utilizando o crateAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera resposta e transforma em json
      const animaisRespose = await fetch(url);
      const animaisJSON = await animaisRespose.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimal(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
