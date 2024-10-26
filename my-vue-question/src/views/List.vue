<template>
  <div class="question-list-container">
    <h2>所有问题</h2>
    <!-- 搜索栏 -->
    <div class="search-container">
      <el-input
        class="search-input"
        suffix-icon="el-icon-search"
        placeholder="搜索问题..."
        v-model="searchTitle"
      />
      <el-button type="primary" @click="fetchQuestions">搜索</el-button>
    </div>
    <!-- 问题列表 -->
    <div class="table-container">
      <el-table :data="searchTitle ? searchedQuestions : questions" style="width: 100%">
        <el-table-column prop="title" label="问题标题" width="180"></el-table-column>
        <el-table-column prop="content" label="问题内容"></el-table-column>
        <el-table-column prop="user.name" label="提问人"></el-table-column>
        <!-- 操作列 -->
        <el-table-column label="操作" width="180">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="goToQuestionDetail(row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 没有找到问题的提示 -->
    <div v-if="searchTitle && searchedQuestions.length === 0" class="no-results">没有找到与“{{ searchTitle }}”匹配的问题</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ElInput, ElTable, ElTableColumn, ElMessage, ElButton } from 'element-plus';

const router = useRouter();
const questions = ref([]);
const searchTitle = ref('');
const searchedQuestions = ref([]);

onMounted(async () => {
  await fetchQuestions();
});

const fetchQuestions = async () => {
  try {
    const response = await fetch('http://localhost:8080/question/getAllQuestions');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    questions.value = await response.json();
  } catch (error) {
    ElMessage.error(`Error: ${error.message}`);
  }
};

const searchQuestions = async () => {
  if (!searchTitle.value) {
    searchedQuestions.value = [];
    return;
  }
  try {
    const response = await fetch(`http://localhost:8080/question/title?title=${encodeURIComponent(searchTitle.value)}`);
    if (!response.ok) {
      if (response.status === 404) {
        searchedQuestions.value = [];
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }
    searchedQuestions.value = await response.json();
  } catch (error) {
    ElMessage.error(`Error: ${error.message}`);
    searchedQuestions.value = [];
  }
};

watch(searchTitle, () => {
  if (searchTitle.value.trim()) {
    searchQuestions();
  } else {
    searchedQuestions.value = [];
  }
});

const goToQuestionDetail = (question) => {
  const questionId = question.questionId;
  router.push({ name: 'Question', params: { id: questionId } });
};
</script>

<style scoped>
.question-list-container {
  max-width: 800px; /* 限制容器最大宽度 */
  margin: 20px auto; /* 居中显示 */
  text-align: center;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  width: 50%; /* 调整搜索框宽度 */
  margin-right: 10px;
}

.table-container {
  width: 100%;
}

.no-results {
  text-align: center;
  color: #f56c6c;
  margin-top: 10px;
}
</style>