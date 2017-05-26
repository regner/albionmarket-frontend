<template>
  <div>
    <h2>Albion Market: The Albion Online Market Aggregator</h2>
    <p>Albion Market is an aggregation website. It only works if a large number of users who are playing Albion Online download and install the market uploader client. Please consider doing so by downloading it from here (link to be added soonish).</p>
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