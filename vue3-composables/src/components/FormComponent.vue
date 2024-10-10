<script setup lang="ts">
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
</script>

<template>
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
</template>

<style scoped>
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
</style>