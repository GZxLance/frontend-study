<template>
    <div class="add-question">
      <h2>💡 我要提问</h2>
      <div v-if="isLoggedIn" class="form-container">
        <el-input v-model="question.title" placeholder="标题" label="标题" />
        <el-input type="textarea" v-model="question.content" placeholder="详细问题" label="详细问题" />
        <div class="example">
          <h3>提问参考示例：</h3>
          <p>如何配置Vue项目以使用Element Plus？</p>
        </div>
        <el-button type="primary" @click="submitQuestion">提交</el-button>
      </div>
      <div v-else class="form-container">
        请登录后提问
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { ElInput, ElButton } from 'element-plus';
  
  const router = useRouter();
  const question = ref({ title: '', content: '' });
  const userInfo = localStorage.getItem('userInfo');
  const isLoggedIn = !!userInfo;
  
  const submitQuestion = async () => {
    try {
      await axios.post('http://localhost:8080/question/addQuestion', {
        ...question.value,
        userId: JSON.parse(userInfo).userId
      });
      alert('提交成功！');
      router.push('/');
    } catch (error) {
      console.error('提交问题失败:', error);
      alert('提交失败，请重试！');
    }
  };
  </script>
  
  <style scoped>
  .add-question {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #40b4ff;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-container {
    margin-top: 20px;
  }
  
  .example {
    margin-top: 20px;
    padding: 10px;
    background-color: #f3f3f3;
    border-left: 5px solid #40b4ff;
  }
  </style>
  