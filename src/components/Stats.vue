<template>
  <div class="stats">
    Last Hour: {{stats.added_last_hour}} // Last Day: {{stats.added_last_day}} // Active: {{stats.active_orders}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      stats: 'stats',
    }),
    created () {
      this.$store.dispatch('updateStats')
    }
  }
</script>

<style lang="stylus">
</style>