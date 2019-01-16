const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Countries = function() {
  this.text = null;
};


Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    PubSub.publish('Countries:allCountriesData', this.text);
  });
  PubSub.subscribe('CountrySelect:change', (event) => {
    this.displayCountry(event.detail);
  })
};

Countries.prototype.displayCountry = function (index) {
  const selectedCountry = this.text[index];
  PubSub.publish('Countries:selectedCountry', selectedCountry);
};

module.exports = Countries;
