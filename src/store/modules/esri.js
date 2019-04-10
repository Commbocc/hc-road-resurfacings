import { loadModules } from 'esri-loader'

export default {
  getters: {
    resurfacingsFeatureLayer: () => {
      return loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
        return new FeatureLayer({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/RoadResurfacePlan/MapServer/0'
        })
      })
    },
    queryParams: () => ({
      where: '1=1',
      orderByFields: ['STREET ASC'],
      outFields: '*'
    })
  }
}
