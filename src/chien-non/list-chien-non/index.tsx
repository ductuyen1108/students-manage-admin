import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import ChienNonListHeader from './components/ChienNonListHeader';
import ChienNonTable from './components/chien-non-table/ChienNonTable';

export default function CreateNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <ChienNonListHeader />
        <ChienNonTable />
      </Container>
    </Page>
  );
}
