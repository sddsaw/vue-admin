# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 技术架构 
* Vue 3 
* TypeScript 
* Vite
* Element-plus 
* Tailwindcss 
* Pinia2
# 辅助工具       
* standard-version https://github.com/conventional-changelog/standard-version 生成CHANGELOG.md文档
* commitlint https://github.com/conventional-changelog/commitlint; 对commit message进行规范约束,不按照规范提交不到个人仓库
* lint-staged https://github.com/okonet/lint-staged#readme 在提交代码时进行eslint校验,校验不过不可提交到远端仓库
* vite-plugin-eslint https://github.com/gxmari007/vite-plugin-eslint 在开发,打包时进行eslint校验,终端和浏览器都会提示相应的错误信息。
https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md mock文档

https://github.com/element-plus/element-plus/issues/5693
https://www.npmjs.com/package/unplugin-vue-define-options vue3添加组件name名插件
# 参考文档
- Commit message 和 Change log 编写指南 http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
- https://github.com/vuejs/rfcs/tree/master/active-rfcs 
- https://eslint.vuejs.org/
- https://vitejs.cn/guide/
- https://pinia.vuejs.org/
- https://seb-l.github.io/pinia-plugin-persist/
- https://cloud.tencent.com/developer/article/1901096 css切换主体



1.如何看到不符合规范的错误提示
2.如何按照项目中的 eslint规则要求进行格式化
* - （1）卸载/禁用vetur插件 不支持vue3
    （2）安装Eslint插件
        - 只要安装并启用这个插件，它就会自动查找项目中的 eslint 配置规则，并且给出验证提示
        - 如何格式化？ eslint 提供了格式化工具，但是需要手动配置才可以
        - 扩展中找到eslint eslint>Format:Enable 勾选 启用eslint作为格式化工具
            -eslint：Run 选择 onType 实时更新
            -如果工作区有多个格式化工具，设置eslint为.js，.ts，.vue文件为默认格式化工具
    （3）安装volar插件 支持vue3

feat: 新特性
fix: 修改问题
refactor: 代码重构
docs: 文档修改
style: 代码格式修改, 注意不是 css 修改
test: 测试用例修改
chore: 其他修改, 比如构建流程, 依赖管理.
pref: 性能提升的修改
build: 对项目构建或者依赖的改动
ci: CI 的修改
revert: revert 前一个 commit

changelog 需要在master分支上面进行初始化  npx standard-version --first-release
可以使用 rollup-plugin-visualizer 插件查看当前项目打包结构来针对性优化

npm i vite-plugin-vue-setup-extend -D
https://segmentfault.com/a/1190000041884869/