import { Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';

export default function CreateHiepSiHeader() {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
      <HeaderBreadcrumbs
        heading={'Thêm mới đoàn sinh Hiệp sĩ'}
        links={[
          { name: 'Quản lý đoàn sinh Hiệp sĩ', href: PATH_DASHBOARD.hiepSi.list },
          { name: 'Thêm mới đoàn sinh Hiệp sĩ' },
        ]}
      />
    </Stack>
  );
}
