import { loadModules } from 'esri-loader'

export default {
  getters: {
    resurfacingsFeatureLayer: () => {
      return loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
        return new FeatureLayer({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/Transportation_Planning/FeatureServer/1'
        })
      })
    },
    queryParams: () => ({
      where: `1=1 AND CAST(FY_Planned AS INT) >= ${(new Date()).getFullYear()}`,
      orderByFields: ['FY_Planned ASC', 'STREET ASC'],
      outFields: '*'
    })
  }
}
