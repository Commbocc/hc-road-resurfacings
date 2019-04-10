export default class Resurfacing {
  constructor (feature) {
    this.geometry = feature.geometry
    for (var k in feature.attributes) {
      this[k] = feature.attributes[k]
    }
  }
}
