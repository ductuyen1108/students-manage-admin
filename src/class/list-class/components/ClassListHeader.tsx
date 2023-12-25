import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function ClassListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Danh sách lớp học"}
        links={[
          { name: "Quản lý lớp học", href: PATH_DASHBOARD.class.list },
          { name: 'Danh sách lớp học' },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fildl'} />}
            to={PATH_DASHBOARD.class.create}
            component={RouterLink}
          >
            Tạo mới lớp học
          </Button>
        }
      />
    </>
  );
}
