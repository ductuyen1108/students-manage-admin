import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function AuNhiListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={'Danh sách đoàn sinh Âu nhi'}
        links={[
          { name: 'Quản lý đoàn sinh Âu nhi', href: PATH_DASHBOARD.auNhi.list },
          { name: 'Danh sách đoàn sinh Âu nhi' },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fill'} />}
            to={PATH_DASHBOARD.auNhi.create}
            component={RouterLink}
          >
            Thêm mới đoàn sinh
          </Button>
        }
      />
    </>
  );
}
