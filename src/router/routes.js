
import Home from "@/views/Home/Home.vue"
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register/Register.vue"
import Search from "@/views/search/index.vue"
import Detail from "@/views/Detail/detail.vue"
import AddCartSucess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
export default [
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
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true
    }
  },
  {
    path: "/detail/:id?",
    component: Detail,
    meta: {
      show: true
    }
  },
  {
    path: "/addcartsucess",
    name: "addcartsucess",
    component: AddCartSucess,
    meta: {
      show: true
    }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true
    }
  },


  {
    path: "/",
    redirect: "/home"//重定向
  },
]