import { ref } from 'vue'

export function userCounter(initValue = 0) {
  // 响应式变量 number，初值为入参initValue
  const count = ref<number>(initValue)

  const increament = () => {
    count.value++
  }

  const decreament = () => {
    count.value--
  }

  const clean = () => {
    count.value = 10
  }

  return {
    count,
    increament,
    decreament,
    clean
  }
}