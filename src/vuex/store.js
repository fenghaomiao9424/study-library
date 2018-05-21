import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navList: []
}

// 同步操作
const mutations = {
  setNavlist (s, plyload) {
    s.navList = plyload
  }
}

// 异步操作,ajax请求
const actions = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
