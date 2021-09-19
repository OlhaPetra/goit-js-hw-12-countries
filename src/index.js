import fetchCountries from './js/fetchCountries.js';
import oneCounrtyArticle from './tamplates/oneCounrtyArticleTempl.hbs';
import countriesList from './tamplates/countriesListTempl.hbs';
import refs from './js/refs.js';
const { input, list } = refs

import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');

input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();
  list.innerHTML = '';

  fetchCountries(e.target.value)
    .then(data => {
      if (data.length === 1) {
        counrtyArticleMarkup(data);
      } else if (data.length <= 10) {
        countriesListMarkup(data);
      } else if (data.length > 10) {
        errorSearch();
      }
    })
    .catch(err => {
      console.log(err);
      if (err.message === '404') {
        errorSearch();
      }
    })
    .finally((e.target.value = ''));
}

function errorSearch() {
  error({ text: 'Too many matches found. Please enter a more specific query!' });
}

function counrtyArticleMarkup(countries) {
  list.insertAdjacentHTML('beforeend', oneCounrtyArticle(countries));
}
function countriesListMarkup(countries) {
  list.insertAdjacentHTML('beforeend', countriesList(countries));
}