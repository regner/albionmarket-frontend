<template>
  <div>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>Price</th>
          <th>Qty</th>
          <th>Expires</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        <orders-table-row v-for="order in orders" :order="order"></orders-table-row>
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
    props: [
      'orders'
    ],
    beforeDestroy: function () {
      this.$store.commit('clearOrders')
    }
  }
</script>

<style lang="stylus">
</style>