// 详情页面网络请求

import {request} from './request.js'

// 根据ID查询详情
export function getFoodDetailByClassid(classid) {
  return request({
    url: '/detail',
    params: {
      id: classid
    }
  })
}