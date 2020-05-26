import { elements } from '../js/base';
import { getFirtsLetter } from '../js/common';
import apiShutterstock from '../config/ShutterstockConfig';

const getListsSinom = (value) =>
  value.map((item) => `<li>${getFirtsLetter(item)}</li>`).join('');

const getListsEjemplo = (value) =>
  value.map((item) => `<li>${getFirtsLetter(item)}</li>`).join('');

const getListsDefin = (value) =>
  value.map((item) => `<li>${getFirtsLetter(item)}</li>`).join('');

const getImages = (value, pal) =>
  value.map((item) => `<img src="${item}" alt="${pal}" />`).join('');

export const getInnerAdd = (doc, pal, def, sin, gram, ej) => {
  const queryParams = {
    query: 'amor',
    sort: 'popular',
    orientation: 'horizontal',
  };

  let arrayImages = [];
  apiShutterstock
    .searchImages(queryParams)
    .then(({ data }) => {
      data
        .slice(0, 4)
        .map((item) => arrayImages.push(item.assets.huge_thumb.url));
    })
    .catch((error) => {
      console.error(error);
    });

  console.log('>>>>', arrayImages);

  let hparray = [
    'https://image.shutterstock.com/image-photo/portrait-happy-young-couple-enjoying-260nw-601240298.jpg',
    'https://image.shutterstock.com/image-photo/persons-hand-cats-paw-making-260nw-358480727.jpg',
    'https://image.shutterstock.com/image-photo/grandmother-reading-book-her-granddaughters-260nw-1183481062.jpg',
    'https://image.shutterstock.com/image-photo/love-yourself-be-you-self-260nw-538519228.jpg',
  ];

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
        <div class="column">
          <p class="item_gram">${gram}</p>
          <ul  class="item_definition">${getListsDefin(def)}</ul>
          <ul class="list-unstyled item_ejemplo">
            ${getListsEjemplo(ej)}
          </ul>
        </div>
        <div class="column">
          ${getImages(hparray, pal)}
        </div>
      </div>
      <div class="item_sinonimos d-flex justify-content-start2">
        <ul class="list-unstyled itemListSin">${getListsSinom(sin)}</ul>
      </div>
  </li>`;
  elements.itemsApunte.innerHTML += contentido;
};
