import { Container } from '@mui/material';
import Page from '../../common/components/Page';
import EditLessionForm from './components/EditLessonForm';
import EditLessionHeader from './components/EditLessionHeader';
import useSettings from '../../common/hooks/useSettings';

function EditLession() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Chỉnh sửa tiết học">
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <EditLessionHeader />
        <EditLessionForm />
      </Container>
    </Page>
  );
}

export default EditLession;
