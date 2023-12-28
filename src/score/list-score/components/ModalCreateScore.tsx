import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Iconify from 'src/common/components/Iconify';
import { MenuItem, Stack } from '@mui/material';
import { useGetScoreById } from 'src/score/common/hooks/useGetScoreById';
import { FormProvider, RHFTextField } from 'src/common/components/hook-form';
import { useForm } from 'react-hook-form';
import useDeepEffect from 'src/common/hooks/useDeepEffect';
import { IDataCreateScore, IDataEditScore, ISubmitDataCreateScore, ISubmitDataEditScore } from 'src/score/common/interface';
import useShowSnackbar from 'src/common/hooks/useMessage';
import { useCreateScore } from 'src/score/common/hooks/useCreateScore';

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
  name: string;
  lastName: string;
  classId: number;
  studentId: number;
}

export default function ModalCreateScore({ id, name, lastName, classId, studentId }: Props) {
  const [open, setOpen] = React.useState(false);
  const { useDeepCompareEffect } = useDeepEffect();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { mutate: mutateCreate } = useCreateScore({
    onSuccess: () => {
      showSuccessSnackbar('Tạo điểm đoàn sinh thành công');
    },
    onError: () => {
      showErrorSnackbar('Tạo điểm đoàn sinh thất bại');
    },
  });
  const methods = useForm<IDataCreateScore>({
    defaultValues: {
      classId: classId,
      finalScore: 0,
      midScore: 0,
      studentId: studentId,
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  const { scoreById } = useGetScoreById(id);

  useDeepCompareEffect(() => {
    if (scoreById) {
      const dataVN = {
        midScore: scoreById.midScore,
        finalScore: scoreById.finalScore,
        studentId: studentId,
        classId: classId,
      };
      reset(dataVN);
    }
  }, [scoreById]);

  const onSubmit = async (data: ISubmitDataCreateScore) => {
    const createData: IDataCreateScore = {
      classId: classId,
      finalScore: Number(data.finalScore),
      midScore: Number(data.midScore),
      studentId: studentId,
    };
    console.log("createData", createData);
    mutateCreate(createData);
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
        <Iconify icon={'eva:edit-fill'} />
        Sửa
      </MenuItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {lastName} {name}
        </DialogTitle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} width={'100%'} padding={2}>
            <RHFTextField name="midScore" label="Điểm giữa kỳ" size="small" />
            <RHFTextField name="finalScore" label="Điểm cuối kỳ" size="small" />
          </Stack>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="contained" type="submit" onClick={handleClose}>
              Xác nhận
            </Button>
          </DialogActions>
        </FormProvider>
      </Dialog>
    </React.Fragment>
  );
}
