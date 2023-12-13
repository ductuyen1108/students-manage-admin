import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function ThieuNhiListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={'Danh sách đoàn sinh Chiên non'}
        links={[
          { name: 'Quản lý đoàn sinh chiên non', href: PATH_DASHBOARD.thieuNhi.list },
          { name: 'Danh sách đoàn sinh Chiên non' },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fill'} />}
            to={PATH_DASHBOARD.thieuNhi.create}
            component={RouterLink}
          >
            Thêm mới đoàn sinh
          </Button>
        }
      />
    </>
  );
}
