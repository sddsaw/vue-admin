
// 封装一个打印日志的函数

const env = import.meta.env
// 解构，再使用不会被vite打包给屏蔽
const { log, error, warn } = console
// 指在开发环境或者localStorage设置showLog===1的时候展示log
const showLog = env.PROD
// 生产环境随便给他一个函数意思一下
const hideLogFunc = (...args:any) => args
export const WebLogger = {
  log: showLog ? log.bind(console) : hideLogFunc,
  error: showLog ? error.bind(console) : hideLogFunc,
  warn: showLog ? warn.bind(console) : hideLogFunc
}
// 使用的时候
// WebLogger.log('info')
