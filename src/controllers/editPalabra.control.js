import firebase from '../config/FirebaseConfig';
import { elements } from '../js/base';

const db = firebase.firestore();
const docRef = db.collection('listPalabras');

window.handleBtnEdit = (id, pal, def, sin, gram, ej) => {
  elements.popEdit.style.display = 'flex';
  elements.popEdit.style.opacity = '1';
  elements.boxEdit.style.display = 'block';

  elements.palabraInputEditable.value = pal;
  elements.definicionInputEditable.value = def;
  elements.sinominosInputEditable.value = sin;
  elements.gramaInputEditable.value = gram;

  if (elements.ejemploInputEditable.value === null) {
    elements.ejemploInputEditable.value = 'No tienes escrito';
  } else {
    elements.ejemploInputEditable.value = ej;
  }
  if (gram === 'Verbo') {
    elements.gramaInputEditable[0].checked = true;
  } else if (gram === 'Sustantivo') {
    elements.gramaInputEditable[1].checked = true;
  } else if (gram === 'Adjetivo') {
    elements.gramaInputEditable[2].checked = true;
  } else {
    elements.gramaInputEditable[3].checked = true;
  }

  elements.btnUpdateEditable.addEventListener('click', (ev) => {
    ev.preventDefault();

    const itemGram = () => {
      const radios = elements.gramaInputEditable;
      let select;
      for (let i = 0; i < radios.length; i += 1) {
        if (radios[i].checked) {
          select = radios[i].value;
        }
      }
      return select;
    };
    const itemPalabra = elements.palabraInputEditable.value;
    const itemDefinicion = elements.definicionInputEditable.value;
    const itemEjemplo = elements.ejemploInputEditable.value;
    const itemSinomino = elements.sinominosInputEditable.value;

    return docRef
      .doc(id)
      .update({
        date: Date.now(),
        palabra: itemPalabra,
        definicion: itemDefinicion,
        sinonimos: itemSinomino,
        ejemplo: itemEjemplo,
        gramatical: itemGram(),
      })
      .then(() => {
        window.location.reload();
        elements.popEdit.style.display = 'none';
        elements.popEdit.style.opacity = '0';
        elements.boxEdit.style.display = 'none';
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  });
};

elements.btnExitEditable.addEventListener('click', (e) => {
  elements.popEdit.style.display = 'none';
  elements.popEdit.style.opacity = '0';
  elements.boxEdit.style.display = 'none';
});
