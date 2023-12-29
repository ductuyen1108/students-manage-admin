import { Button } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'src/common/redux/store';
import { dataFilter } from '../slice';
import { useRequestStudentLowAttendance } from '../common/hooks/useRequestExportStudentLowAttendance';
import useShowSnackbar from 'src/common/hooks/useMessage';

export default function StudentLowAttendanceListHeader() {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const contentFilter = useSelector(dataFilter);

  const { mutate, isLoading } = useRequestStudentLowAttendance({
    onSuccess: () => {
      showSuccessSnackbar('Xuất file thành công');
    },
    onError: () => {
      showErrorSnackbar('Xuất file thất bại');
    },
  });

  const handleClick = () => {
    mutate(contentFilter)
  }
  return (
    <>
      <HeaderBreadcrumbs
        heading={'Danh sách đoàn sinh đi học muộn'}
        links={[
          { name: 'Quản lý thống kê', href: PATH_DASHBOARD.statistical.root },
          { name: 'Danh sách đoàn sinh đi học muộn' },
        ]}
        action={
          <LoadingButton
            variant="outlined"
            endIcon={<Iconify icon={'mdi:cloud-download'} />}
            loading={isLoading}
            onClick={handleClick}
          >
            Xuất file
          </LoadingButton>
        }
      />
    </>
  );
}
