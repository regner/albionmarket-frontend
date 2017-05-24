import axios from 'axios'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import store from './store'

import FormattedNumber from './filters/FormattedNumber.js'
import FormattedDate from './filters/FormattedDate.js'

import App from './components/App.vue'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import Items from './components/Items.vue'
import About from './components/About.vue'
import Orders from './components/Orders.vue'


axios.defaults.baseURL = process.env.BASE_URL

Vue.use(VueRouter)

Vue.filter('formatted-number', FormattedNumber)
Vue.filter('formatted-date', FormattedDate)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/items', component: Items},
    {path: '/orders/:item', component: Orders},
    {path: '/404', component: NotFound},

    {path: '*', redirect: '/404'}
  ]
})

Vue.use(VueAnalytics, {
  id: 'UA-97974740-2',
  router
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})