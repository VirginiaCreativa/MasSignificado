import { elements } from '../js/base';

function quitValidationPalabra() {
  return elements.palabraInput.addEventListener('mouseout', (ev) => {
    elements.formError_Palabra.style.display = 'none';
  });
}

function quitValidationDefinicion() {
  return elements.definicionInput.addEventListener('mouseout', (ev) => {
    elements.formError_Definicion.style.display = 'none';
  });
}

function quitValidationEjemplo() {
  return elements.definicionInput.addEventListener('mouseout', (ev) => {
    elements.formError_Ejemplo.style.display = 'none';
  });
}

function quitValidationSinonimo() {
  return elements.sinominosInput.addEventListener('mouseout', (ev) => {
    elements.formError_Sinonimos.style.display = 'none';
    elements.formError_Sinonimos2.style.display = 'none';
    elements.formError_Sinonimos3.style.display = 'none';
    elements.formError_Sinonimos4.style.display = 'none';
  });
}

export const validationPalabra = elements.palabraInput.addEventListener(
  'input',
  (ev) => {
    const value = ev.target.textLength;
    if (value <= 3) {
      elements.formError_Palabra.style.display = 'block';
    } else {
      elements.formError_Palabra.style.display = 'none';
    }
    quitValidationPalabra();
  }
);

export const validationDefinicion = elements.definicionInput.addEventListener(
  'input',
  (ev) => {
    const value = ev.target.textLength;
    if (value <= 10) {
      elements.formError_Definicion.style.display = 'block';
    } else {
      elements.formError_Definicion.style.display = 'none';
    }
    quitValidationEjemplo();
  }
);

export const validationEjemplos = elements.ejemploInput.addEventListener(
  'input',
  (ev) => {
    const value = ev.target.textLength;
    if (value <= 10) {
      elements.formError_Ejemplo.style.display = 'block';
    } else {
      elements.formError_Ejemplo.style.display = 'none';
    }
    quitValidationDefinicion();
  }
);

export const validationSinonimo = elements.sinominosInput.addEventListener(
  'input',
  (ev) => {
    const value = ev.target.textLength;
    if (value <= 3) {
      elements.formError_Sinonimos.style.display = 'block';
    } else {
      elements.formError_Sinonimos.style.display = 'none';
    }
    quitValidationSinonimo();
  }
);

elements.formError.addEventListener('mouseenter', () => {
  elements.formError_Palabra.style.display = 'none';
  elements.formError_Definicion.style.display = 'none';
  elements.formError_Ejemplo.style.display = 'none';
  elements.formError_Sinonimos.style.display = 'none';
});

elements.formError.addEventListener('mouseoute', () => {
  elements.formError_Palabra.style.display = 'none';
  elements.formError_Definicion.style.display = 'none';
  elements.formError_Ejemplo.style.display = 'none';
  elements.formError_Sinonimos.style.display = 'none';
});
