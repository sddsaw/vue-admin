
/**
 * @description: 用户类型接口
 * @return {*}
 */
import request from '@/utils/request'
import { ILoginInfo, LoginParams } from '@/api/types/user'
/**
 * @description: 登录
 * @param {LoginParams} data
 * @return {*}
 */
export const getLogin = (data:LoginParams) => {
  return request<ILoginInfo>({
    data,
    method: 'POST',
    url: '/mock/api/login'
  })
}

/**
 * @description: 退出
 * @return {*}
 */
export const logOut = () => {
  return request({
    method: 'GET',
    url: '/mock/api/logout'
  })
}
/**
 * @description: 获取菜单
 * @return {*}
 */
export const menu = () => {
  return request({
    method: 'GET',
    loading: true,
    url: '/mock/api/menu'
  })
}
