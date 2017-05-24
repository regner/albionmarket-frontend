<template>
  <div>
    <h3>Items</h3>
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
      }
    }
  }
</script>

<style lang="stylus">
</style>