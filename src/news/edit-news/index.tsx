import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import NewsEditForm from './components/NewsEditForm';
import NewsEditHeader from './components/NewsEditHeader';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function EditNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.edit.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <NewsEditHeader />
        <NewsEditForm />
      </Container>
    </Page>
  );
}
