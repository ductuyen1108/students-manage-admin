import { Button, Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import ImportFileScore from './ImportFileScore';
import ExportFileScore from './ExportFileScore';
import { useSelector } from 'src/common/redux/store';

export default function AttendanceListHeader() {
  const { dataSearch } = useSelector((state) => state.listScore)
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Danh sách điểm đoàn sinh"}
        links={[
          { name: "Quản lý điểm đoàn sinh", href: PATH_DASHBOARD.attendance.list },
          { name: 'Danh sách điểm đoàn sinh' },
        ]}
        action={
          <Stack spacing={2} direction={"row"}>
            <ImportFileScore />
            <ExportFileScore prop={{classId: dataSearch.classId}} />
          </Stack>
        }
      />
    </>
  );
}
