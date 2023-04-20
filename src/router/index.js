import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  }
})
export default router