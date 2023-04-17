import requests from "./request";
import mockRequest from './mockRequest'
export const getCategory = () => requests({
  url: "/product/getBaseCategoryList",
  method: "get"
})
// 轮播图数据
export const getBanner = () => mockRequest({ url: "/banner", method: "get" })