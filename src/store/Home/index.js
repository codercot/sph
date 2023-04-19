// home小仓库
import { getCategory, getBanner, getFloor } from "@/api"
const state = {
  category: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  // 三级数据
  category(state, res) {
    state.category = res
  },
  // 轮播图模拟数据
  bannerList(state, res) {
    state.bannerList = res
  },
  floorData(state, res) {
    state.floorList = res
  }
}


const actions = {
  // await async
  catory(context) {
    getCategory().then((res) => {
      context.commit("category", res.data)
    })
  },
  bannerList(context) {
    getBanner().then((res) => {
      context.commit("bannerList", res.data)
      // console.log("shuju");
    })
  },
  floorList(context) {
    getFloor().then((res) => {
      context.commit("floorData", res.data)
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