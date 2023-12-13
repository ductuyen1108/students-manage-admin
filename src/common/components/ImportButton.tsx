import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ReactNode } from 'react';

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
};

export default function ImportButton({ click }: Props) {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      onClick={click}
    >
      Tải file lên
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
