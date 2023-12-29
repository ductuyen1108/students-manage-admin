import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { LoadingButton } from '@mui/lab';
import { useRequestExportScore } from 'src/score/common/hooks/useRequestExportScore'; 
import { IDataExportFile } from 'src/score/common/interface';
import useShowSnackbar from 'src/common/hooks/useMessage'; 

interface Props {
  prop: IDataExportFile;
}

export default function ExportFileScore({prop}: Props) {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const {mutate, isLoading} = useRequestExportScore({
    onSuccess: () => {
      showSuccessSnackbar("Xuất file thành công, truy cập danh sách file để xem thông tin")
    },
    onError: () => {
      showErrorSnackbar("Xuất file thất bại")
    }
  })
  
  const handleClick = () => {
    const dataExportRequest: IDataExportFile = {
      classId: prop.classId
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
