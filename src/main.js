import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './mock/mockServe'
import {getCategory} from './api/index'
Vue.config.productionTip = false
getCategory()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
