import * as yup from 'yup';
import i18next from 'i18next';

export const schemaNews = yup.object().shape({
  title: yup
    .string()
    .required(i18next.t('news.form.required'))
    .max(128, i18next.t('schema.max', { number: 128 })),
  author: yup
    .string()
    .required(i18next.t('news.form.required'))
    .max(30, i18next.t('schema.max', { number: 30 })),
  content: yup
    .string()
    .required(i18next.t('news.form.required'))
    .max(150000, i18next.t('schema.max', { number: '150.000' })),
  description: yup
    .string()
    .required(i18next.t('news.form.required'))
    .max(256, i18next.t('schema.max', { number: 256 })),
  subjects: yup
    .array()
    .min(1, i18next.t('news.form.required'))
    .required(i18next.t('news.form.required')),
  image: yup.mixed().required(i18next.t('news.form.required')),
  status: yup.object().nullable().required(i18next.t('news.form.required')),
  // lang: yup.object().nullable().required(i18next.t('news.form.required')),
});
