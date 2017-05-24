<template>
  <div>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th v-if="showItem">Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Expires</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        <orders-table-row v-for="order in orders" :order="order" :show-item="showItem"></orders-table-row>
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
      'orders',
      'showItem'
    ]
  }
</script>

<style lang="stylus">
</style>