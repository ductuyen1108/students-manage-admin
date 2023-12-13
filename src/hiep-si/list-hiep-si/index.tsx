import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import HiepSiListHeader from './components/HiepSiListHeader';
import HiepSiTable from './components/hiep-si-table/HiepSiTable';

export default function CreateHiepSi() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <HiepSiListHeader />
        <HiepSiTable />
      </Container>
    </Page>
  );
}
