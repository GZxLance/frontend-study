<template>  
    <el-container class="container">  
      <div class="header">  
        <el-menu mode="horizontal" class="menu" :default-active="1">  
          <el-menu-item v-for="item in tabList" :key="item.id" :index="item.id.toString()">  
            {{ item.name }}  
          </el-menu-item>  
        </el-menu>  
        <el-input placeholder="搜索" class="search" />  
        <el-button type="primary" class="login-button">登录 | 注册</el-button>  
      </div>  
        
      <main class="main">  
        <div class="date-picker-container">  
          <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>  
        </div>  
          
        <el-menu class="left-tab" mode="horizontal">  
          <el-menu-item v-for="item in tabList2" :key="item.id" :index="item.id.toString()">  
            {{ item.name }}  
          </el-menu-item>  
        </el-menu>  
          
        <el-card class="list">  
          <el-table :data="MessageList" style="width: 100%">  
            <el-table-column prop="title" label="标题" />  
            <el-table-column prop="content" label="内容" />  
          </el-table>  
        </el-card>  
          
        <el-card style="margin-left: 20px;">  
          <div class="footer">查看更多</div>  
        </el-card>  
      </main>  
    </el-container>  
  </template>  
    
  <script setup lang="ts">  
  import { ref } from 'vue'  
    
  const tabList = ref([  
    { id: 1, name: '首页' },  
    { id: 2, name: '课程' },  
    { id: 3, name: '商城' }  
  ])  
    
  const tabList2 = ref([  
    { id: 1, name: '关注' },  
    { id: 2, name: '前端' },  
    { id: 3, name: '后端' }  
  ])  
    
  const MessageList = ref([  
    { title: '课程1', content: '这是课程1的内容' },  
    { title: '课程2', content: '这是课程2的内容' },  
    { title: '课程3', content: '这是课程3的内容' }  
  ])  
    
  const dateValue = ref(new Date()); // 日期选择器的值  
  </script>  
    
  <style scoped>  
  .container {  
    display: flex;  
    flex-direction: column;  
  }  
    
  .header {  
    display: flex;  
    align-items: center;  
    padding: 10px;  
    background-color: #fff;  
  }  
    
  .menu {  
    flex-grow: 1;  
  }  
    
  .search {  
    width: 200px; /* 缩小搜索栏长度 */  
    margin-left: 10px;  
  }  
    
  .main {  
    display: flex;  
    flex-direction: column; /* 修改为列布局，因为需要添加日期选择器 */  
    padding: 20px;  
  }  
    
  .date-picker-container {  
    margin-bottom: 20px; /* 日期选择器与下面的内容之间的间距 */  
  }  
    
  .left-tab {  
    display: flex; /* 改为横向展示 */  
    justify-content: space-around; /* 可选，根据需要调整子项间距 */  
  }  
    
  .left-tab .el-menu-item {  
    /* 移除默认的padding或调整以适应横向布局 */  
    padding: 0 10px;  
  }  
    
  .list {  
    margin-left: 20px;  
    flex: 1;  
  }  
  </style>