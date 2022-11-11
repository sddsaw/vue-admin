import { UserConfigExport, ConfigEnv } from 'vite'
import { getPluginList } from './build/plugins'
// TODO 需要安装@type/node
import path from 'path'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  // console.log(command)
  // console.log(mode)

  // const env = loadEnv(mode, process.cwd())
  // console.log(env, 123)

  return {
    base: '/',
    plugins: getPluginList(command),
    // TODO 添加绝对路径名
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    // TODO 设置全局css变量
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    },
    // TODO 代理
    server: {
      port: 3000,
      strictPort: true,
      host: '0.0.0.0',
      open: false, // 启动时自动在浏览器中打开
      proxy: {
        // TODO 如果使用代理 baseUrl不需要设置
        '/api': {
          target: 'http://jsonplaceholder.typicode.com', // 代理的目标地址
          changeOrigin: true, // 兼用虚拟主机
          rewrite: (path) => path.replace(/^\/api/, '')// 路径重写
        }
      }
    },
    build: {
      sourcemap: false,
      minify: 'esbuild'
    },
    // TODO 去除console和debugger 但是需要判断是否在生产中使用
    esbuild: {
      pure: command === 'serve' ? ['console', 'debugger'] : []
    }
  }
}
