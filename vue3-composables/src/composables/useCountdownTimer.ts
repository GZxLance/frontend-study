// useCountdownTimer.ts
import { ref, onUnmounted } from 'vue';

export function useCountdownTimer() {
  const timeLeft = ref(60);

  let intervalId: number | undefined;

  const start = () => {
    intervalId = window.setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(intervalId as number);
      }
    }, 1000);
  };

  const reset = () => {
    timeLeft.value = 60;
    clearInterval(intervalId as number);
  };

  onUnmounted(() => {
    clearInterval(intervalId as number);
  });

  return { timeLeft, start, reset };
}