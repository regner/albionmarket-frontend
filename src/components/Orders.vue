<template>
  <div class="orders">
    <div class="media">
      <div class="pull-left"><img :src="image" class="rounded orderimg" alt="Image of the item."></div>
      <div class="media-body">
        <table class="table table-sm table-responsive">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{{item.name}}</td>
            </tr>
            <tr>
              <th scope="row">Total Volume</th>
              <td>{{stats.total_volume}}</td>
            </tr>
            <tr>
              <th scope="row">Total Orders</th>
              <td>{{stats.order_count}}</td>
            </tr>
            <tr>
              <th scope="row">Average Price</th>
              <td>{{stats.price_average}}</td>
            </tr>
            <tr>
              <th scope="row">Minimum Price</th>
              <td>{{stats.price_minimum}}</td>
            </tr>
            <tr>
              <th scope="row">Maximum Price</th>
              <td>{{stats.price_maximum}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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