import firebase from '../config/FirebaseConfig';
import { elements } from '../js/base';
import * as addSubmitView from '../views/addSubmit.view';

const db = firebase.firestore();
const docRef = db.collection('listPalabras');

elements.handleBtnAdd.addEventListener('click', (ev) => {
  let isShow = elements.boxContentApunte.style.display === 'none';

  elements.boxContentApunte.style.display = isShow ? 'block' : 'none';
  elements.boxAddPalabra.style.display = !isShow ? 'block' : 'none';

  if (!isShow) {
    elements.handleBtnAdd.classList.remove('btnShowAdd');
    elements.handleBtnAdd.classList.add('btnHideAdd');
    ev.target.classList.remove('bx-plus');
    ev.target.classList.add('bx-x');
  } else {
    elements.handleBtnAdd.classList.remove('btnHideAdd');
    elements.handleBtnAdd.classList.add('btnShowAdd');
    ev.target.classList.add('bx-plus');
    ev.target.classList.remove('bx-x');
  }
});

elements.addSubmitForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const itemPalabra = elements.palabraInput.value;
  const itemDefinicion = elements.definicionInput.value;
  const itemDefinicion2 = elements.definicionInput_2.value || null;
  const itemDefinicion3 = elements.definicionInput_3.value || null;
  const itemEjemplo = elements.ejemploInput.value;
  const itemEjemplo2 = elements.ejemploInput_2.value || null;
  const itemEjemplo3 = elements.ejemploInput_3.value || null;
  const itemSinomino = elements.sinominosInput.value;
  const itemSinomino2 = elements.sinominosInput_2.value;
  const itemSinomino3 = elements.sinominosInput_3.value || null;
  const itemSinomino4 = elements.sinominosInput_4.value || null;

  let definicionesArray = [];
  let ejemplosArray = [];
  let sinonminosArray = [];

  definicionesArray.push(itemDefinicion, itemDefinicion2, itemDefinicion3);
  ejemplosArray.push(itemEjemplo, itemEjemplo2, itemEjemplo3);
  sinonminosArray.push(
    itemSinomino,
    itemSinomino2,
    itemSinomino3,
    itemSinomino4
  );

  let filteredDefin = definicionesArray.filter((el) => el);
  let filteredEje = ejemplosArray.filter((el) => el);
  let filteredSin = sinonminosArray.filter((el) => el);
  const itemGram = () => {
    const radios = elements.gramaInput;
    let select;
    for (let i = 0; i < radios.length; i += 1) {
      if (radios[i].checked) {
        select = radios[i].value;
      }
    }
    return select;
  };

  if (itemPalabra && itemDefinicion && itemSinomino && itemGram()) {
    docRef
      .add({
        date: Date.now(),
        palabra: itemPalabra,
        definicion: filteredDefin,
        ejemplo: filteredEje,
        sinonimos: filteredSin,
        gramatical: itemGram(),
      })
      .then((doc) => {
        window.location.reload();
        elements.boxContentApunte.style.minHeight = '55vh';
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  } else {
    elements.formError.style.display = 'block';
  }

  elements.ejemploInput.value = '';
  elements.ejemploInput_2.value = '';
  elements.ejemploInput_3.value = '';
  elements.palabraInput.value = '';
  elements.definicionInput.value = '';
  elements.definicionInput_2.value = '';
  elements.definicionInput_3.value = '';
  elements.sinominosInput.value = '';
  elements.sinominosInput_2.value = '';
  elements.sinominosInput_3.value = '';
  elements.sinominosInput_4.value = '';
});
