<template>
  <tr>
    <td>{{order.price | formatted-number}}</td>
    <td>{{order.amount | formatted-number}}</td>
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
      'order'
    ]
  }
</script>

<style lang="stylus">
</style>