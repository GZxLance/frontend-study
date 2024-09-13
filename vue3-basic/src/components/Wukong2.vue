<template>
    <div>
      <h2>当前形态：{{ userName ? '齐天大圣' : '斗战胜佛' }}</h2>
      <button @click="changeName">切换形态</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const userName = ref<boolean>(true)
  
  const changeName = () => {
    userName.value = !userName.value
  }
  </script>
  
  <style>  
  div {  
    background-color: rgb(255, 255, 192); 
    text-align: center;  
    padding: 20px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }  
  
  button {  
    padding: 10px 20px;  
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgb(255, 235, 156);   
    color: #333; /* 设置按钮文本的颜色 */  
    font-size: 16px; /* 设置按钮文本的字体大小 */  
    font-weight: bold; /* 使按钮文本加粗 */  
    cursor: pointer; /* 鼠标悬停效果 */  
    transition: background-color 0.3s ease; /* 平滑的背景色过渡效果 */  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 按钮的阴影效果 */  
  }  
  
  /* 可选：增加鼠标悬停效果 */  
  button:hover {  
    background-color: rgb(255, 215, 0); /* 加深黄色，提供视觉反馈 */  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 悬停时加深阴影效果 */  
  }  
</style>