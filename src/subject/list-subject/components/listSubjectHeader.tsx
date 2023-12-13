import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { Button } from '@mui/material';
import { BREADCUMBS } from '../../../common/constants/common.constants';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { useTranslation } from 'react-i18next';
import Iconify from '../../../common/components/Iconify';
import { Link as RouterLink } from 'react-router-dom';

export default function ListSubjectHeader() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBreadcrumbs
        heading={t('news_subject.list.title')}
        links={[
          { name: t('news_subject.subject'), href: PATH_DASHBOARD.subject.list },
          { name: t('news_subject.list.title') },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fill'} />}
            to={PATH_DASHBOARD.subject.create}
            component={RouterLink}
          >
            {t('news_subject.list.subjectNews')}
          </Button>
        }
      />
    </>
  );
}
