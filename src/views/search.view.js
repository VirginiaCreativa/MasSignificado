import { elements } from '../js/base';

export const getResultSearch = (e) => (elements.searchResult.textContent = e);

export function turnOnSearch(index) {
  if (index >= 8) elements.boxSearching.style.display = 'block';
}
