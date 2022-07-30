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
  }
}
