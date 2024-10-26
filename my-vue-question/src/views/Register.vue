<template>
  <div class="login-container">
    <div class="login-card">
      <h2>📝 注册</h2>
      <form @submit.prevent="register">
        <div class="form-item">
          <label for="username">账号</label>
          <input type="text" id="username" v-model="registerForm.username" placeholder="请输入账号" required>
        </div>
        <div class="form-item">
          <label for="name">昵称</label>
          <input type="text" id="name" v-model="registerForm.name" placeholder="请输入昵称" required>
        </div>
        <div class="form-item">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="registerForm.password" placeholder="请输入密码" required>
        </div>
        <div class="form-item">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="registerForm.email" placeholder="请输入邮箱" required>
        </div>
        <div class="form-item">
          <button type="submit" class="login-button">注册</button>
          <button type="button" class="register-button" @click="login">已有账号？登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const registerForm = ref({
  username: '',
  name: '',
  password: '',
  email: '',
});

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/users/register', registerForm.value);
    alert('注册成功');
    router.push('/login');
  } catch (error) {
    alert('注册失败: ' + (error.response?.data?.message || '未知错误'));
  }
};

const login = () => {
  router.push('/login');
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  width: 360px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
}

.login-card h2 {
  margin-bottom: 30px;
  color: #333;
}

.form-item {
  margin-bottom: 20px;
}

.form-item label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  transition: border 0.3s;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
  border: 1px solid #007bff;
  background-color: #fff;
}

button {
  width: 48%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
}

label {
  margin-right: 90%;
}

.login-button {
  background-color: #007bff;
  color: white;
}

.login-button:hover {
  background-color: #0056b3;
}

.register-button {
  border: 1px solid #007bff;
  color: #007bff;
  background-color: white;
}

.register-button:hover {
  background-color: #007bff;
  color: white;
}
</style>
