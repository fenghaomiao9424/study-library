import Vue from 'vue'
import 'normalize.css'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'

import baseLoading from '@/components/baseLoading'

Vue.component(baseLoading.name, baseLoading)

Vue.use(ElementUI)

Vue.prototype.$store = store

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
