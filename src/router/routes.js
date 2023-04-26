
import Home from "@/views/Home/Home.vue"
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register/Register.vue"
import Search from "@/views/search/index.vue"
import Detail from "@/views/Detail/detail.vue"
import AddCartSucess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySucess from '@/views/PaySuccess'
import Center from '@/views/Center'
import myOrder from '@/views/Center/myOrder'
import groupOrder from '@/views/Center/groupOrder'
export default [
  {
    // 在这里要使用二级路由
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: myOrder
      },
      {
        path: "grouporder",
        component: groupOrder
      },
      {
        // 访问/center时，重定向到/center/myorder
        path: "/center",
        redirect: "/center/myorder"
      }
    ],
    meta: {
      show: true
    }
  },
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
    path: "/trade",
    component: Trade,
    meta: {
      show: true
    },
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next()
      } else {
        //跳转到当前页面
        next(false)
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      show: true
    },
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path == "/trade") {
        next()
      } else {
        next(false)
      }
    }

  },
  {
    path: "/paysucess",
    component: PaySucess,
    meta: {
      show: true
    },
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path == "/pay") {
        next()
      } else {
        next(false)
      }
    }
  },

  {
    path: "/",
    redirect: "/home"//重定向
  },
]