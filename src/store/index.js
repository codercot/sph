import Vue from "vue";
import Vuex from 'vuex'
import Home from "./Home";
import search from "./search";
import detail from './Detail'
import ShopCart from "./ShopCart";
import Register from "./Register";
Vue.use(Vuex)
export default new Vuex.Store({
  // 写成模块使开发
  modules: {
    Home,
    search,
    detail,
    ShopCart,
    Register
  }
})