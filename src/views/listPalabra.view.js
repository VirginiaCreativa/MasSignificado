import { elements } from '../js/base';
import { getFirtsLetter } from '../js/common';

const getListsSinom = (value) =>
  value.map((item) => `<li>${item}</li>`).join('');

const getListsEjemplo = (value) =>
  value.map((item) => `<li>${item}</li>`).join('');

const getListsDefin = (value) =>
  value.map((item) => `<li>${item}</li>`).join('');

export const getInnerAdd = (doc, pal, def, sin, gram, ej) => {
  let contentido = `<li data-id=${doc}>
      <div class="boxHeading">
        <div class="item_palabra">
          <h3>${pal}</h3>
        </div>
        <div class="item_control justify-content-end">
          <button class="btnEdit" data-editid=${doc} onclick="handleBtnEdit('${doc}')">
            <i class='bx bx-edit-alt'></i>
          </button>
            <button class="btnElimina" data-id=${doc} onclick="handleBtnElimina('${doc}')">
            <i class='bx bx-trash'></i>
          </button>
        </div>
      </div>
      <div class="boxContent">
        <p class="item_gram">${gram}</p>
        <ul  class="item_definition">${getListsDefin(def)}</ul>
        <ul class="list-unstyled item_ejemplo">
          ${getListsEjemplo(ej)}
        </ul>
      </div>
      <div class="item_sinonimos d-flex justify-content-start2">
        <ul class="list-unstyled itemListSin">${getListsSinom(sin)}</ul>
      </div>
  </li>`;
  elements.itemsApunte.innerHTML += contentido;
};
