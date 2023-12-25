import { Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function CreateAuNhiHeader() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <HeaderBreadcrumbs
        heading={'Thêm mới đoàn sinh Âu Nhi'}
        links={[
          { name: 'Quản lý đoàn sinh Âu Nhi', href: PATH_DASHBOARD.auNhi.list },
          { name: 'Thêm mới đoàn sinh Âu Nhi' },
        ]}
      />
    </Stack>
  );
}
