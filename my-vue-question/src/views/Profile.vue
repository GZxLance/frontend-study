<template>
  <div class="profile-container">
    <h2>个人中心</h2>
    <div v-if="user" class="profile-card">
      <h3>用户信息</h3>
      <p>昵称：{{ user.name }}</p>
      <p>账号：{{ user.username }}</p>
      <p>邮箱：{{ user.email }}</p>
      <p>注册时间：{{ user.createdAt }}</p>
    </div>

    <div class="profile-stats">
      <h3>统计信息</h3>
      <p><strong>提问数量:</strong> {{ questionCount }}</p>
      <p><strong>回答数量:</strong> {{ answerCount }}</p>
    </div>

    <div class="profile-actions">
      <h3>操作</h3>
      <button @click="editProfile">编辑资料</button>
      <button @click="logout">退出登录</button>
    </div>

    <div class="recent-activity">
      <h3>最近活动</h3>
      <ul>
        <li>问答 1: "如何使用Vue?" - 提问于 2024-10-01</li>
        <li>问答 3: "如何配置Vue项目" - 提问于 2024-10-03</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref(null);
const questionCount = ref(2);
const answerCount = ref(4);

onMounted(() => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    user.value = JSON.parse(userInfo);
  }
});

const logout = () => {
  localStorage.removeItem('userInfo');
  user.value = null;
  router.push('/login');
};

const editProfile = () => {
  alert('编辑个人资料');
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
}

.profile-card, .profile-stats, .profile-actions, .recent-activity {
  padding: 20px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
}

h2, h3 {
  color: #333;
}

.profile-actions button {
  margin-right: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.profile-actions button:hover {
  background-color: #0056b3;
}

.recent-activity ul {
  list-style: none;
  padding: 0;
}
</style>
