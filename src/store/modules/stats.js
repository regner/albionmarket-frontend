import marketapi from '../../api/marketapi'

const state = {
  added_last_hour: 0,
  added_last_day: 0,
  active_orders: 0
}

const getters = {
  stats () {
    return {
      added_last_hour: state.added_last_hour,
      added_last_day: state.added_last_day,
      active_orders: state.active_orders
    }
  }
}

const actions = {
  updateStats ({commit, state}) {
    marketapi.getStatsV1()
    .then(function (response) {
      commit({
        type: 'setStats',
        content: response.data
      })
    })
  }
}

const mutations = {
  setStats (state, payload) {
    state.added_last_hour = payload.content.added_last_hour
    state.added_last_day = payload.content.added_last_day
    state.active_orders = payload.content.active_orders
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}