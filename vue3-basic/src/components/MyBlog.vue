<template>  
  <el-container>  

    <div v-if="!isLoggedIn" class="login-register-wrapper">  
      <el-button @click="handleLogin">登录</el-button>  
      <el-button @click="handleRegister">注册</el-button>  
    </div>  
  
    <el-header v-if="isLoggedIn" class="header-with-border">  
      <div class="header-content">  
        <el-avatar class="avatar" src="/msg/aaa.png" />  
       
        <div class="info">  
          <h1>{{ userInfo.id }}</h1>  
          <div class="hobbies">  
            <el-tag v-for="hobby in userInfo.hobbies" :key="hobby">{{ hobby }}</el-tag>  
          </div>  
        </div>  
        <p class="personal-signature">{{ userInfo.personalSignature }}</p>  
        <div class="bu">
          <el-button type="primary" @click="editProfile">编辑资料</el-button> 
        </div>
         
      </div>  
    </el-header>  
  
    <div class="blog-content">
    <el-main v-if="isLoggedIn">  
      <el-card v-for="post in posts" :key="post.id" class="blog-post-card">  
        <h3>{{ post.title }}</h3>  
        <p>{{ post.content }}</p>  
        <div class="meta">  
          <span>获赞: {{ post.likes }}</span>  
          <span>关注: {{ post.followers }}</span>  
        </div>  
      </el-card>  
    </el-main>  
  </div>
  </el-container>  

</template>  
  
<script setup lang="ts">  
import { ref } from 'vue';  

function editProfile() {  
  //   
  console.log('编辑资料按钮被点击');  
}  

  
const isLoggedIn = ref(false);   
const userInfo = ref({  
  id: 'user123',  
  personalSignature: '不断学习，不断进步',
  hobbies: ['阅读', '编程', '旅行'],    
});  
  
const posts = ref([  
{ id: 1, title: 'Vue 3与Element Plus的初体验', content: '内容概述...', likes: 50, followers: 200 },  
  { id: 2, title: 'JavaScript新特性探索', content: '深入ES6...', likes: 30, followers: 150 },  
  { id: 3, title: 'React与Vue的对比', content: '对比两者...', likes: 45, followers: 180 },  
]);  
  


  
function handleLogin() {  
  isLoggedIn.value = true;    

}  
  
function handleRegister() {  
  //   
  alert('注册功能未实现，仅用于演示。');  
}  
</script>  
  
<style scoped>  

.header-with-border {  
  border-bottom: 2px solid #eee;   
  padding-bottom: 20px;  
}  
  
.hobbies {  
  margin-top: 2px;  
  display: flex;  
  flex-wrap: wrap;   
}  
  
.hobbies .el-tag {  
  margin-right: 5px; 
  margin-bottom: 5px;  
}  
  
.header-content {  
  display: flex;  
  align-items: center;  
}  
  
.avatar {  
  width: 50px;
  height: 50px;  
  border-radius: 50%;  
  margin-right: 20px;  
}  
  
.info h1 {  
  margin: 0;  
  font-size: 24px;  
}  
  
.meta span {  
  margin-right: 10px;  
}  

.login-register-wrapper {  
  display: flex;  
  justify-content: center;  
  margin-top: 20px;  
}  
  
.blog-post-card {  
  margin-bottom: 20px;  
}  
  
.personal-signature {  
 
  margin-top: 10px;   
  color: #666; 
  font-size: 16px; 
  line-height: 1.5; 
  margin-left: 20px;
}  

.bu {
  margin-left: 1000px;
}

</style>