import { reqAdress, reqOrderInfo } from "@/api"

const state = {
  adress: [],
  order: {}
}
const mutations = {
  getAdress(state, res) {
    state.adress = res
  },

  getOrder(state, res) {
    state.order = res
  }
}
const actions = {
  // 用户收货地址
  async getUSerAdress(context) {
    let res = await reqAdress()
    console.log(res.data);
    if (res.code == 200) {
      context.commit("getAdress", res.data)
    }
  },
  // 订单信息
  async getOrderInfo({ commit }) {
    let res = await reqOrderInfo()
    console.log(res.data);
    if (res.code == 200) {
      commit("getOrder", res.data)
    }
  }
}
const getters = {
  
}
export default {
  state,
  mutations,
  actions,
  getters
}