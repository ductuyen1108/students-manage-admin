import i18next from 'i18next';

export const HEAD_TABLE_PROPS = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'img', label: '', align: 'center' },
  { id: 'title', label: i18next.t('news.list.labelTitle'), align: 'left' },
  { id: 'subject', label: i18next.t('news.list.labelSubject'), align: 'center' },
  { id: '', label: i18next.t('news.list.option'), align: 'center' },
];

export const defaultValueFilter = {
  title: undefined,
  fromDate: null,
  toDate: null,
  subjects: undefined,
};

export const statusNews = [
  { name: i18next.t('news.form.active'), id: 'ACTIVE' },
  { name: i18next.t('news.form.in_active'), id: 'INACTIVE' },
];

// export const selectLang = [
//   { id: 'VN', name: i18next.t('vietnameseLang') },
//   { id: 'EN', name: i18next.t('englishLang') },
// ];

export const DEFAULT_VALUE_FORM_NEWS = {
  title: '',
  subjectIds: [],
  status: statusNews[0],
  content: '',
  author: '',
  description: '',
  lang: null,
};
