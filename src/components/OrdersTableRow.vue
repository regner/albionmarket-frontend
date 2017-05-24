<template>
  <tr>
    <td v-if="showItem">{{order.item_id}}</td>
    <td>{{order.price | formatted-number}}</td>
    <td>{{order.amount}}</td>
    <td>{{order.expire_time | formatted-date}}</td>
    <td>{{order.last_updated | formatted-date}}</td>
  </tr>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: [
      'order',
      'showItem'
    ]
  }
</script>

<style lang="stylus">
</style>