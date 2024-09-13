<!-- 文本输入框的双向绑定 -->
<!-- <template>
    <div>
        <input v-model="name"placeholder="请输入姓名"/>
        <p>您输入的姓名是：{{name}}</p>
    </div>
</template>

<script setup lang="ts">
import{ref}from'vue'

// 定义双向绑定的状态
const name=ref<string>('')// 初始值为空字符串
</script> -->





<!-- 复选框的双向绑定 -->
<!-- <template>
    <div>
        <input type="checkbox"v-model="isChecked"/>勾选此项
        <p>复选框状态：{{isChecked?'已勾选':'未勾选'}}</p>
    </div>
</template>

<script setup lang="ts">
import{ref}from'vue'

// 定义复选框的绑定状态
const isChecked=ref<boolean>(false)// 初始状态为未勾选
</script> -->




<!-- 单选按钮的双向绑定 -->
<!-- <template>
    <div>
        <input type="radio"v-model="selectedOption"value="A"/>选项 A
        <input type="radio"v-model="selectedOption"value="B"/>选项 B
        <p>您选择的选项是：{{selectedOption}}</p>
    </div>
</template>

<script setup lang="ts">
import{ref}from'vue'

// 定义单选框的选项状态
const selectedOption=ref<string>('A')// 初始值为选项 A
</script> -->




<!-- 下拉选择框的双向绑定 -->
<!-- <template>
    <div>
        <select v-model="selectedItem">
            <option disabledvalue="">请选择一个选项</option>
            <option value="苹果">苹果</option>
            <option value="香蕉">香蕉</option>
            <option value="橘子">橘子</option>
        </select>
        <p>您选择的水果是：{{selectedItem}}</p>
    </div>
</template>

<script setup lang="ts">
import{ref}from'vue'

// 定义下拉菜单的选项状态
const selectedItem=ref<string>('')// 初始值为空字符串
</script> -->





<!-- 多个复选框的绑定 -->
<template>
    <div>
        <label><input type="checkbox"v-model="selectedFruits"value="苹果"/>
        苹果</label>
        <label><input type="checkbox"v-model="selectedFruits"value="香蕉"/>
        香蕉</label>
        <label><input type="checkbox"v-model="selectedFruits"value="橘子"/>
        橘子</label>
        <p>您选择的水果：{{selectedFruits.join(', ')}}</p>
    </div>
</template>

<script setup lang="ts">
import{ref}from'vue'

// 选中的水果会以数组的形式存储
const selectedFruits=ref<string[]>([])// 初始值为空数组
</script>