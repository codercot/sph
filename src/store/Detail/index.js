import { getDetailInfo,reqGouWuData } from '@/api'
import { getUUID } from '@/utils/uuid_token'
const state = {
  detailInfo: {},
  uuid_token:getUUID()
}
const mutations = {
  getDInfo(state, res) {
    state.detailInfo = res
  }
}
const actions = {
  getDetail(context, id) {
    getDetailInfo(id).then((res) => {
      context.commit("getDInfo", res.data)
    })
  },
  async getGou(context, { id, num }) {
    let res = await reqGouWuData(id, num)
    if (res.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },
 
}
// 计算数据
const getters = {
  // 至少要给页面一个内容，否则undefine被调用会报错
  categoryView(state) {
    return state.detailInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.detailInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}