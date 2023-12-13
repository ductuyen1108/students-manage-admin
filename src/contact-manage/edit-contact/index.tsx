import Page from '../../common/components/Page';
import EditContactForm from './components/EditContactForm';
import EditContactHeader from './components/EditContactHeader';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function EditContact() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Chỉnh sửa LH">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <EditContactHeader />
        <EditContactForm />
      </Container>
    </Page>
  );
}
