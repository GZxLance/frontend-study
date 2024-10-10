<template>
    <div>
      <p>Time left: {{ timeLeft }} seconds</p>
      <button @click="start">开始</button>
      <button @click="reset">结束</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCountdownTimer } from '../composables/useCountdownTimer';
  
  const { timeLeft, start, reset } = useCountdownTimer();
  </script>