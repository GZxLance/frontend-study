// 导入 Pinia 的 defineStore 函数，用于定义一个新的 store
import { defineStore } from 'pinia';

// 定义一个接口 AccountState，用于描述 store 的状态结构
interface AccountState {
  // 交易记录数组，每条记录包含 id、描述、金额和类型（收入或支出）
  transactions: {
    id: number;
    description: string;
    amount: number;
    type: 'income' | 'expense';
  }[];
  // 总收入
  totalIncome: number;
  // 总支出
  totalExpense: number;
  // 当前余额
  currentBalance: number;
}

// 定义一个名为 'account' 的 store
export const useAccountStore = defineStore('account', {
  // state 函数初始化 store 的状态
  state: (): AccountState => ({
    transactions: [], // 初始交易记录为空数组
    totalIncome: 0,    // 初始总收入为 0
    totalExpense: 0,   // 初始总支出为 0
    currentBalance: 0, // 初始当前余额为 0
  }),
  getters: {
    // 你可以在这里添加 getters
  },
  // actions 包含可以修改 state 的方法
  actions: {
    // 添加一条新的交易记录
    addTransaction(description: string, amount: number, type: 'income' | 'expense') {
      // 定义新交易记录的对象
      const transaction: AccountState['transactions'][number] = {
        id: Date.now(), // 使用当前时间戳作为唯一 id
        description,   // 交易描述
        amount,       // 交易金额
        type,         // 交易类型（收入或支出）
      };
      // 将新交易记录添加到数组中
      this.transactions.push(transaction);
      // 调用 recalculateTotals 方法重新计算总收入、总支出和当前余额
      this.recalculateTotals();
    },
    // 删除一条交易记录
    deleteTransaction(id: number) {
      // 过滤掉指定 id 的交易记录
      this.transactions = this.transactions.filter((t) => t.id !== id);
      // 调用 recalculateTotals 方法重新计算总收入、总支出和当前余额
      this.recalculateTotals();
    },
    // 重新计算总收入、总支出和当前余额
    recalculateTotals() {
      const totalIncome = this.transactions.reduce((acc, t) => {
        // 如果是收入，则累加金额
        return t.type === 'income' ? acc + t.amount : acc;
      }, 0);
      const totalExpense = this.transactions.reduce((acc, t) => {
        // 如果是支出，则累加金额
        return t.type === 'expense' ? acc + t.amount : acc;
      }, 0);
      // 更新状态中的总收入、总支出和当前余额
      this.totalIncome = totalIncome;
      this.totalExpense = totalExpense;
      this.currentBalance = totalIncome - totalExpense;
    },
  },
  persist: {
    key: 'my-account-store',
    storage: localStorage, // 你可以选择使用 sessionStorage 或其他存储方式
  },
});