<template>
  <div id="app">
    <div v-if="loading" class="text-center h2">
      Loading...
      <i class="fas fa-spinner fa-pulse"></i>
    </div>

    <ResurfacingsTable v-show="!loading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from './store'
import ResurfacingsTable from './components/Table.vue'

export default {
  store,
  name: 'RoadResurfacings',
  components: { ResurfacingsTable },
  computed: mapState({
    loading: state => state.loading,
  })
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
