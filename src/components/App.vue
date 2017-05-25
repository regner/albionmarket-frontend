<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <router-link class="navbar-brand" to="/">Albion Market</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/items">Items</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/api">API</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <!-- <search></search> -->
        <span class="navbar-text">
          <stats></stats>
        </span>
      </div>
    </nav>
    <template>
      <div class="container-fluid" v-if="loaded">
        <router-view></router-view>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import utils from '../utils'
  import Stats from './Stats.vue'
  import Search from './Search.vue'

  export default {
    components: {
      Stats,
      Search
    },
    computed: {
      loaded () {
        return this.$store.getters.itemsLoaded
      }
    },
    created: function () {
      this.$store.dispatch('loadItems')
      utils.clearTitle()
    }
  }
</script>