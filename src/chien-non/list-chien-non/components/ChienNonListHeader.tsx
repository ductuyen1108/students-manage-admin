import { Button, Stack } from '@mui/material';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import Iconify from '../../../common/components/Iconify';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { Link as RouterLink } from 'react-router-dom';
import ImportButton from 'src/common/components/ImportButton';
import { ChangeEvent } from 'react';
import { usePresignFile } from 'src/common/hooks/usePresignImg';
import { useCreateListChienNon } from 'src/chien-non/create-chien-non/hooks/useCreateListChienNon';
import useShowSnackbar from 'src/common/hooks/useMessage';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import ExportButton from 'src/common/components/ExportButton';
import { useSelector } from 'src/common/redux/store';

export default function ChienNonListHeader() {
  const { dataSearch } = useSelector((state) => state.listChienNon);
  const { handleUpload, isUploading } = usePresignFile();
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const queryClient = useQueryClient();
  const { mutate } = useCreateListChienNon({
    onSuccess: () => {
      showSuccessSnackbar('Tạo mới nhiều đoàn sinh thành công!');
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_CHIEN_NON])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
    },
    onError: () => {
      showErrorSnackbar('Tạo mới nhiều đoàn sinh thất bại!!!');
    },
  });

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      try {
        const uploadedFile = await handleUpload(file);

        console.log('Uploaded file:', uploadedFile);
        mutate({ fileId: uploadedFile.id });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  return (
    <>
      <HeaderBreadcrumbs
        heading={'Danh sách đoàn sinh Chiên non'}
        links={[
          { name: 'Quản lý đoàn sinh chiên non', href: PATH_DASHBOARD.chienNon.list },
          { name: 'Danh sách đoàn sinh Chiên non' },
        ]}
        action={
          <Stack direction={'row'} spacing={2}>
            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
              to={PATH_DASHBOARD.chienNon.create}
              component={RouterLink}
            >
              Thêm mới đoàn sinh
            </Button>
            <ImportButton handleChange={handleChange} isSubmitting={isUploading} />
            <ExportButton
              prop={{
                age: dataSearch.age,
                branchName: "CHIEN_NON",
                holyName: dataSearch.holyName,
                name: dataSearch.name,
              }}
            />
          </Stack>
        }
      />
    </>
  );
}
