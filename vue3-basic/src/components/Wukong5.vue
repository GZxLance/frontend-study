<template>  
    <div class="attck-container">  
      <h2>孙悟空的攻击力</h2>  
      <p>基础攻击力: {{ baseAttack }}</p>  
      <button @click="increaseBaseAttack">增加攻击力</button> 
      <button @click="ruduceBaseAttack">减少攻击力</button> 

      <p>装备加成: {{ equipmentBonus }}</p>  
      <button @click="increaseBonus">增加装备加成</button>
      <button @click="reduceBonus">减少装备加成</button> 
 
      <p>最终攻击力: {{ totalAttack }}</p>  
    </div>  
  </template>  
    
  <script setup lang="ts">  
  import { ref, computed } from 'vue';  
  function increaseBaseAttack() {  
     baseAttack.value += 10;
  }
  function increaseBonus() {  
    equipmentBonus.value += 10;
  }   
  function ruduceBaseAttack() {  
     baseAttack.value -= 10;
  }
  function reduceBonus() {  
    equipmentBonus.value -= 10;
  }

  const baseAttack = ref(100);  
  const equipmentBonus = ref(50); 
    
  // 计算最终攻击力  
  const totalAttack = computed(() => {  
    return baseAttack.value + equipmentBonus.value;  
  });  
    
  </script>  
    
  <style scoped>  
  .attck-container {
    text-align: center;
    
    h2 {  
    color: #333;  
  }  
    
  p { 
    box-shadow: 0 0 0 2px rgb(49, 62, 163);
    padding: 5px; 
    margin-top: 10px;  
    }  
  }

  button {
    background-color: rgb(72, 122, 221); 
    border-radius: 5px;
  color: white; 
  border: none; 
  padding: 10px 20px;
  margin-right: 10px;   
  cursor: pointer; 
  }
</style>
