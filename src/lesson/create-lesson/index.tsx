import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import CreateLessionForm from './components/CreateLessionForm';
import CreateLessionHeader from './components/CreateLessionHeader';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function CreateLession() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={"Tạo mới lớp học"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <CreateLessionHeader />
        <CreateLessionForm />
      </Container>
    </Page>
  );
}
