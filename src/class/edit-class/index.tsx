import { Container } from '@mui/material';
import Page from '../../common/components/Page';
import EditClassForm from './components/EditClassForm';
import EditClassHeader from './components/EditClasssHeader';
import useSettings from '../../common/hooks/useSettings';

function EditClass() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Chỉnh sửa chủ đề">
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <EditClassHeader />
        <EditClassForm />
      </Container>
    </Page>
  );
}

export default EditClass;
