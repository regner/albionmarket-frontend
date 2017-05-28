<template>
  <div>
    <h2>Albion Market: The Albion Online Market Aggregator</h2>
    <p>Albion Market is an aggregation website. It only works if a large number of users who are playing Albion Online download and install the distributed client that uploads market data. Please consider doing so by downloading it from <a href="https://github.com/Regner/albionmarket-client/releases">here</a>.</p>
    <resource-stats></resource-stats>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ResourceStats from './ResourceStats.vue'

  export default {
    components: {
      ResourceStats
    }
  }
</script>