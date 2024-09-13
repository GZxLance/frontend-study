<template>
    <div>
        <h2>当前用户:  {{ userName }}</h2>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const userName = ref<string>('张三')
console.log(userName.value)
</script>