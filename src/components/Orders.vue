<template>
  <div class="orders">
    <h1>{{item.name}}</h1>
    <div class="media">
      <div class="pull-left"><img :src="image" class="rounded orderimg" alt="Image of the item."></div>
      <div class="media-body">
        <table class="table table-sm table-responsive">
          <thead>
            <tr>
              <th></th>
              <th>Buying</th>
              <th>Selling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Total Volume</th>
              <td>{{stats.buy.total_volume | formatted-number}}</td>
              <td>{{stats.sell.total_volume | formatted-number}}</td>
            </tr>
            <tr>
              <th scope="row">Total Orders</th>
              <td>{{stats.buy.order_count | formatted-number}}</td>
              <td>{{stats.sell.order_count | formatted-number}}</td>
            </tr>
            <tr>
              <th scope="row">Average Price</th>
              <td>{{stats.buy.price_average | formatted-number}}</td>
              <td>{{stats.sell.price_average | formatted-number}}</td>
            </tr>
            <tr>
              <th scope="row">Minimum Price</th>
              <td>{{stats.buy.price_minimum | formatted-number}}</td>
              <td>{{stats.sell.price_minimum | formatted-number}}</td>
            </tr>
            <tr>
              <th scope="row">Maximum Price</th>
              <td>{{stats.buy.price_maximum | formatted-number}}</td>
              <td>{{stats.sell.price_maximum | formatted-number}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h1>Sell Orders</h1>
    <orders-table :orders="orders.sell"></orders-table>
    <h1>Buy Orders</h1>
    <orders-table :orders="orders.buy"></orders-table>
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
      item: 'orderItem',
      image: 'orderImage'
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
.orderimg
  width: 200px
  height: 200px
</style>