<template>
    <div>
      <EmailForm @submit-form="handleSubmit" />
      <p v-if="submitData">邮件已发送：{{ submitData }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import EmailForm from './EmailForm.vue';
  import axios from 'axios';
  
  // 定义一个表单提交的数据对象
  const submitData = ref(null)
  
  // 处理子组件传递的数据
  const handleSubmit = (data: any) => {
    submitData.value = data;
    axios.post("http://localhost:8080/mail", submitData.value).then((res) => {
      console.log("邮件已发送")
    })
  }
  </script>

  