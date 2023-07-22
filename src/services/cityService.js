export class cityService {
  static getCities() {
    let jsonCities = require('../data/cities.json');

    return jsonCities.cities;
  }
}
