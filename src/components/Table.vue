<template>
  <div class="table-responsive">
    <table class="table table-striped table-bordered table-sm small">
      <thead>
        <tr>
          <th>Street</th>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th>Planned Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(resurfacing, i) in resurfacings" :key="i">
          <td>{{ resurfacing.STREET }}</td>
          <td>{{ resurfacing.FRSTNM }}</td>
          <td>{{ resurfacing.TOSTNM }}</td>
          <td>{{ resurfacing.Type }}</td>
          <td>{{ resurfacing.FY_Planned }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  mounted () {
    this.fetchResurfacings()
  },
  methods: mapActions(['fetchResurfacings']),
  computed: mapState({
    resurfacings: state => state.resurfacings.index
  })
}
</script>
