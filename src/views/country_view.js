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
  const heading2 = this.createHeading2(country);
  const image = this.createImage(country);
  this.element.appendChild(heading2);
  this.element.appendChild(image);
};

CountryView.prototype.createHeading2 = function (country) {
  const countryName = document.createElement('h2');
  countryName.textContent = country.name;
  return countryName;
};

CountryView.prototype.createImage = function (country) {
  const countryImage = document.createElement('img');
  countryImage.setAttribute('src', country.flag);
  countryImage.setAttribute('height', 50);
  countryImage.setAttribute('width', 100);
  return countryImage;
};


module.exports = CountryView;
