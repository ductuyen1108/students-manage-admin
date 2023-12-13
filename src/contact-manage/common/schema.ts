import i18next from 'i18next';
import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().required(i18next.t('schema.required')),
  phoneNumber: yup
    .string()
    .required(i18next.t('schema.required'))
    .max(12, i18next.t('schema.max', { number: 12 })),
  email: yup
    .string()
    .required(i18next.t('schema.required')),
  company: yup
    .string()
    .nullable()
    .required(i18next.t('schema.required')),
  message: yup
    .string()
    .nullable()
    .required(i18next.t('schema.required')),
});
