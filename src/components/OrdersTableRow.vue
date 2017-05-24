<template>
  <tr>
    <td v-if="showItem"><router-link :to="'/orders/' + order.item_id + '/'">{{name}}</router-link></td>
    <td>{{order.price | formatted-number}}</td>
    <td>{{order.amount}}</td>
    <td>{{order.expire_time | formatted-date}}</td>
    <td>{{order.last_updated | formatted-date}}</td>
  </tr>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      name () {
        return this.$store.getters.itemsObj[this.order.item_id].name
      }
    },
    props: [
      'order',
      'showItem'
    ]
  }
</script>

<style lang="stylus">
</style>