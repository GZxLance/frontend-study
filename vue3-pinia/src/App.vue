<template>
  <nav>
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">待办清单</router-link>
    <router-link to="/account">记账应用</router-link>

  </nav>

  <router-view />
</template>

<style scoped>
  /* 定义路由导航样式 */
a {
  margin: 10px;
  text-decoration: none;
  color: #3baee8;
  padding:5px 10px;
}

  /* 自定义路由激活样式 */
.router-link-active {
  background-color:#3baee8;
  color: white;
  font-weight: bold;
}
</style>