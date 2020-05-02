export default class AnimaNumeros {
  constructor(numeros, observerTarget, obseverClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.obseverTarget = document.querySelector(observerTarget);
    this.obseverClass = obseverClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com numero em seu texto
  // incrementa de a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar número para cada
  // número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.contructor.animaNumeros(numero));
  }

  // ]função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.obseverClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adciona o MutationObserver para verificar
  // quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.obseverTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
