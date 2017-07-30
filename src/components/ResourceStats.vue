<template>
  <div>
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th @click='orderBy("item.name")'>Item <i class="fa " v-if='filters.orderBy == "item.name"' v-bind:class="{ 'fa-chevron-up': filters.dir == 'asc', 'fa-chevron-down': filters.dir == 'desc' }"></i> </th>
          <th @click='orderBy("stats.buy.price_average")'>Buying <i class="fa " v-if='filters.orderBy == "stats.buy.price_average"' v-bind:class="{ 'fa-chevron-up': filters.dir == 'asc', 'fa-chevron-down': filters.dir == 'desc' }"></i></th>
          <th @click='orderBy("stats.sell.price_average")'>Selling <i class="fa " v-if='filters.orderBy == "stats.sell.price_average"' v-bind:class="{ 'fa-chevron-up': filters.dir == 'asc', 'fa-chevron-down': filters.dir == 'desc' }"></i></th>
          <th @click='orderBy("margin")'>Margin <i class="fa " v-if='filters.orderBy == "margin"' v-bind:class="{ 'fa-chevron-up': filters.dir == 'asc', 'fa-chevron-down': filters.dir == 'desc' }"></i></th>
          <th @click='orderBy("marginpercent")'>% <i class="fa " v-if='filters.orderBy == "marginpercent"' v-bind:class="{ 'fa-chevron-up': filters.dir == 'asc', 'fa-chevron-down': filters.dir == 'desc' }"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in resources"> 
          <td><router-link :to="'/orders/' + r.item.id + '/'">{{r.item.name}}</router-link></td>
          <td>{{r.stats.buy.price_average | formatted-number}} avg ({{r.stats.buy.total_volume | formatted-number}} units)</td>
          <td>{{r.stats.sell.price_average | formatted-number}} avg ({{r.stats.sell.total_volume | formatted-number}} units)</td>
          <td>{{ r.margin | number-format}}</td>
          <td>{{ r.marginpercent | number-format }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import OrdersTableRow from './OrdersTableRow.vue'
  // Load the full build.
  import _ from 'lodash';
  // Load method categories.
  import array from 'lodash/array';

  export default {
    components: {
      OrdersTableRow
    },
    computed: mapGetters({
      resources: 'resourceStats',
      filters: 'filters'
    }),
    created: function () {
      this.$store.dispatch('updateResourceStats')
    },
    methods: {
      orderBy(column) {
        this.$store.dispatch('setOrderColumn', column);
      }
    }
  }
</script>

<style lang="stylus">
</style>
