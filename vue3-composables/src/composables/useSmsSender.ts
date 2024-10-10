// useSmsSender.ts
import { ref } from 'vue';

interface SmsSender {
  sending: boolean;
  sendMessage: (phoneNumber: string, message: string) => Promise<void>;
}

export function useSmsSender(): SmsSender {
  const sending = ref(false);

  const sendMessage = async (phoneNumber: string, message: string): Promise<void> => {
    if (!phoneNumber || !message) {
      return; // 如果电话号码或消息为空，则不执行发送操作
    }

    sending.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 模拟网络延迟
    sending.value = false;
  };

  return { sending: sending.value, sendMessage };
}