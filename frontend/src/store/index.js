import Vuex from 'vuex'

import tools from './modules/tools'
import header from './modules/header'

export default new Vuex.Store({
  modules: {
    tools,
    header
  }
})
