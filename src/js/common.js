import { elements } from './base';

const year = new Date().getFullYear();
elements.yearNow.innerText = year;

export function getFirtsLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
