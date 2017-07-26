import marketapi from '../../api/marketapi'

const default_stats = {
  buy: {
    total_volume: 0,
    order_count: 0,
    price_average: 0,
    price_minimum: 0,
    price_maximum: 0
  },
  sell: {
    total_volume: 0,
    order_count: 0,
    price_average: 0,
    price_minimum: 0,
    price_maximum: 0
  }
}

const state = {
  orders: {},
  stats: default_stats,
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
    state.stats = default_stats
    state.item = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}