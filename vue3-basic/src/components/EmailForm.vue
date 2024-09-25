<template>
    <div class="user-profile">
      <form @submit.prevent="submitForm">
        <h2>邮件发送</h2>
        <label for="email">请输入收件人邮箱</label>
        <input type="text" id="to" placeholder="请输入收件人邮箱" v-model="recipientsform.to">
        <label for="theme">请输入邮箱主题</label>
        <input type="text" id="subject" placeholder="请输入邮箱主题" v-model="recipientsform.subject">
        <label for="content">请输入邮件内容</label>
        <input type="text" id="body" placeholder="请输入邮件内容" v-model="recipientsform.body">
        <button type="submit">发送</button> <!-- Changed button text to "发送" for clarity -->
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue';
  
  const recipientsform = reactive({
    to: "aaa@qq.com",
    subject: "你好",
    body: "111111",
  })
  
  // 定义 emits 事件
  const emit = defineEmits<{ 'submit-form': [any] }>()
  
  // 组织了表单的默认提交，自定义了表单的提交函数
  const submitForm = () => {
  
    emit('submit-form', recipientsform)
  }
  </script>
<style scoped>  
.user-profile {  
  display: flex;  
  flex-direction: column; /* 使子元素垂直排列 */  
  align-items: center; /* 水平居中子元素 */  
  text-align: center; /* 确保文本在label中也是居中的（虽然对于input来说这通常不需要） */  
  width: 100%; /* 或者设置为具体的宽度 */  
}  
div {  
  padding: 50px;  
  border: 1px solid #ccc;  
  border-radius: 8px; /* 添加圆角 */  
  margin-top: 20px; /* 顶部外边距 */  
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 添加阴影效果 */  
}  
button {
    background-color: rgb(72, 122, 221); 
    border-radius: 5px;
  color: white; 
  border: none; 
  height: 35px;
  width: 80px;
  padding: 10px 20px;
  margin-right: 10px;   
  cursor: pointer; 
  }

  label,input {  
  display: block;  
  height: 25px;
  width: 500px;
  margin-bottom: 10px; /* 在每个元素下面添加一些空间 */  
  padding: 8px; /* 添加一些内边距 */  
  border: 1px solid #ccc ce; /* 添加边框 */  
  border-radius: 4px; /* 添加圆角边框 */  
  text-align: center;
}  


button:hover {  
  background-color: #c9e8ff; /* 按钮悬停时的背景色 */  
}  
</style>  