<template>
  <div>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>Item</th>
          <th>Volume</th>
          <th>Order Count</th>
          <th>Avg Price</th>
          <th>Min Price</th>
          <th>Max Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in resources">
          <td><router-link :to="'/orders/' + r.item.id + '/'">{{r.item.name}}</router-link></td>
          <td>{{r.stats.total_volume}}</td>
          <td>{{r.stats.order_count}}</td>
          <td>{{r.stats.price_average}}</td>
          <td>{{r.stats.price_minimum}}</td>
          <td>{{r.stats.price_maximum}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import OrdersTableRow from './OrdersTableRow.vue'

  export default {
    components: {
      OrdersTableRow
    },
    computed: mapGetters({
      resources: 'resourceStats'
    }),
    created: function () {
      this.$store.dispatch('updateResourceStats')
    }
  }
</script>

<style lang="stylus">
</style>