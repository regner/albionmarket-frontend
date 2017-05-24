<template>
  <div>
    <p>Home</p>
    <orders-table :orders="orders" showItem="true"></orders-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import OrdersTable from './OrdersTable.vue'

  export default {
    components: {
      OrdersTable
    },
    computed: mapGetters({
      orders: 'orders',
    }),
    beforeCreate: function () {
      this.$store.dispatch('setOrdersRecent')
    }
  }
</script>