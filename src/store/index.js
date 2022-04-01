import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    userstate: false
  },
  mutations: {
    login(state, user){
      state.user = user
      state.loginstate = user.User_Id
    },
    usfalse(state){
      state.userstate = false
    },
    ustrue(state){
      state.userstate = true
    },
    cancellation(state){
      state.user = '',
      state.userstate = false
    }
  },
  actions: {
  },
  modules: {
  }
})
