<script setup lang="ts">
import { computed } from 'vue'

import { useTextDirection } from '@vueuse/core'

const dir = useTextDirection({
  selector: '#_useTextDirectionDemo',
})
const text = computed(() =>
  dir.value === 'ltr'
    ? '此段落是英文的，并且正确地从左到右。'
    : '这一段是英文的，但错误地从右到左。')

function handleOnClick() {
  dir.value = dir.value === 'rtl' ? 'ltr' : 'rtl'
}

import { useFileDialog } from '@vueuse/core'

const { files, open, reset, onCancel, onChange } = useFileDialog()
onChange((files) => {
  /** do something with files */
})

onCancel(() => {
  /** do something on cancel */
})

import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div id="_useTextDirectionDemo">
    <p>
      {{ text }}
    </p>
    <hr>
    <button @click="handleOnClick">
      <span class="ml-2">{{ dir.toUpperCase() }}</span>
    </button>
    <span class="p-4 opacity-50">单击以更改方向</span>
  </div>

  <button type="button" @click="open()">
    Choose files
  </button>
  <button type="button" :disabled="!files" @click="reset()">
    Reset
  </button>
  <template v-if="files">
    <p>You have selected: <b>{{ `${files.length} ${files.length === 1 ? 'file' : 'files'}` }}</b></p>
    <li v-for="file of files" :key="file.name">
      {{ file.name }}
    </li>
  </template>

  <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{ x }}, {{ y }}
  </div>
</template>

<style scoped>
#_useTextDirectionDemo[dir='rtl'] p {
  color: red;
}
button {
  margin-right: 0.5em;
}
</style>