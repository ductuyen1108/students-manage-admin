import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent } from 'react';
import { LoadingButton } from '@mui/lab';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface Props {
  click?: () => VoidFunction;
  isSubmitting: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => Promise<any>;
};

export default function ImportButton({ click, handleChange, isSubmitting }: Props) {
  return (
    <LoadingButton
      loading={isSubmitting}
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      onClick={click}
    >
      Tải file lên
      <VisuallyHiddenInput type="file" accept='*/*' onChange={handleChange}/>
    </LoadingButton>
  );
}
