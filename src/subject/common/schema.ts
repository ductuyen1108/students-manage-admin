import * as Yup from 'yup';
import i18next from 'i18next';

export const SubjectSchema = Yup.object().shape({
  //   lang: Yup.object().nullable().required(i18next.t('schema.required')),
  name: Yup.string()
    .required(i18next.t('schema.required'))
    .max(128, i18next.t('schema.max', { number: 128 })),
  priority: Yup.number()
    .typeError(i18next.t('schema.required'))
    .required(i18next.t('schema.required')),
  image: Yup.mixed().required(i18next.t('schema.required')),
});
