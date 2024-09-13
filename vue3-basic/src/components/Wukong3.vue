<template>  
    <div class="skills-container">  
      <h2>技能列表</h2>  
        <li v-for="skill in skills" :key="skill.id" class="skill-item">  
          <span>{{ skill.name }}</span>  
          <span v-if="skill.isUnlocked" class="unlocked">已解锁</span>  
          <span v-else class="locked">未解锁</span>  
        </li>  
    </div>  
  </template>  
    
  <script setup lang="ts">  
  import { ref } from 'vue';  
    
  // 假设的技能列表  
  const skills = ref([  
    { id: 1, name: '七十二变', isUnlocked: true },  
    { id: 2, name: '筋斗云', isUnlocked: false },  
    { id: 3, name: '火眼金睛', isUnlocked: true },  
  ]);  
  </script>  
    
  <style scoped>  
  .skills-container {  
    background-color: #f0f0f0;  
    padding: 20px;  
    border-radius: 10px;  
    text-align: center;  
  }  
    
  .skill-item {  
    list-style-type: none;  
    margin: 10px 0;  
    padding: 5px 10px;  
    border: 1px solid #ddd;  
    border-radius: 5px;  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
  }  
    
  .skill-item span {  
    margin-right: 10px;  
  }  
    
  .unlocked {  
    color: rgb(110, 167, 99);  
  }  
    
  .locked {  
    color: rgb(247, 104, 104);  
  }  
  </style>