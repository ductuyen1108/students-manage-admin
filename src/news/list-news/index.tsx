import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import NewsListHeader from './components/NewsListHeader';
import NewsTable from './components/news-table/NewsTable';
import { Container } from '@mui/material';

export default function ListNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.list.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <NewsListHeader />
        <NewsTable />
      </Container>
    </Page>
  );
}
