import * as SearchView from '../views/search.view';
import { elements } from '../js/base';

elements.searchInput.value = '';

elements.searchInput.addEventListener('input', (ev) => {
  SearchView.getResultSearch(ev.target.value);
});
