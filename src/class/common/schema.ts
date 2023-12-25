import * as yup from 'yup';
import i18next from 'i18next';

export const schemaClass = yup.object().shape({
  className: yup
    .string()
    .required(i18next.t('news.form.required')),
});