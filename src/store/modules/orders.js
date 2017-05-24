import marketapi from '../../api/marketapi'

const state = {
  orders: {},
  stats: {}
}

const getters = {
  orders () {
    return state.orders
  },
  orderStats () {
    return state.stats
  }
}

const actions = {
  setOrdersRecent ({commit, state}) {
    marketapi.getRecentOrdersV1()
    .then(function (response) {
      commit({
        type: 'setOrders',
        content: response.data
      })
    })
  },
  setOrdersSpecific ({commit, state}, payload) {
    marketapi.getOrdersV1(payload)
    .then(function (response) {
      commit({
        type: 'setOrders',
        content: response.data
      })
    })
  }
}

const mutations = {
  setOrders (state, payload) {
    state.orders = payload.content.orders
    state.stats = payload.content.stats
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}