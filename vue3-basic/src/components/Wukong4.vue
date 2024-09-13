<template>  
  <div class="health-container">  
    <p>当前血量: {{ currentHp }} / {{ maxHp }}</p>
    <div class="health-bar-background">  
      <div class="health-progress" :style="healthBarStyle">  
        <span>{{ hpPercentage }}%</span>  
      </div>  
    </div>    
  </div>  
</template>  
  
<script setup lang="ts">  
import { ref, computed } from 'vue';  
  
const maxHp = ref(100);  
const currentHp = ref(30

);  
  
const hpPercentage = computed(() => {  
  return (currentHp.value / maxHp.value) * 100;  
});  
  
const healthBarStyle = computed(() => {  
  return {  
    width: `${hpPercentage.value}%`,  
    backgroundColor: 'green',  
    height: '20px',  
    borderRadius: '5px',  
    lineHeight: '20px',  
    textAlign: 'right',  
    color: 'white',  
    paddingRight: '5px',  
    boxSizing: 'border-box'  
  };  
});  
</script>  
  
<style scoped>  
.health-container {  
  padding: 20px;  
  text-align: center;  
}  
  
.health-bar-background {  
  width: 100%;  
  height: 20px;  
  background-color: #ccc; /* 灰色背景 */  
  border-radius: 5px;  
  overflow: hidden; /* 确保进度部分不会超出背景范围 */  
}  
  
.health-progress {  
  height: 100%;  
  transition: width 0.5s ease, background-color 0.5s ease;  
}  
  
.health-bar-progress span {  
  display: inline-block;  
  margin-right: 5px;  
}  
</style>