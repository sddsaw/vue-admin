import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const isCollapse = ref(false)
  function setIncrement () {
    isCollapse.value = !isCollapse.value
  }

  return { isCollapse, setIncrement }
})
