import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import NewsDetailForm from './components/NewsDetailForm';
import NewsDetailHeader from './components/NewsDetailHeader';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function DetailNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();

  return (
    <Page title={t('news.detail.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <NewsDetailHeader />
        <NewsDetailForm />
      </Container>
    </Page>
  );
}
