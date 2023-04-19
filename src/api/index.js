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
export const getSearchList = (params) =>requests({url:"/list",method:"post",data:params})