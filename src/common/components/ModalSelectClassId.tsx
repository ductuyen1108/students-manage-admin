import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Iconify from 'src/common/components/Iconify';
import { MenuItem, Stack } from '@mui/material';
import { FormProvider } from 'src/common/components/hook-form';
import { useForm } from 'react-hook-form';
import useShowSnackbar from 'src/common/hooks/useMessage';
import RHFSelectItem from './hook-form/RHFSelcectItem';
import { useChangeClass } from '../hooks/useChangeClass';
import useGetListClass from '../hooks/usegetListClass';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  id: number;
  branchName: string;
}

interface IChangeClass {
  classId: number;
  id: number;
  branchName: string;
}

export default function ModalSelectClassId({ id, branchName }: Props) {
  const [open, setOpen] = React.useState(false);
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const {
    dataClass,
    fetchNextPageClass,
    isFetchingNextPageClass,
    isLoadingClass,
  } = useGetListClass({
    page: 1,
    limit: 100,
  });
  const listClass =
    dataClass?.pages
      ?.map((item) =>
        item?.items?.map((item) => {
          return {
            id: item?.id,
            className: item?.className,
          };
        })
      )
      .flat() || [];
    
  const { mutate } = useChangeClass({
    onSuccess: () => {
      showSuccessSnackbar('Chuyển lớp đoàn sinh thành công');
    },
    onError: () => {
      showErrorSnackbar('Chuyển lớp đoàn sinh thất bại');
    },
  });
  const methods = useForm<IChangeClass>({
    defaultValues: {
      classId: undefined,
      branchName: branchName,
      id: id,
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: { classId: number }) => {
    const editData: IChangeClass = {
      id: id,
      branchName: branchName,
      classId: data.classId,
    };
    console.log('editData', editData);
    mutate({
      branchName: editData.branchName,
      classId: editData.classId,
      ids: [editData.id],
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={handleClickOpen}>
        <Iconify icon={'ri:exchange-line'} />
        Chuyển lớp
      </MenuItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Chọn lớp cần chuyển</DialogTitle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack p={2}>
            <RHFSelectItem name="classId" options={listClass} size='small'/>
            <DialogActions>
              <Button variant="outlined" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="contained" type="submit" onClick={handleClose}>
                Xác nhận
              </Button>
            </DialogActions>
          </Stack>
        </FormProvider>
      </Dialog>
    </React.Fragment>
  );
}
