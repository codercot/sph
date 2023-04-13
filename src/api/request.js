// 对axios进行封装
import axios from "axios";
const requests = axios.create({
  baseURL:"/api",
  timeout:5000
})
// 拦截器
