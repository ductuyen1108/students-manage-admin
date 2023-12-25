import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import ClassListHeader from './components/ClassListHeader';
import ClassTable from './components/class-table/ClassTable';
import { Container } from '@mui/material';

export default function ListNews() {
  const { themeStretch } = useSettings();
  return (
    <Page title={"Danh sách lớp học"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <ClassListHeader />
        <ClassTable />
      </Container>
    </Page>
  );
}
