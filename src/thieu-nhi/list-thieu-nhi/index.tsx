import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import ThieuNhiListHeader from './components/ThieuNhiListHeader';
import ThieuNhiTable from './components/thieu-nhi-table/ThieuNhiTable';

export default function CreateNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <ThieuNhiListHeader />
        <ThieuNhiTable />
      </Container>
    </Page>
  );
}
