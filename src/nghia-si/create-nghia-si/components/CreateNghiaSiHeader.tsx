import { Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function CreateNghiaSiHeader() {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
      <HeaderBreadcrumbs
        heading={'Thêm mới đoàn sinh Nghĩa Sĩ'}
        links={[
          { name: 'Quản lý đoàn sinh Nghĩa Sĩ', href: PATH_DASHBOARD.nghiaSi.list },
          { name: 'Thêm mới đoàn sinh Nghĩa Sĩ' },
        ]}
      />
    </Stack>
  );
}
