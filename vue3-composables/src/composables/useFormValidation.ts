// useForm.ts
import { ref, computed, watch } from 'vue';
// import { required, minLength, maxLength, isEmail } from './validators';

type Rule = (value: any) => string | null;
type Rules = { [key: string]: Rule[] };

export function useForm(initialValues: { [key: string]: any }, rules: Rules) {
  const form = ref({ ...initialValues });
  const errors = ref<{ [key: string]: string | null }>({});
  const isSubmitting = ref(false);
  const isValid = computed(() => Object.values(errors.value).every(error => error === null));
  const loginSuccess = ref(false);
  const loginError = ref("");

  const validateField = (field: string) => {
    const rulesForField = rules[field];
    if (rulesForField) {
      const fieldErrors: string[] = rulesForField.map(rule => rule(form.value[field])).filter(error => error !== null) as string[];
      errors.value[field] = fieldErrors.length > 0 ? fieldErrors.join(", ") : null;
    } else {
      errors.value[field] = null;
    }
  };

  const validateForm = () => {
    Object.keys(form.value).forEach(field => {
      validateField(field);
    });
    return isValid.value;
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    if (validateForm()) {
      isSubmitting.value = true;
      try {
        // 模拟登录逻辑
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟异步操作
        loginSuccess.value = true;
        loginError.value = "";
      } catch (error) {
        loginSuccess.value = false;
        loginError.value = "登录失败，请重试";
      }
      isSubmitting.value = false;
    }
  };

  watch(form, () => {
    Object.keys(form.value).forEach(field => {
      validateField(field);
    });
  }, { deep: true });

  return { form, errors, isSubmitting, handleSubmit, isValid, loginSuccess, loginError };
}