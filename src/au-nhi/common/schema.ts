import * as yup from 'yup';
import { helperText } from 'src/common/constants/helperText.constant';

export const schemaChienNon = yup.object().shape({
  name: yup
    .string()
    .required(helperText.required('Tên đoàn sinh'))
    .max(30, helperText.max('Tên', 30)),
  holyName: yup
    .string()
    .required(helperText.required('Tên thánh'))
    .max(30, helperText.max('Tên thánh', 30)),
  lastName: yup
    .string()
    .required(helperText.required('Họ và tên đệm đoàn sinh'))
    .max(30, helperText.max('Họ và tên đệm', 30)),
  address: yup
    .string()
    .required(helperText.required('Địa chỉ'))
    .max(30, helperText.max('Địa chỉ', 30)),
  birthDate: yup
    .date()
    .typeError(helperText.wrongFormat('Ngày sinh'))
    .required(helperText.required('Ngày sinh')),
  fatherName: yup.string().required(helperText.required('Tên bố')),
  fatherPhoneNumber: yup.string().required(helperText.required('Số điện thoại')),
  fatherBirthDate: yup
    .date()
    .typeError(helperText.wrongFormat('Ngày sinh'))
    .required(helperText.required('Ngày sinh')),
  fatherRolyName: yup
    .string()
    .max(30, helperText.max('Tên thánh', 30))
    .required(helperText.required('Tên thánh')),
  fatherLastName: yup
    .string()
    .max(30, helperText.max('Họ và tên đệm', 30))
    .required(helperText.required('Họ và tên đệm')),
  motherName: yup.string().required(helperText.required('Tên bố')),
  motherPhoneNumber: yup.string().required(helperText.required('Số điện thoại')),
  motherBirthDate: yup
    .date()
    .typeError(helperText.wrongFormat('Ngày sinh'))
    .required(helperText.required('Ngày sinh')),
  motherRolyName: yup
    .string()
    .max(30, helperText.max('Tên thánh', 30))
    .required(helperText.required('Tên thánh')),
  motherLastName: yup
    .string()
    .max(30, helperText.max('Họ và tên đệm', 30))
    .required(helperText.required('Họ và tên đệm')),
});
