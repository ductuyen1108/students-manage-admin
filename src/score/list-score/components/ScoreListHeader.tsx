import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import Iconify from 'src/common/components/Iconify';
import { Link as RouterLink } from 'react-router-dom';

export default function AttendanceListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Danh sách điểm đoàn sinh"}
        links={[
          { name: "Quản lý điểm đoàn sinh", href: PATH_DASHBOARD.attendance.list },
          { name: 'Danh sách điểm đoàn sinh' },
        ]}
        action={
          <></>
        }
      />
    </>
  );
}
