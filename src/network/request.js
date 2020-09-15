// 封装网络请求
import Axios from 'axios'

export function request(config) {
  // 1 创建axios实例
  const instance = Axios.create({
    baseURL: 'https://way.jd.com/jisuapi',
    params: {
      appkey: 'bbcaafcf6ede661f110c251da3de0a79'
    }
  })
  // 结合vue.config.js配置，解决跨域问题
  instance.defaults.baseURL = '/api'
  instance.defaults.headers.post['Content-Type'] = 'application/json'
  // 2 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })
  // 3 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data.result
  }, err => {
    return Promise.reject(err)
  })
  // 4 发送网络请求
  return instance(config)
}
