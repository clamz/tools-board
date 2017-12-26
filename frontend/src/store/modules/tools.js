import axios from 'axios'

const state = {
  tools: {}
}

const getters = {
  tools: state => state.tools
}

const mutations = {
  SET_TOOLS: (state, tools) => {
    state.tools = tools
  }
}

const actions = {
  initTools: (store) => {
    return new Promise((resolve) => {
      axios.get('http://localhost:8080/api/tools').then((response) => {
        console.log(response)
        store.commit('SET_TOOLS', response.data)
        resolve()
      })
    })
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
