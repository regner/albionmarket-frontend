<template>
  <div>
    <h3>Items</h3>
    <div class="input-group">
      <input type="text" class="form-control" v-model="itemsFilters.searchFilter" @input="updateSearchBox" placeholder="Search for...">
    </div><!-- /input-group -->
    <hr>
    <ul>
      <li v-for="item in items"><router-link :to="'/orders/' + item.id + '/'">{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import OrdersTable from './OrdersTable.vue'

  export default {
    components: {
      OrdersTable
    },
    computed: {
      items () {
        return this.$store.getters.itemsList
      },
      itemsFilters()
      {
        return this.$store.getters.itemsFilters
      }
    },
    methods: {
      updateSearchBox: _.debounce(function (e) {
          this.$store.commit('updateSearchBox', e.target.value)
        }, 500)
    }
  }
</script>

<style lang="stylus">
</style>
