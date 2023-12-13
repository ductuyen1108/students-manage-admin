import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function NghiaSiListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={'Danh sách đoàn sinh Nghĩa Sĩ'}
        links={[
          { name: 'Quản lý đoàn sinh Nghĩa Sĩ', href: PATH_DASHBOARD.nghiaSi.list },
          { name: 'Danh sách đoàn sinh Nghĩa Sĩ' },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fill'} />}
            to={PATH_DASHBOARD.nghiaSi.create}
            component={RouterLink}
          >
            Thêm mới đoàn sinh
          </Button>
        }
      />
    </>
  );
}
