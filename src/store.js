import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    logged: false,
    isMaster: false
  },
  mutations: {
    login(state) {
      state.logged = true
    },
    logByMaster(state) {
      state.logged = true
      state.isMaster = true
    },
    logout(state) {
      state.logged = false
      state.isMaster = false
    }
  }
})

export default store
