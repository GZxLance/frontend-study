<template>
  <div class="home-container">
    <hr class="divider" />
    <el-row class="nav-container">
      <el-col :span="8">
        <router-link to="/list" class="nav-link">
          <i class="el-icon-document"></i> 查看问题
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link to="/add" class="nav-link">
          <i class="el-icon-plus"></i> 我要提问
        </router-link>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ElRow, ElCol } from 'element-plus';
</script>

<style scoped>
.home-container {
  text-align: center;
  
}

.divider {
  border: 1px solid #40b4ff;
  margin: 10px 0;
}

.nav-link {
  display: block;
  text-decoration: none;
  color: #40b4ff;
  padding: 10px 15px;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 5px;
  width: 400px;
  margin-left: 250px;
}

.nav-link:hover {
  background-color: #40b4ff;
  color: white;
  transform: scale(1.05);
}

.router-link-active {
  background-color: #40b4ff;
  color: white;
  font-weight: bold;

}
</style>
