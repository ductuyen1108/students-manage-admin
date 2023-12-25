import { Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function CreateThieuNhiHeader() {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
      <HeaderBreadcrumbs
        heading={'Thêm mới đoàn sinh Thiếu Nhi'}
        links={[
          { name: 'Quản lý đoàn sinh Thiếu Nhi', href: PATH_DASHBOARD.thieuNhi.list },
          { name: 'Thêm mới đoàn sinh Thiếu Nhi' },
        ]}
      />
    </Stack>
  );
}
