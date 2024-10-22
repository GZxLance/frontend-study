<template>
    <div>
      <h2>记账应用</h2>
      <div>
        <input v-model="description" placeholder="描述" />
        <input v-model="amount" type="number" placeholder="金额" />
        <select v-model="type">
          <option value="income">收入</option>
          <option value="expense">支出</option>
        </select>
        <button @click="addRecord">添加记录</button>
      </div>
      <h3>交易记录</h3>
      <table>
        <thead>
          <tr>
            <th>描述</th>
            <th>金额</th>
           <th>类型</th>
           <th>操作</th>
        </tr>
      </thead>
        
        <tr v-for="transaction in accountStore.transactions" :key="transaction.id">
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.type === 'income' ? '收入' : '支出' }}</td>
          <td><button @click="deleteRecord(transaction.id)">删除</button></td>
        </tr>
      </table>
      <h3>统计信息</h3>
      <div>
        <p>总收入: {{ accountStore.totalIncome }}</p>
        <p>总支出: {{ accountStore.totalExpense }}</p>
        <p>当前余额: {{ accountStore.currentBalance }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAccountStore } from '../stores/useAccountStore';
  
  const accountStore = useAccountStore();
  const description = ref('');
  const amount = ref(0);
  const type = ref<'income' | 'expense'>('income');
  
  const addRecord = () => {
    if (description.value.trim() && !isNaN(Number(amount.value))) {
      accountStore.addTransaction(description.value, Number(amount.value), type.value);
      description.value = '';
      amount.value = 0;
    } else {
      alert('请输入有效的描述和金额');
    }
  };
  
  const deleteRecord = (id: number) => {
    accountStore.deleteTransaction(id);
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center; /* 使表格内容居中 */
  }
  
  th, td {
    padding: 8px;
    border: 1px solid #dddddd;
  }
  
  th {
    background-color: #3baee8;
    color: white;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  div {
    margin-top: 20px;
  }
  
  input[type="number"] {
    width: 100px;
  }
  
  select {
    margin-left: 10px;
  }
  </style>