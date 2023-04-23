import { reqGetCode } from "@/api"

const state = {
  code: ""
}
const mutations = {
  getCode(state, res) {
    state.code = res
  }
}
const actions = {
  // 验证码
  async GetCode(context, phone) {
    let res = await reqGetCode(phone)
    if (res.code == 200) {
      context.commit("getCode", res.data)
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}