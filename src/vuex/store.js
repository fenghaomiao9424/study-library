import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 是否显示loading
  isLoading: true
}

// 同步操作
const mutations = {
  setIsLoading(s, plyload) {
    s.isLoading = !!plyload
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
