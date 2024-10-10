<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{ x }}, {{ y }}
  </div>
</template>
<style scoped>  
/* 可选的：添加一些全局不作用的样式来美化拖拽元素 */  
.draggable-element {  
  /* 这些样式实际上已经在 dragStyle 中定义，因此可以省略 */  
  /* width: 200px;  
  height: 100px;  
  background-color: #f0f0f0;  
  border: 1px solid #ccc;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */  
  /* 添加一些额外的样式来提升用户体验 */  
  borderRadius: 8px;  
  padding: 10px;  
  fontSize: 16px;  
  color: #333;  
  transition: box-shadow 0.2s;  
  /* 当鼠标悬停时增加阴影，模拟按下的效果 */  
  &:hover {  
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);  
  }  
  /* 当元素被拖拽时改变光标样式 */  
  &.dragging {  
    cursor: grabbing;  
  }  
  /* 注意：由于 .dragging 类需要在拖拽过程中动态添加，  
     而 VueUse 的 useDraggable 默认不提供此类功能，  
     因此您可能需要自定义逻辑来实现这一点。  
     在这个简单示例中，我们省略了这一步。 */  
}  
</style>