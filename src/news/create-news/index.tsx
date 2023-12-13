import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import CreateNewsForm from './components/CreateNewsForm';
import CreateNewsHeader from './components/CreateNewsHeader';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function CreateNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <CreateNewsHeader />
        <CreateNewsForm />
      </Container>
    </Page>
  );
}
