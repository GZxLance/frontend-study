<template>  
    <div>  
      <button @click="scrollToSkillSection">滚动到技能展示区域</button>  
      <div style="height: 1000px;">...</div>  
      <div ref="skillSection" style="margin-top: 500px; border: 2px solid #000; padding: 20px;">  
        技能展示区域  
      </div>  
    
    </div>  
  </template>  

  <script>  
  export default {  
    methods: {  
      scrollToSkillSection() {   
        this.$refs.skillSection.scrollIntoView({  
          behavior: 'smooth',  
          block: 'start', 
        });  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  
button {
    background-color: rgb(72, 122, 221); 
    border-radius: 5px;
  color: white; 
  border: none; 
  padding: 10px 20px;
  margin-right: 10px;   
  cursor: pointer; 
  }
  div {
    text-align: center;
  }
  </style>