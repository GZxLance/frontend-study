<template> 
  <div class="question-detail">
    <h2>📄 {{ question.title }}</h2>
    <div class="box question-info">

      <div><strong>用户昵称:</strong> {{ question.user?.name }}</div>
      <div><strong>内容:</strong></div>
      <div class="content">{{ question.content }}</div> <!-- 增加展示空间 -->
      <div><strong>发布时间:</strong> {{ question.createdAt }}</div>
    </div>

    <div class="box answer-form">
      <h3>我要回答：</h3>
      <div v-if="isLoggedIn">
        <el-input type="textarea" v-model="answerContent" placeholder="请输入你的回答" />
        <el-button type="primary" @click="submitAnswer">提交回答</el-button>
      </div>
      <div v-else>
        请登录后回答
      </div>
    </div>

    <div class="box answers">
      <h3>查看回答:</h3>
      <div v-for="answer in answers" :key="answer.answerId" class="answer">
        <div><strong>回答者:</strong> {{ question.user?.name }}</div>
        <div><strong>内容:</strong></div>
        <div class="content">{{ answer.content }}</div>
        <div><strong>更新时间:</strong> {{ answer.updatedAt }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ElInput, ElButton } from 'element-plus';

const route = useRoute();
const question = ref({});
const answers = ref([]);
const answerContent = ref('');
const userInfo = localStorage.getItem('userInfo');
const isLoggedIn = !!userInfo;

const fetchQuestion = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/question/${route.params.id}`);
    question.value = response.data;
  } catch (error) {
    console.error('获取问题详情失败:', error);
  }
};

const fetchAnswers = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/answer/question/${route.params.id}`);
    answers.value = response.data;
  } catch (error) {
    console.error('获取答案详情失败:', error);
  }
};

const submitAnswer = async () => {
  try {
    await axios.post('http://localhost:8080/answer/addAnswer', {
      content: answerContent.value,
      questionId: route.params.id,
      userId: JSON.parse(userInfo).userId
    });
    fetchAnswers();
  } catch (error) {
    console.error('提交回答失败:', error);
  }
};

onMounted(() => {
  fetchQuestion();
  fetchAnswers();
});
</script>

<style scoped>
.question-detail {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  border: 1px solid #40b4ff;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.question-detail h2 {
  margin-bottom: 10px;
  color: #333;
}

.box {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f9f9f9;
  text-align: left; /* 左对齐 */
}

.content {
  margin-top: 5px; /* 增加上边距 */
  padding: 10px; /* 增加内边距 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 4px; /* 圆角 */
  background-color: #fff; /* 背景颜色 */
  white-space: pre-wrap; /* 保留空格和换行 */
}

.answers {
  margin-top: 20px;
}
</style>
