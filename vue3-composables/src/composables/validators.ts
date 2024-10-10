// validators.ts
export const required = (value: any): string | null => {
  if (!value) return '此字段不能为空！';
  return null;
};

export const minLength = (minLength: number) => (value: string): string | null => {
  if (!value || value.length < minLength) {
    return `最小长度为 ${minLength}`;
  }
  return null;
};

export const maxLength = (maxLength: number) => (value: string): string | null => {
  if (!value || value.length > maxLength) {
    return `最大长度为 ${maxLength}`;
  }
  return null;
};

export const isEmail = (value: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value || !emailRegex.test(value)) {
    return '请输入有效的电子邮件地址';
  }
  return null;
};