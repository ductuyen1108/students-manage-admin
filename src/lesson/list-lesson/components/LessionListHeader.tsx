import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function LesionListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={"Danh sách tiết học"}
        links={[
          { name: "Quản lý tiết học", href: PATH_DASHBOARD.lesion.list },
          { name: 'Danh sách tiết học' },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fildl'} />}
            to={PATH_DASHBOARD.lesion.create}
            component={RouterLink}
          >
            Tạo mới tiết học
          </Button>
        }
      />
    </>
  );
}
