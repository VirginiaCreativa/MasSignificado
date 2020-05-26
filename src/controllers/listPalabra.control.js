import { getInnerAdd } from '../views/listPalabra.view';
import { turnOnSearch } from '../views/search.view';

import { elements } from '../js/base';
import firebase from '../config/FirebaseConfig';

const db = firebase.firestore();
const docRef = db.collection('listPalabras');

async function showContentListPalabra() {
  try {
    const doc = await docRef
      .orderBy('palabra')
      .get()
      .then((querySnapshot) => {
        turnOnSearch(querySnapshot.docs.length);
        if (querySnapshot.docs.length === 0) {
          elements.boxContentApunte.style.display = 'none';
          elements.boxAddPalabra.style.display = 'block';
        }

        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            let pal = doc.data().palabra;
            let def = doc.data().definicion;
            let sin = doc.data().sinonimos;
            let gram = doc.data().gramatical;

            let ej = doc.data().ejemplo || 'no tiene escrito';
            getInnerAdd(doc.id, pal, def, sin, gram, ej);
          } else {
            console.log('No such document!');
          }
        });
      });

    return doc;
  } catch (err) {
    console.log('Error getting documents', err);
  }
}

showContentListPalabra();

window.handleBtnElimina = (id) => {
  docRef
    .doc(id)
    .delete()
    .then(() => {
      window.location.reload();
      console.log('Elimina: ', id);
    });
};
