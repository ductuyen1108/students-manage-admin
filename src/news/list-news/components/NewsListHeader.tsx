import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { BREADCUMBS } from '../../../common/constants/common.constants';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NewsListHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={t('news.list.title')}
        links={[
          { name: t('news.news_management'), href: PATH_DASHBOARD.news.list },
          { name: t('news.list.title') },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fill'} />}
            to={PATH_DASHBOARD.news.create}
            component={RouterLink}
          >
            {t('news.list.newNews')}
          </Button>
        }
      />
    </>
  );
}
