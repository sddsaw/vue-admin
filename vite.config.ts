import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import PurgeIcons from 'vite-plugin-purge-icons'
// TODO 需要安装@type/node
import path from 'path'
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx({}),
      eslintPlugin(),
      vueSetupExtend(),
      ElementPlus({
        // options
      }),
      // PurgeIcons({ // 按需加载
      //   content: [
      //     '**/*.html',
      //     '**/*.js',
      //     '**/*.ts',
      //     '**/*.vue'
      //   ]
      // }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true // <-- this
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
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
      host: '0.0.0.0',
      proxy: {
        // TODO 如果使用代理 baseUrl不需要设置
        '/api': {
          target: 'http://jsonplaceholder.typicode.com', // 代理的目标地址
          changeOrigin: true, // 兼用虚拟主机
          rewrite: (path) => path.replace(/^\/api/, '')// 路径重写
        }
      }
    }
  }
}
// export default defineConfig({
//   plugins: [
//     vue(),
//     // viteMockServe({
//     //   mockPath: 'mock',
//     //   localEnabled: command === 'serve'
//     // }),
//     eslintPlugin(),
//     vueJsx({}),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//       imports: ['vue', 'vue-router'],
//       eslintrc: {
//         enabled: true // <-- this
//       }
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()]
//     })
//   ],
//   // TODO 添加绝对路径名
//   resolve: {
//     alias: {
//       '@': path.join(__dirname, 'src')
//     }
//   },
//   // TODO 设置全局css变量
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: '@import "@/styles/variables.scss";'
//       }
//     }
//   },
//   // TODO 代理
//   server: {
//     proxy: {
//       // TODO 如果使用代理 baseUrl不需要设置
//       '/api': {
//         target: 'http://jsonplaceholder.typicode.com', // 代理的目标地址
//         changeOrigin: true, // 兼用虚拟主机
//         rewrite: (path) => path.replace(/^\/api/, '')// 路径重写
//       }
//     }
//   }
// })
