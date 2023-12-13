import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { useTranslation } from 'react-i18next';

export default function CreateNewsHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={t('news.new.title')}
        links={[
          { name: t('news.news_management'), href: PATH_DASHBOARD.news.list },
          { name: t('news.new.title') },
        ]}
      />
    </>
  );
}
