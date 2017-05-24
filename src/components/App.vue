<template>
  <div id="app" class="container">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <router-link class="navbar-brand" to="/">Albion Market</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <stats></stats>
        </span>
      </div>
    </nav>
    <template>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Stats from './Stats.vue'

  export default {
    components: {
      Stats
    }
  }
</script>