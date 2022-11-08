import { ref } from 'vue'

export default function () {
  interface Emits {
    (event:'checkMode', isScan:boolean):void
  }
  const isScan = ref(true)
  const emits = defineEmits<Emits>()
  const emitLoginMode = () => {
    isScan.value = !isScan.value
    emits('checkMode', isScan.value)
  }
  return {
    isScan,
    emitLoginMode
  }
}
