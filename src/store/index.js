import Vue from 'vue'
import Vuex from 'vuex'
import Posters from '@/Posters.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Posters: [...Posters]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
