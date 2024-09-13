<template>  
    <div>  
      <h1>装备管理</h1>  
      <div>  
        <input type="text" v-model="newEquipment" placeholder="输入装备名称">  
        <button @click="addEquipment">添加装备</button>  
      </div>  
      <ul>  
        <li v-for="(item, index) in equipments" :key="index" class="equipment-item">  
          {{ item }}  
        </li>  
      </ul>  
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        newEquipment: '',  
        equipments: []  
      };  
    },  
    methods: {  
      addEquipment() {  
        if (this.newEquipment.trim() !== '') {  
          this.equipments.push(this.newEquipment);  
          this.newEquipment = ''; 
        } else {  
          alert('请输入有效的装备名称！');  
        }  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  
  .equipment-item {  
    list-style-type: none; /* 移除列表前面的点 */  
    padding: 10px;  
    margin: 5px 0;  
    background-color: #f9f9f9;  
    border: 1px solid #ddd;  
    border-radius: 4px;  
  }  
  div {
    text-align: center;
  }
  </style>