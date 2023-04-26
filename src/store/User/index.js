import { reqGetCode, reqRegister, reqUSerInfo, reqUserLogin, reqLogout } from "@/api"
import { setToken, getToken, removeToken } from "@/utils/token"

const state = {
  code: "",
  token: getToken(),//获取token，第一次为null,
  userInfo: {}
}

const mutations = {
  // 验证码
  getCode(state, res) {
    state.code = res
  },
  // 登录
  getUserLogin(state, res) {
    state.token = res
  },

  // 用户信息
  getUserInfo(state, res) {
    state.userInfo = res
  },
  // 退出登录
  userLogout(state) {
    state.userInfo = {},
      removeToken()
  }
}
const actions = {
  // 验证码
  async GetCode(context, phone) {
    let res = await reqGetCode(phone)
    if (res.code == 200) {
      context.commit("getCode", res.data)
      console.log(res);
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },
  // 注册用户 要等待返回的结果是否成功
  async getRegister(context, data) {
    let res = await reqRegister(data)
    console.log(res);
    if (res.code == 200) {
      console.log(res);
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },
  // 登录
  async userLogin(context, data) {
    let res = await reqUserLogin(data)
    console.log(res);
    if (res.code == 200) {
      context.commit("getUserLogin", res.data.token)
      // 存储token
      setToken(res.data.token)
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },

  // 通过token获取用户信息
  async userInfo(context) {
    let res = await reqUSerInfo()
    context.commit("getUserInfo", res.data)
  },
  // 退出登录 （清除token，userInfo，跳转到首页）
  async userLogout(context) {
    let res = await reqLogout()
    if (res.code == 200) {
      context.commit("userLogout")
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  }
}
const getters = {
  getName(state) {
    return state.userInfo?.name
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}