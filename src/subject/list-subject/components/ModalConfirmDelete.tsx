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
import { useDeleteSubject } from '../hooks/useDeleteSubject';
import { isPopup, listIdDelete, setPopup } from '../slice';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalConfirmDelete() {
  const { t } = useTranslation();
  const confirmPopup = useSelector(isPopup);
  const selectIds = useSelector(listIdDelete);
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const { mutate: mutationDelete } = useDeleteSubject({
    onSuccess: () => {
      showSuccessSnackbar(t('news_subject.list.deleteSuccess'));
    },
    onError: () => {
      showErrorSnackbar(t('news_subject.list.deleteFail'));
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
          {t('news_subject.list.deletePopup')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {t('news_subject.list.confirmDelete')}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ width: 450 }}>
          <Stack spacing={3} direction="row">
            <Button variant="contained" color="error" onClick={handleDeleteCode}>
              {t('news_subject.list.delete')}
            </Button>
            <Button variant="contained" color="inherit" onClick={handleClose}>
              {t('news_subject.list.cancel')}
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
