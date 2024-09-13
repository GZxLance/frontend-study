<template>
    <div>
        <p :class="paragraphClass">这是一段文字</p>
        <button @click="toggleClass">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from'vue'

// 定义响应式类名
const isHighlight = ref<boolean>(false)

// 动态切换类名
const paragraphClass = ref<{ [key: string]: boolean }>({
    isHighlight: isHighlight.value,
    normal: !isHighlight.value,
})

// 切换类的函数
const toggleClass = () => {
    isHighlight.value = !isHighlight.value
    paragraphClass.value = {
        isHighlight: isHighlight.value,
        normal: !isHighlight.value,
    }
}
</script>

<style scoped>
.isHighlight {
    color:red;
    }
.normal{
    color:black;
    }
</style>