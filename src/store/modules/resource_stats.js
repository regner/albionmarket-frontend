import marketapi from '../../api/marketapi'

const state = {
  resources: {},
  filters: {
    orderBy: 'stats.sell.price_average',
    dir: 'desc'
  }
}

const getters = {
  resourceStats () {
    _.forEach(state.resources, function(value) {
      value.margin = value.stats.sell.price_average - value.stats.buy.price_average;
      value.marginpercent = (value.stats.buy.price_average ? value.margin / value.stats.buy.price_average : 0) * 100;
    });
    return _.orderBy(state.resources, state.filters.orderBy, state.filters.dir)
  },
  filters (){
    return state.filters
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
  },
  setOrderByColumn(state, column)
  {
    if(state.filters.orderBy == column)
    {
      // Just need to change direction
      state.filters.dir = (state.filters.dir == 'asc' ? 'desc' : 'asc')
    } else {
      state.filters.dir = 'desc'
      state.filters.orderBy = column
    } 
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
