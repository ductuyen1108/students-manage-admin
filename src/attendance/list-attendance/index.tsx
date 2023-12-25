import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import AttendanceListHeader from './components/AttendanceListHeader';
import AttendanceTable from './components/attendance-table/AttendanceTable';
import { Container } from '@mui/material';

export default function ListNews() {
  const { themeStretch } = useSettings();
  return (
    <Page title={"Danh sách điểm danh"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <AttendanceListHeader />
        <AttendanceTable />
      </Container>
    </Page>
  );
}
