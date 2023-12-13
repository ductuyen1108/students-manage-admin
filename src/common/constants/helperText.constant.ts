export const helperText = {
  required: (name: string) => `${name} không được để trống`,
  wrongFormat: (name: string) => `${name} không đúng định dạng`,
  min: (name: string, num: number) => `${name} ít nhất ${num} ký tự`,
  max: (name: string, num: number) => `${name} tối đa ${num} ký tự`,
};
