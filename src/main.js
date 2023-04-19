import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './mock/mockServe'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
