import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import CreateAuNhiHeader from './components/CreateAuNhiHeader';
import CreateAuNhiForm from './components/CreateAuNhiForm';

export default function CreateAuNhi() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <CreateAuNhiHeader />
        <CreateAuNhiForm />
      </Container>
    </Page>
  );
}
