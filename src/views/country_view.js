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
  console.dir(country);
  const heading2 = this.createHeading2(country);
  const image = this.createImage(country);
  const headingRegion = this.createHeading3('Region:');
  const region = this.createRegionP(country);
  const headingLanguages = this.createHeading3('Languages:');
  const languages = this.languageList(country);
  this.element.appendChild(heading2);
  this.element.appendChild(image);
  this.element.appendChild(headingRegion);
  this.element.appendChild(region);
  this.element.appendChild(headingLanguages);
  this.element.appendChild(languages);
};

CountryView.prototype.createHeading2 = function (country) {
  const countryName = document.createElement('h2');
  countryName.textContent = `${country.name}, \xa0\xa0\xa0${country.nativeName}`;
  return countryName;
};

CountryView.prototype.createImage = function (country) {
  const countryImage = document.createElement('img');
  countryImage.setAttribute('src', country.flag);
  countryImage.setAttribute('height', 170);
  countryImage.setAttribute('width', 280);
  return countryImage;
};

CountryView.prototype.createHeading3 = function (text) {
  const countryHeading3 = document.createElement('h3');
  countryHeading3.textContent = text;
  return countryHeading3;
};

CountryView.prototype.createRegionP = function (country) {
  const countryRegion = document.createElement('p');
  countryRegion.textContent = country.region;
  return countryRegion;
};

CountryView.prototype.createLi = function (textContent, ul) {
  const listItem = document.createElement('li');
  listItem.textContent = textContent;
  ul.appendChild(listItem);
};

CountryView.prototype.languageList = function (country) {
  const unorderedList = document.createElement('ul');
  const languages = country.languages;
  for (language of languages) {
    this.createLi(language.name, unorderedList);
  }
  return unorderedList;
};


module.exports = CountryView;
