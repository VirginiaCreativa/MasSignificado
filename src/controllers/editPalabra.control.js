import firebase from '../config/FirebaseConfig';
import { elements } from '../js/base';

const db = firebase.firestore();
const docRef = db.collection('listPalabras');

window.handleBtnEdit = (id) => {
  elements.popEdit.style.display = 'flex';
  elements.popEdit.style.opacity = '1';
  elements.boxEdit.style.display = 'block';

  docRef
    .doc(id)
    .get()
    .then((doc) => {
      elements.palabraInputEditable.value = doc.data().palabra;
      elements.definicionInputEditable.value = doc.data().definicion[0];
      elements.definicionInputEditable2.value = doc.data().definicion[1];
      elements.definicionInputEditable3.value = doc.data().definicion[2];
      elements.ejemploInputEditable.value = doc.data().ejemplo[0];
      elements.ejemploInputEditable2.value = doc.data().ejemplo[1];
      elements.ejemploInputEditable3.value = doc.data().ejemplo[2];
      elements.sinominosInputEditable.value = doc.data().sinonimos[0];
      elements.sinominosInputEditable2.value = doc.data().sinonimos[1];
      elements.sinominosInputEditable3.value = doc.data().sinonimos[2] || '';
      elements.sinominosInputEditable4.value = doc.data().sinonimos[3] || '';
      elements.gramaInputEditable.value = doc.data().gramatical;

      const gram = doc.data().gramatical;
      if (gram === 'Verbo') {
        elements.gramaInputEditable[0].checked = true;
      } else if (gram === 'Sustantivo') {
        elements.gramaInputEditable[1].checked = true;
      } else if (gram === 'Adjetivo') {
        elements.gramaInputEditable[2].checked = true;
      } else {
        elements.gramaInputEditable[3].checked = true;
      }
    });

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
