import { Button, Stack } from '@mui/material';
import { FormProvider } from 'src/common/components/hook-form';
import RHFDatePicker from 'src/common/components/hook-form/RHFDatePicker';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import { defaultValueFilter, optionsBranchName } from '../common/constant';
import { useDispatch } from 'src/common/redux/store';
import { useForm } from 'react-hook-form';
import { IParamsAttendancePercent, ISubmitFiler } from '../common/interface';
import { setDataFilter } from '../slice';
import { LoadingButton } from '@mui/lab';

const AttendancePercentFilter = () => {
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
    const dataFilter: IParamsAttendancePercent = {
      branch: data.branch?.name,
      endDate: data.endDate,
      startDate: data.startDate,
    };
    console.log('data asasas ', dataFilter);
    dispatch(setDataFilter(dataFilter));
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2}>
        <RHFDatePicker name="startDate" label={'Ngày bắt đầu'} />
        <RHFDatePicker name="endDate" label={'Ngày kết thúc'} />
        <RHFSelectPagination
          name="branch"
          options={optionsBranchName}
          labelProp="name"
          label="Tên ngành"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ minHeight: '10px' }}
        >
          Tìm kiếm
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default AttendancePercentFilter;
