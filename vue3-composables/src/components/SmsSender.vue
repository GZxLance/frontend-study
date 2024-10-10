<template>
    <div class="sms-container">
      <input v-model="phoneNumber" placeholder="请输入电话号码" class="input-field" />
      <input v-model="message" placeholder="请输入短信内容" class="input-field" />
      <button :disabled="sending" @click="send" class="send-button">发送消息</button>
  
      <p v-if="sending" class="sending-message">Sending...</p>
      <p v-if="!sending && messageSent" class="sent-message">消息已送达!</p>
    </div>
  </template>
  
  <script setup lang="ts">
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