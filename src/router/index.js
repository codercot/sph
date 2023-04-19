import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue"
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register/Register.vue"
import Search from "@/views/search/index.vue"
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        show: true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false
      }
    },
    {
      name:"search",
      path: "/search/:keyword?",
      component: Search,
      meta: {
        show: true
      }
    },
    {
      path: "/",
      redirect: "/home"//重定向
    },
  ]
})
export default router