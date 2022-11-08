/**
 * @description 判断是否是手机号
 * @param value
 * @returns {boolean}
 */
export const isPhone = (value:string) => {
  const reg = /^1[3-9]{1}[0-9]{9}$/
  return reg.test(value)
}
/**
 * @description 校验密码是否符合6-12 须包含字母
 * @param value
 * @returns {boolean}
 */
export const isPassword = (value:string) => {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/
  return reg.test(value)
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber (value:string) {
  const reg = /^[0-9]*$/
  return reg.test(value)
}
