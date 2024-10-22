import { defineStore } from "pinia";
import { ref } from "vue";

//定义数据类型
interface Todo {
    id: number ;
    text: string;
    completed: boolean;
}

//定义Store
export const useTodoStore = defineStore("todo", () => {
    //定义状态数组todos
    const todos = ref<Todo[]>([]);

    //添加待办事项
    const addTodo = (todoText: string) => {
        //定义一个等待添加的代办事项
        const newTodo: Todo = {
            id: Date.now(),
            text: todoText,
            completed: false,
        };
        todos.value.push(newTodo);
    };

    //删除代办事项
    const removeTodo = (index: number) => {
        todos.value.splice(index, 1);
    };

    //切换
    const toggleTodo = (index: number) => {
        if (todos.value[index]) {
            todos.value[index].completed =!todos.value[index].completed;
        }
    };

    //返回
    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    };
},

{
    persist: {
        key: "my-todo-store",
        storage: localStorage,
    },
}
);