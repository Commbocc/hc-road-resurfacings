import Vue from 'vue'
import Vuex from 'vuex'

import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { ...modules },
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, data = true) {
      state.loading = data
    }
  }
})
