import { ref, watch } from 'vue'

export function useLocalStorage(key: string, defaultValue: string) {
  const storeValue = localStorage.getItem(key) || defaultValue
  const data = ref<string>(storeValue)

  watch(data, (newValue) => {
    localStorage.setItem(key, newValue)
  })

  return data
}