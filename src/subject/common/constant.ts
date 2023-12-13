import i18next from 'i18next';

export const HEAD_TABLE_PROPS = [
  { id: 'id', label: 'ID', align: 'center' },
  { id: 'img', label: i18next.t('news_subject.list.headImg'), align: 'left' },
  { id: 'name', label: i18next.t('news_subject.list.headTitle'), align: 'left' },
  { id: 'priority', label: i18next.t('news_subject.list.headPriority'), align: 'center' },
  { id: '', label: i18next.t('news_subject.list.headOption'), align: 'center' },
];
