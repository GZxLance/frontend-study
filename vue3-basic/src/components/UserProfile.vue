<template>
    <div>
        <h3>用户信息</h3>
        <p>姓名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <p>邮箱：{{ user.email }}</p>
    </div>
</template>

<script setup lang="ts">
//定义props 接收父组件传递的参数
const props = defineProps<{
    user:{
        name: string;
        age: number;
        email: string;
    };
}>();
</script>

<style scoped>

</style>

