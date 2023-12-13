import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import NghiaSiListHeader from './components/NghiaSiListHeader';
import NghiaSiTable from './components/nghia-si-table/NghiaSiTable';

export default function CreateNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <NghiaSiListHeader />
        <NghiaSiTable />
      </Container>
    </Page>
  );
}
