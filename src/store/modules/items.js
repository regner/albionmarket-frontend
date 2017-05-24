import marketapi from '../../api/marketapi'

const state = {
  itemsLoaded: false,
  itemsList: [],
  itemsObj: {}
}

const getters = {
  itemsList () {
    return state.itemsList
  },
  itemsObj () {
    return state.itemsObj
  },
  itemsLoaded () {
    return state.itemsLoaded
  }
}

const actions = {
  loadItems ({commit, state}) {
    marketapi.getItemsV1()
    .then(function (response) {
      commit({
        type: 'setItems',
        content: response.data
      })
    })
  }
}

const mutations = {
  setItems (state, payload) {
    state.itemsList = payload.content.items
    state.itemsList.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })

    state.itemsObj = {}
    for (var i=0; i<state.itemsList.length; i++) {
      state.itemsObj[state.itemsList[i].id] = state.itemsList[i]
    }

    state.itemsLoaded = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}