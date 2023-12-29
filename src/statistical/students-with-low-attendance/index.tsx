import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import { Container } from '@mui/material';
import StudentLowAttendanceListHeader from './components/StudentLowAttendanceListHeader';
import StudentLowAttendanceTable from './components/student-low-attendance-table/StudentLowAttendanceTable';

export default function CreateNews() {
  const { themeStretch } = useSettings();
  return (
    <Page title={"Thống kê những đoàn sinh đi học muộn"}>
      <Container maxWidth={themeStretch ? 'sm' : 'xl'}>
        <StudentLowAttendanceListHeader />
        <StudentLowAttendanceTable />
      </Container>
    </Page>
  );
}
