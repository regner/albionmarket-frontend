<template>
  <div class="orders">
    <h3>Orders {{$route.params.item}}</h3>
    <ul>
      <li>Total Volume: {{stats.total_volume}}</li>
      <li>Total Orders: {{stats.order_count}}</li>
      <li>Average Price: {{stats.price_average}}</li>
      <li>Minimum Price: {{stats.price_minimum}}</li>
      <li>Maximum Price: {{stats.price_maximum}}</li>
    </ul>
    <orders-table :orders="orders"></orders-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import OrdersTable from './OrdersTable.vue'
  import utils from '../utils'

  export default {
    components: {
      OrdersTable
    },
    computed: mapGetters({
      orders: 'orders',
      stats: 'orderStats',
    }),
    beforeCreate: function () {
      this.$store.dispatch('setOrdersSpecific', this.$route.params.item)
    },
    created: function () {
      if (!(this.$route.params.item in this.$store.getters.itemsObj)) {
        this.$router.replace('/404');
      }

      utils.setTitle(this.$store.getters.itemsObj[this.$route.params.item].name)
    },
    beforeDestroy: function () {
      utils.clearTitle()
    }
  }
</script>

<style lang="stylus">
</style>