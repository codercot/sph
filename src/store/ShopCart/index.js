import { reShopCart, deleteCartList, reqShopIsChecked } from "@/api"

const state = {
  cartList: []
}
const mutations = {
  getShopCartList(state, res) {
    state.cartList = res
  }
}
const actions = {
  // 购物车数据
  async getGowList(context) {
    let result = await reShopCart()
    console.log(result);
    context.commit("getShopCartList", result.data)
  },
  // 删除购物车数据
  async deleteShopCart(context, id) {
    let res = await deleteCartList(id)
    if (res.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },

  // 修改购物车选择状态
  async shopIsChecked(context, { id, isChecked }) {
    let res = await reqShopIsChecked(id, isChecked)
    if (res.code == 200) {
      return "ok"
    } else {
      return Promise.reject(new Error("faile"))
    }
  },

  // 删除购物车所选商品
  deleteCheckShop({ dispatch, getters }) {
    let promiseAll = []
    getters.cartInfoList.cartInfoList.forEach(item => {
      if (item.isChecked == 1) {
        // 这个返回值是一个promis promise.all[]判断数组中的promise是否成功执行，一假即假
        let promise = dispatch("deleteShopCart", item.skuId)
        promiseAll.push(promise)
      }
    })
    return Promise.all(promiseAll)
  },

  // 全选框的选择
  allChecked({ getters, dispatch }, isChecked) {
    let promiseAll = []
    getters.cartInfoList.cartInfoList.forEach(item => {
      let promise = dispatch("shopIsChecked", { id: item.skuId, isChecked })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartInfoList(state) {
    return state.cartList[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}