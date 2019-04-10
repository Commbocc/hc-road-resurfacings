import Resurfacing from '../Resurfacing.js'

export default {
  state: {
    index: []
  },
  actions: {
    fetchResurfacings ({ commit, getters }) {
      commit('setLoading')

      getters.resurfacingsFeatureLayer.then(fl => {
        fl.queryFeatures(getters.queryParams).then(response => {
          commit('setResurfacings', response.features.map(x => new Resurfacing(x)))
        }).catch(err => console.error(err)).then(() => {
          commit('setLoading', false)
        })
      })
    }
  },
  mutations: {
    setResurfacings (state, data) {
      state.index = data
    }
  }
}
