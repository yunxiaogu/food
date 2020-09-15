// 首页网络请求封装
import {request} from './request.js'

export function getFoodData(keyword, num) {
  return request({
    url: '/search',
    params: {
      keyword,
      num
    }
  })
}

export function getScrollData() {
  return request({
    url: '/recipe_class'
  })
}

/*
  classId: 分类ID
  start: 起始条数
  num: 获取数量，最大为20
 */
export function getFoodByClassId(classid, start, num) {
  return request({
    url: '/byclass',
    params: {
      classid,
      start,
      num
    }
  })
}
