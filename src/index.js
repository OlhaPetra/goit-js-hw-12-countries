import fetchCountries from './js/fetchCountries.js';
import oneCounrty from './js/tamplates/oneCountryTemplate.hbs';
import tenCounrties from './js/tamplates/tenCountriesTemplate.hbs';

import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');

const input = document.getElementById('input');
const list = document.getElementById('list');

input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  fetchCountries(e.target.value)
    .then(countriesTempl)
    .catch(errorSearch)
    .finally((e.target.value = ''));
}

function errorSearch(err) {
  console.log(err);
  if (err === '404') {
    error({ text: 'Too many matches found. Please enter a more specific query!' });
  }
}

function countriesTempl(countries) {
  list.insertAdjacentHTML('beforeend', oneCounrty(countries));
}
