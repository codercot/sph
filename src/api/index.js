import requests from "./request";
import mockRequest from './mockRequest'
export const getCategory = () => requests({
  url: "/product/getBaseCategoryList",
  method: "get"
})
// 轮播图数据
export const getBanner = () => mockRequest({ url: "/banner", method: "get" })
// floor数据
export const getFloor = () => mockRequest({ url: "/floor", method: "get" })
// searchList数据
export const getSearchList = (params) => requests({ url: "/list", method: "post", data: params })

// 商品详情数据 Detail
export const getDetailInfo = (id) => requests({ url: `/item/${id}`, method: "get" })

// 让服务器存储购物车数据
// /cart/addToCart/{ skuId }/{ skuNum }
export const reqGouWuData = (id, num) => requests({ url: `/cart/addToCart/${id}/${num}`, method: "post" })

// 购物车数据
export const reShopCart = () => requests({ url: "/cart/cartList", method: "get" })

// 删除购物车数据/api/cart/deleteCart/{skuId}
export const deleteCartList = (id) => requests({ url: `/cart/deleteCart/${id}`, method: "delete" })

// 切换商品选择状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqShopIsChecked = (id, isChecked) => requests({ url: `/cart/checkCart/${id}/${isChecked}`, method: "get" })


// 获取验证码/api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" })

// 注册用户 /api/user/passport/register 携带参数：phone code password
export const reqRegister = (data) => requests({ url: "/user/passport/register", data, method: "post" })




