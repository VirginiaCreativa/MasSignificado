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
      elements.ejemploInputEditable.value = doc.data().ejemplo[0] || '';
      elements.ejemploInputEditable2.value = doc.data().ejemplo[1] || '';
      elements.ejemploInputEditable3.value = doc.data().ejemplo[2] || '';
      elements.sinominosInputEditable.value = doc.data().sinonimos[0] || '';
      elements.sinominosInputEditable2.value = doc.data().sinonimos[1] || '';
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

    const itemPalabra = elements.palabraInputEditable.value;
    const definicionInputEditable = elements.definicionInputEditable.value;
    const definicionInputEditable2 = elements.definicionInputEditable2.value;
    const definicionInputEditable3 = elements.definicionInputEditable3.value;
    const ejemploInputEditable = elements.ejemploInputEditable.value;
    const ejemploInputEditable2 = elements.ejemploInputEditable2.value;
    const ejemploInputEditable3 = elements.ejemploInputEditable3.value;
    const sinominosInputEditable = elements.sinominosInputEditable.value;
    const sinominosInputEditable2 = elements.sinominosInputEditable2.value;
    const sinominosInputEditable3 = elements.sinominosInputEditable3.value;
    const sinominosInputEditable4 = elements.sinominosInputEditable4.value;

    let definicionesArray = [];
    let ejemplosArray = [];
    let sinonminosArray = [];

    definicionesArray.push(
      definicionInputEditable,
      definicionInputEditable2,
      definicionInputEditable3
    );
    ejemplosArray.push(
      ejemploInputEditable,
      ejemploInputEditable2,
      ejemploInputEditable3
    );
    sinonminosArray.push(
      sinominosInputEditable,
      sinominosInputEditable2,
      sinominosInputEditable3,
      sinominosInputEditable4
    );

    let filteredDefin = definicionesArray.filter((el) => el);
    let filteredEje = ejemplosArray.filter((el) => el);
    let filteredSin = sinonminosArray.filter((el) => el);

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

    return docRef
      .doc(id)
      .update({
        date: Date.now(),
        palabra: itemPalabra,
        definicion: filteredDefin,
        ejemplo: filteredEje,
        sinonimos: filteredSin,
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
