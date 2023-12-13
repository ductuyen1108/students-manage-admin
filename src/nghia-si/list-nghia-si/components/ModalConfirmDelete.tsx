import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { useSelector } from 'react-redux';
import useMessage from '../../../common/hooks/useMessage';
import { dispatch } from '../../../common/redux/store';
import { useDeleteNghiaSi } from '../hooks/useDeleteNghiaSi';
import { isPopup, listIdDelete, setPopup } from '../slice';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalConfirmDelete() {
  const confirmPopup = useSelector(isPopup);
  const selectIds = useSelector(listIdDelete);
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const { mutate: mutationDelete } = useDeleteNghiaSi({
    onSuccess: () => {
      showSuccessSnackbar('Xóa đoàn sinh thành công');
    },
    onError: () => {
      showErrorSnackbar('Xóa đoàn sinh thất bại');
    },
  });
  const handleDeleteCode = () => {
    mutationDelete({ ids: selectIds });
    dispatch(setPopup(false));
  };
  const handleClose = () => {
    dispatch(setPopup(false));
  };

  return (
    <>
      <Dialog
        open={confirmPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ marginBottom: '20px' }}>
          Xóa đoàn sinh
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Bạn có chắc chắn muốn xóa đoàn sinh này?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ width: 450 }}>
          <Stack spacing={3} direction="row">
            <Button variant="contained" color="error" onClick={handleDeleteCode}>
              Xóa
            </Button>
            <Button variant="contained" color="inherit" onClick={handleClose}>
              Thoát
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
