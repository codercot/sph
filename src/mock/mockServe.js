import Mock from "mockjs";
import banner from './banner.json'
import floor from "./floor.json"

// 第一个参数为请求地址  第二个为请求数据 需要在main中加载一次
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
