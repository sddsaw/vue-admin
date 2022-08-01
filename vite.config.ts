import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// TODO 需要安装@type/node
import path from 'path'
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    vueJsx({}),
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
    proxy: {
      // TODO 如果使用代理 baseUrl不需要设置
      '/api': {
        target: 'http://jsonplaceholder.typicode.com', // 代理的目标地址
        changeOrigin: true, // 兼用虚拟主机
        rewrite: (path) => path.replace(/^\/api/, '')// 路径重写
      }
    }
  }
})
