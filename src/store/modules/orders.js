import marketapi from '../../api/marketapi'

const state = {
  orders: {},
  stats: {},
  item: {}
}

const getters = {
  orders () {
    return state.orders
  },
  orderStats () {
    return state.stats
  },
  orderItem () {
    return state.item
  },
  orderImage () {
    return 'https://gameinfo.albiononline.com/api/gameinfo/items/' + state.item.id + '.png'
  }
}

const actions = {
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
    state.item = payload.content.item
  },
  clearOrders (state, payload) {
    state.orders = {}
    state.stats = {}
    state.item = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}