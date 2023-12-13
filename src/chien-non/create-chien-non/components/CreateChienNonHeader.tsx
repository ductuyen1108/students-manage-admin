import { Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import ImportButton from 'src/common/components/ImportButton';

export default function CreateChienNonHeader() {
  return (
    <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"}>
      <HeaderBreadcrumbs
        heading={'Thêm mới đoàn sinh Chiên non'}
        links={[
          { name: 'Quản lý đoàn sinh Chiên non', href: PATH_DASHBOARD.chienNon.list },
          { name: 'Thêm mới đoàn sinh Chiên non' },
        ]}
      />
      <ImportButton />
    </Stack>
  );
}
