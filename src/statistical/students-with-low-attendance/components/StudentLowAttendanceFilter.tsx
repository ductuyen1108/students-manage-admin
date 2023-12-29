import { Button, Stack } from '@mui/material';
import { FormProvider } from 'src/common/components/hook-form';
import RHFDatePicker from 'src/common/components/hook-form/RHFDatePicker';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import { defaultValueFilter, optionsBranchName } from '../common/constant';
import { useDispatch } from 'src/common/redux/store';
import { useForm } from 'react-hook-form';
import { IParamsStudentLowAttendance, ISubmitFiler } from '../common/interface';
import { setDataFilter } from '../slice';
import { LoadingButton } from '@mui/lab';
import Iconify from 'src/common/components/Iconify';

type Props = {
  onSetPage: (value: number) => void;
};

const StudentLowAttendanceFilter = ({ onSetPage }: Props) => {
  const dispatch = useDispatch();

  const methods = useForm<ISubmitFiler>({
    defaultValues: defaultValueFilter,
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: ISubmitFiler) => {
    const dataFilter: IParamsStudentLowAttendance = {
      branch: data.branch?.name,
      endDate: data.endDate,
      startDate: data.startDate,
    };
    onSetPage(0);
    console.log('data asasas ', dataFilter);
    dispatch(setDataFilter(dataFilter));
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2} justifyContent={"space-between"}>
        <RHFDatePicker name="startDate" label={'Ngày bắt đầu'} size="small" />
        <RHFDatePicker name="endDate" label={'Ngày kết thúc'} size="small" />
        <RHFSelectPagination
          name="branch"
          options={optionsBranchName}
          labelProp="name"
          label="Tên ngành"
          size="small"
        />
        <LoadingButton
          variant="contained"
          fullWidth
          startIcon={<Iconify icon="humbleicons:search" />}
          type="submit"
          sx={{ minHeight: "10px !important", height: "40px"}}
        >
          Tìm kiếm
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
};

export default StudentLowAttendanceFilter;
