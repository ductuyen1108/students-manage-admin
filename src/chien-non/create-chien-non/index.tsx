import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import CreateChienNonHeader from './components/CreateChienNonHeader';
import CreateChienNonForm from './components/CreateChienNonForm';

export default function CreateChienNon() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <CreateChienNonHeader />
        <CreateChienNonForm />
      </Container>
    </Page>
  );
}
