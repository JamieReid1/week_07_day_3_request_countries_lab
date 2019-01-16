const Countries = require('./models/countries.js');
const CountrySelect = require('./views/country_select.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryElement = document.querySelector('#countries');
  const countrySelect = new CountrySelect(countryElement);
  countrySelect.bindEvents();

  const countries = new Countries();
  countries.getData();

});
