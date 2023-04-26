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

// 登录请求 /api/user/passport/login  phone password
export const reqUserLogin = (data) => requests({ url: "/user/passport/login", data, method: "post" })

// 获取用户信息 /api/user/passport/auth/getUserInfo
export const reqUSerInfo = () => requests({ url: "/user/passport/auth/getUserInfo", method: "get" })

// 退出登录 /api/user/passport/logout
export const reqLogout = () => requests({ url: "/user/passport/logout", method: "get" })


// 获取用户地址：/api/user/userAddress/auth/findUserAddressList 这里要想获取数据一定要用
// 手机号：13700000000 密码：111111
export const reqAdress = () => requests({ url: "/user/userAddress/auth/findUserAddressList", method: "get" })

// 获取交易页面信息 /api/order/auth/trade
export const reqOrderInfo = () => requests({ url: "/order/auth/trade", method: "get" })

// 提交订单  /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post" })

// 通过订单号获取订单信息 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" })

// 通过订单号查询支付状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayState = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get" })

// 我的订单列表 /api/order/auth/{page}/{limit}
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}` })



