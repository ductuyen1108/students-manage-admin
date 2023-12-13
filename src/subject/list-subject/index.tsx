import { useTranslation } from 'react-i18next';
import Page from '../../common/components/Page';
import ListSubjectHeader from './components/listSubjectHeader';
import SubjectTable from './components/subject-table/subjectTable';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';

function ListSubject() {
  const { t } = useTranslation();
  const { themeStretch } = useSettings();
  return (
    <Page title="Danh sách chủ đề">
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <ListSubjectHeader />
        <SubjectTable />
      </Container>
    </Page>
  );
}

export default ListSubject;
