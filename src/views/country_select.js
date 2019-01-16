const PubSub = require('../helpers/pub_sub.js');


const CountrySelect = function(element) {
  this.element = element;
};


CountrySelect.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:allCountriesData', (event) => {
    const countriesData = event.detail;
    this.populate(countriesData);
  });
  this.element.addEventListener('change', (event) => {
    const selectIndex = event.target.value;
    PubSub.publish('CountrySelect:change', selectIndex);
  });
};

CountrySelect.prototype.populate = function (data) {
  data.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};


module.exports =CountrySelect;
