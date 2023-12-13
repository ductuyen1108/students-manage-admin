import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import AuNhiListHeader from './components/AuNhiListHeader';
import AuNhiTable from './components/au-nhi-table/AuNhiTable';

export default function CreateNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <AuNhiListHeader />
        <AuNhiTable />
      </Container>
    </Page>
  );
}
