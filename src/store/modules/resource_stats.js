import marketapi from '../../api/marketapi'

const state = {
  resources: {}
}

const getters = {
  resourceStats () {
    return state.resources
  }
}

const actions = {
  updateResourceStats ({commit, state}) {
    marketapi.getResourceStatsV1()
    .then(function (response) {
      commit({
        type: 'setResourceStats',
        content: response.data
      })
    })
  }
}

const mutations = {
  setResourceStats (state, payload) {
    state.resources = payload.content.resources
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}