import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';

export default function HiepSiListHeader() {
  return (
    <>
      <HeaderBreadcrumbs
        heading={'Danh sách đoàn sinh Hiệp sĩ'}
        links={[
          { name: 'Quản lý đoàn sinh Hiệp sĩ', href: PATH_DASHBOARD.hiepSi.list },
          { name: 'Danh sách đoàn sinh Hiệp sĩ' },
        ]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon={'eva:plus-fill'} />}
            to={PATH_DASHBOARD.hiepSi.create}
            component={RouterLink}
          >
            Thêm mới đoàn sinh
          </Button>
        }
      />
    </>
  );
}
