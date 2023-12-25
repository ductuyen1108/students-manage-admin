import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function AttendanceListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Danh sách điểm danh"}
        links={[
          { name: "Quản lý điểm danh", href: PATH_DASHBOARD.attendance.list },
          { name: 'Danh sách điểm danh' },
        ]}
        action={
          <></>
        }
      />
    </>
  );
}
