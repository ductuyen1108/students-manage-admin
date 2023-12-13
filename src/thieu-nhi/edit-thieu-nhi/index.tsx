import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
/* import ChienNonEditForm from './components/ChienNonEditForm';
import ChienNonEditHeader from './components/ChienNonEditHeader'; */
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

export default function EditChienNon() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title={"Chỉnh sửa đoàn sinh Chiên Non"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        {/* <ChienNonEditHeader />
        <ChienNonEditForm /> */}
      </Container>
    </Page>
  );
}
