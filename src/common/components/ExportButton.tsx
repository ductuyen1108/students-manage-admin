import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { LoadingButton } from '@mui/lab';
import { useRequestExport } from '../hooks/useRequestExport';
import { IDataExportFile } from '../@types/common.interface';
import useShowSnackbar from '../hooks/useMessage';

interface Props {
  prop: IDataExportFile;
}

export default function ExportButton({prop}: Props) {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const {mutate, isLoading} = useRequestExport({
    onSuccess: () => {
      showSuccessSnackbar("Xuất file thành công, truy cập danh sách file để xem thông tin")
    },
    onError: () => {
      showErrorSnackbar("Xuất file thất bại")
    }
  })
  
  const handleClick = () => {
    const dataExportRequest: IDataExportFile = {
      age: prop.age,
      branchName: prop.branchName,
      classId: prop.classId,
      holyName: prop.holyName,
      limit: prop.limit,
      name: prop.name,
      page: prop.page,
    }    
    mutate(dataExportRequest)
  }

  return (
    <LoadingButton
      loading={isLoading}
      component="label"
      variant="outlined"
      startIcon={<CloudDownloadIcon />}
      onClick={handleClick}
    >
      Xuất file
    </LoadingButton>
  );
}
