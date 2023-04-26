import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './mock/mockServe'
import 'swiper/css/swiper.css'
import { MessageBox,Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import *as API from '@/api'
Vue.config.productionTip = false
// element组件部分引入
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(Button.name, Button);
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
