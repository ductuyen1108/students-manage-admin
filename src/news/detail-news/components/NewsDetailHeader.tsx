import { useTranslation } from 'react-i18next';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function NewsDetailHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={t('news.detail.title')}
        links={[
          { name: t('news.news_management'), href: PATH_DASHBOARD.news.list },
          { name: t('news.list.title'), href: PATH_DASHBOARD.news.list },
          { name: t('news.detail.title') },
        ]}
      />
    </>
  );
}
