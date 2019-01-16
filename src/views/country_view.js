const PubSub = require('../helpers/pub_sub.js');


const CountryView = function(element) {
  this.element = element
};


CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selectedCountry', (event) => {
    const country = event.detail;
    this.renderCountry(country);
  });
};

CountryView.prototype.renderCountry = function (country) {
  this.element.innerHTML = '';
  const countryName = document.createElement('h2');
  countryName.textContent = country.name;
  this.element.appendChild(countryName);
};



module.exports = CountryView;
