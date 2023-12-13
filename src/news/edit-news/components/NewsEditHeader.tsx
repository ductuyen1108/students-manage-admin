import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { useTranslation } from 'react-i18next';

export default function NewsEditHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={t('news.edit.title')}
        links={[
          { name: t('news.news_management'), href: PATH_DASHBOARD.news.list },
          { name: t('news.list.title'), href: PATH_DASHBOARD.news.list },
          { name: t('news.edit.title') },
        ]}
      />
    </>
  );
}
