const Countries = require('./models/countries.js');
const CountrySelect = require('./views/country_select.js');
const CountryView = require('./views/country_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryElement = document.querySelector('#countries');
  const countrySelect = new CountrySelect(countryElement);
  countrySelect.bindEvents();

  const viewElement = document.querySelector('#country');
  const countryView = new CountryView(viewElement);
  countryView.bindEvents();

  const countries = new Countries();
  countries.getData();

});
