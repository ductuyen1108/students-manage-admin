import { ChangeEvent } from "react";
import ImportButton from "src/common/components/ImportButton";
import useShowSnackbar from "src/common/hooks/useMessage";
import { usePresignFile } from "src/common/hooks/usePresignImg";
import { useCreateListScore } from "src/score/common/hooks/useCreateListScore";

const ImportFileScore = () => {
  const { handleUpload, isUploading } = usePresignFile();
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { mutate } = useCreateListScore({
    onSuccess: () => {
      showSuccessSnackbar('Tạo mới danh sách điểm đoàn sinh thành công!');
    },
    onError: () => {
      showErrorSnackbar('Tạo mới danh sách điểm đoàn sinh thất bại!!!');
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
    <ImportButton handleChange={handleChange} isSubmitting={isUploading} />
  );
}
 
export default ImportFileScore;