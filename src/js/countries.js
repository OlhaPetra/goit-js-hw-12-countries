import refs from './refs.js';
import fetchCountries from './fetchCountries.js';
import countriesTemplate from './countriesTemplate.js';

/* import debounce from 'lodash.debounce';
 */

import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const { input, list  } = refs;
const debounce = require('lodash.debounce');


input.addEventListener("input",_.debounce(onSerch, 500));

function onSerch() {

}