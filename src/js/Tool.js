import {createElement, renderElement, RenderPosition} from './utils';

const createToolView = ({text, isCopied}) =>{
  return `
  <div class="container mt-3">
  
      <div class="alert alert-success" role="alert">
     ${text}
    </div>
    <button type="button" class="btn btn-success" >
                Copy to clipboard
    </button>
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

  #copyToClipBoard(e) {
    const text = this.#tool.text;
    navigator.clipboard.writeText(`${text} `).then(()=>{
      this.#tool = {...this.#tool, isCopied: true};
      e.target.innerText='Copied';
    });
  }

  init() {
    renderElement(this.#container, this.element, RenderPosition.AFTERBEGIN);
    this.element.querySelector('.btn')
        .addEventListener('click', (e)=>{
          this.#copyToClipBoard(e);
        });
  }
}

