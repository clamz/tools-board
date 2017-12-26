import _ from 'lodash'

const state = {
  headerIsOpen: false
}

const getters = {
  headerIsOpen: state => state.headerIsOpen
}

const mutations = {
  OPEN: (state) => {
    state.headerIsOpen = true
  },
  CLOSE: (state) => {
    state.headerIsOpen = false
  }
}

const actions = {
  headerOpen: (store) => {
    _.capitalize('test')
    store.commit('OPEN')
  },
  headerClose: (store) => {
    store.commit('CLOSE')
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
