import * as Yup from 'yup';
export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Trường này không được để trống'),
  password: Yup.string().required('Trường này không được để trống'),
});
