import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import CreateThieuNhiHeader from './components/CreateThieuNhiHeader';
import CreateThieuNhiForm from './components/CreateThieuNhiForm';

export default function CreateNews() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={t('news.new.title')}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <CreateThieuNhiHeader />
        <CreateThieuNhiForm />
      </Container>
    </Page>
  );
}
