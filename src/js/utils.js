export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

export const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export const copyToClipBoard = (element) => {
  const text = element.querySelector('.text').innerText;
  const dataCopy = element.querySelector('.alert').getAttribute('data-copy');
  const button = element.querySelector('.btn');

  navigator.clipboard.writeText(`${dataCopy? dataCopy: text}`).then(()=>{
    const title = button.getAttribute('data-title');

    button.setAttribute('data-title', 'Copied');
    button.querySelector('.bi').className = 'bi bi-check2';

    setTimeout(()=>{
      button.setAttribute('data-title', title);
      button.querySelector('.bi').className = 'bi bi-clipboard';
    }, 1000);
  });
};
