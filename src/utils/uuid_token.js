import { v4 as uuidv4 } from 'uuid';
export const getUUID = () => {
  let uuid_token = localStorage.getItem("UUID")
  if (!uuid_token) {
    // 赋值
    uuid_token = uuidv4()
    // 存储到本地
    localStorage.setItem("UUID", uuid_token)
  }
  return uuid_token
}