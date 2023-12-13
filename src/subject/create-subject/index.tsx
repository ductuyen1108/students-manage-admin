import { Container } from '@mui/material';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import CreateSubjectHeader from './components/CreateSubjectHeader';
import CreateSubjectForm from './components/CreateSubjectForm';

function CreateSubject() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Tạo mới chủ đề">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CreateSubjectHeader />
        <CreateSubjectForm />
      </Container>
    </Page>
  );
}

export default CreateSubject;
