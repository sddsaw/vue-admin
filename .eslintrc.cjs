module.exports = {
  // TODO 这些都可以不引用就可以使用的，但是eslint规则校验不过，so 自定义
  // globals: {
  //   defineEmits: 'readonly',
  //   defineExpose: 'readonly',
  //   defineProps: 'readonly',
  //   withDefaults: 'readonly'
  // },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    /*
     eslint-plugin-vue 版本更新了，相较之前版本，@8 版本中新增了不少规则，第一条就是 'vue/multi-word-component-names': 'error', 要求组件名称以驼峰格式命名，所以 index.vue 会报错。
    */
    'vue/multi-word-component-names': 'off'
  }
}
