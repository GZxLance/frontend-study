<template>
    <div>
      <h2>登录</h2>
      <input v-model="phone" placeholder="请输入手机号" />
      <button :disabled="countdown > 0" @click="sendCode">
        {{ countdown > 0 ? `${countdown}秒后重新发送` : '发送验证码' }}
      </button>
      <input v-model="code" placeholder="请输入验证码" />
      <button @click="login">登录</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/useAuth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const phone = ref<string>("18287214332");
  const code = ref<string>("");
  const countdown = ref<number>(0);
  
  const sendCode = async () => {
    if (countdown.value === 0) {
      await authStore.sendCode(phone.value);
      startCountdown();
    }
  };
  
  const startCountdown = () => {
    countdown.value = 60;
    const interval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  
  const login = async () => {
    await authStore.login(phone.value, code.value);
    router.push("/profile");
  };
  </script>
  
  <style scoped>
  /* 你可以在这里添加一些样式来美化按钮的禁用状态 */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>