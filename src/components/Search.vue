<template>
  <div>
    <input type="text" placeholder="Search" v-model="query" v-on:keyup="autoComplete" class="form-control">
    <div class="panel-footer" v-if="results.length">
      <ul class="list-group">
        <li class="list-group-item" v-for="result in results">
          <router-link :to="'/orders/' + result.id + '/'">{{ result.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    data(){
      return {
        query: '',
        results: []
      }
    },
    computed: mapGetters({
      items: 'itemsList',
    }),
    methods: {
      autoComplete(){
        this.results = [];

        for (var i=0; i<this.items.length; i++) {
          if (this.items[i].name.toLowerCase().startsWith(this.query.toLowerCase())) {
            this.results.push(this.items[i])
          }

          if (this.results.length >= 6) {
            return
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>