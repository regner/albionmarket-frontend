import Vue from 'vue'
import Vuex from 'vuex'
import stats from './modules/stats'
import orders from './modules/orders'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stats,
    orders
  }
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./modules/stats'], () => {
    const newModuleStats = require('./modules/stats').default
    const newModuleOrders = require('./modules/orders').default

    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        stats: newModuleStats,
        orders: newModuleOrders
      }
    })
  })
}

export default store