import {copyToClipBoard, createElement,
  renderElement, RenderPosition} from './utils';

const createToolView = ({text, dataCopy}) =>{
  const dataCopyHtml = dataCopy ? `data-copy="${dataCopy}"` : '';
  return `
  <div class="container mt-5">
      <div class="alert alert-light d-flex flex-sm-row mb-3 align-items-center 
      justify-content-between"  role="alert" ${dataCopyHtml}>
      <div class="text"> ${text} </div>
      <button data-tooltip class="btn btn-light" data-title="Copy to clipboard">
        <i class="bi bi-clipboard"></i>
      </button>
    </div>
  </div>
  `;
};


export default class Tool {
  #tool = null;
  #element = null;
  #container = null;

  constructor(props, container) {
    this.#tool = props;
    this.#container = container;
    this.init();
  }

  get template() {
    return createToolView(this.#tool);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  };


  init() {
    renderElement(this.#container, this.element, RenderPosition.BEFOREEND);
    this.element.querySelector('.btn')
        .addEventListener('click', ()=> copyToClipBoard(this.element));
  }
}

