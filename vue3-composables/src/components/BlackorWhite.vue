<template>  
    <div :class="['theme', { dark: isDarkMode }]">  
      <h1>白天/黑夜切换</h1>  
      <button @click="toggleTheme">切换主题</button>  
      <p>当前主题: {{ isDarkMode ? 'Dark' : 'Light' }}</p>  
      

    <div>
      <p>Time left: {{ timeLeft }} seconds</p>
      <button @click="start">开始</button>
      <button @click="reset">结束</button>
    </div>

    <form @submit="handleSubmit" class="login-form">
    <input v-model="form.email" type="email" placeholder="邮箱" class="form-input">
    <div v-if="errors.email" class="error-message">{{ errors.email }}</div>

    <input v-model="form.key" type="password" placeholder="密码" class="form-input">
    <div v-if="errors.key" class="error-message">{{ errors.key }}</div>

    <button type="submit" :disabled="isSubmitting" class="submit-button">登录</button>

    <!-- 登录成功提示 -->
    <div v-if="loginSuccess" class="success-message">登录成功！</div>

    <!-- 登录失败提示 -->
    <div v-if="loginError" class="error-message">{{ loginError }}</div>
  </form>

  <div class="sms-container">
      <input v-model="phoneNumber" placeholder="请输入电话号码" class="input-field" />
      <input v-model="message" placeholder="请输入短信内容" class="input-field" />
      <button :disabled="sending" @click="send" class="send-button">发送消息</button>
  
      <p v-if="sending" class="sending-message">Sending...</p>
      <p v-if="!sending && messageSent" class="sent-message">消息已送达!</p>
    </div>
</div>
  </template>  
    
  <script setup lang="ts">  
  import { computed } from 'vue';  
  import { useLocalStorage } from '@vueuse/core';  
    
  // 使用 useLocalStorage 来存储和同步主题设置  
  const themeKey = 'theme';  
  const storedTheme = useLocalStorage(themeKey, 'light'); // 默认值为 'light'  
    
  // 定义一个响应式变量来表示当前的主题模式  
  const isDarkMode = computed(() => storedTheme.value === 'dark');  
    
  // 定义一个函数来切换主题  
  const toggleTheme = () => {  
    storedTheme.value = isDarkMode.value ? 'light' : 'dark';  
  };  

  import { useCountdownTimer } from '../composables/useCountdownTimer';
  
  const { timeLeft, start, reset } = useCountdownTimer();

  import { useForm } from '../composables/useFormValidation.ts';
import { isEmail, minLength, required } from '../composables/validators.ts';

const initialValues = { key: '', email: '' };
const rules = {
  key: [required, minLength(3)],
  email: [required, isEmail]
};

const { 
  form, 
  errors, 
  handleSubmit, 
  isSubmitting, 
  loginSuccess, 
  loginError 
} = useForm(initialValues, rules);

import { ref } from 'vue';
  import { useSmsSender } from '../composables/useSmsSender';
  
  const phoneNumber = ref('');
  const message = ref('');
  const { sending, sendMessage } = useSmsSender();
  const messageSent = ref(false);
  
  const send = async () => {
    if (!phoneNumber.value || !message.value) {
      alert('Please enter both phone number and message.');
      return;
    }
    await sendMessage(phoneNumber.value, message.value);
    messageSent.value = true;
  };
  </script>  
    
  <style scoped>  
  div {
    height: 500px;
    width: 100%;

  }
  .theme {  
    transition: background-color 0.3s, color 0.3s;  
  }  
    
  .theme.dark {  
    background-color: #333;  
    color: #fff;  
  }  
    
  .theme.light {  
    background-color: #fff;  
    color: #000;  
  }  

  .login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

.success-message {
  color: green;
  margin-bottom: 10px;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.sms-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .send-button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .send-button:disabled {
    background-color: #aaa;
  }
  
  .sending-message,
  .sent-message {
    margin-top: 10px;
    font-size: 16px;
    color: #333;
  }
  </style>