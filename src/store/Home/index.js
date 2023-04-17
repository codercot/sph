// home小仓库
import { getCategory, getBanner } from "@/api"
const state = {
  category: [],
  bannerList: []
}
const mutations = {
  // 三级数据
  category(state, res) {
    state.category = res
  },
  // 轮播图模拟数据
  bannerList(state, res) {
    state.bannerList = res
  }
}
const actions = {
  catory(context) {
    getCategory().then((res) => {
      context.commit("category", res.data)
    })
  },
  bannerList(context) {
    getBanner().then((res) => {
      context.commit("bannerList", res.data)
    })
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}