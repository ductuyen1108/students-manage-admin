import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import CreateClassForm from './components/CreateClassForm';
import CreateClassHeader from './components/CreateClassHeader';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function CreateClass() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={"Tạo mới lớp học"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <CreateClassHeader />
        <CreateClassForm />
      </Container>
    </Page>
  );
}
