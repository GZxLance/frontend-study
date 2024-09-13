<template>
  <div>
    <h2>{{ userName }}</h2>
    <p>{{ firstName }}</p>
    <p>{{ jieshao }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const userName = ref<string>('孙悟空')
const firstName = ref<string>('齐天大圣')
const jieshao = ref<string>('在《西游记》中，孙悟空是一个勇敢无畏、机智聪明的角色，以其强大的能力和不屈的精神著称。')
</script>

<style>
div {
  background-color: rgb(255, 235, 156);
  text-align: center;
  padding: 5px;

}
</style>