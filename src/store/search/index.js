import { getSearchList } from "@/api"

// search小仓库
const state = {
  searchList: {}
}
const mutations = {
  searchList(state, res) {
    state.searchList = res
  }
}
const actions = {

  searchList(context, params = {}) {
    getSearchList(params).then((res) => {
      context.commit("searchList", res.data)
    })
  }
}
// getters:计算属性，专门为简化state数据而生
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList(state){
    return state.searchList.trademarkList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}