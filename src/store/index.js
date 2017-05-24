import Vue from 'vue'
import Vuex from 'vuex'
import stats from './modules/stats'
import orders from './modules/orders'
import items from './modules/items'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stats,
    orders,
    items
  }
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./modules/stats'], () => {
    const newModuleStats = require('./modules/stats').default
    const newModuleOrders = require('./modules/orders').default
    const newModuleItems = require('./modules/items').default

    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        stats: newModuleStats,
        orders: newModuleOrders,
        items: newModuleItems
      }
    })
  })
}

export default store