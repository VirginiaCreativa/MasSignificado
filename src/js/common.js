import { elements } from './base';
import apiShutterstock from '../config/ShutterstockConfig';

const year = new Date().getFullYear();
elements.yearNow.innerText = year;

export function getFirtsLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// const queryParams = {
//   query: 'New York',
//   sort: 'popular',
//   orientation: 'horizontal',
// };

// apiShutterstock
//   .searchImages(queryParams)
//   .then(function ({ data }) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
