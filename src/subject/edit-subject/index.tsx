import { Container } from '@mui/material';
import Page from '../../common/components/Page';
import EditSubjectForm from './components/EditSubjectForm';
import EditSubjectHeader from './components/EditSubjectHeader';
import useSettings from '../../common/hooks/useSettings';

function EditSubject() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Chỉnh sửa chủ đề">
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <EditSubjectHeader />
        <EditSubjectForm />
      </Container>
    </Page>
  );
}

export default EditSubject;
