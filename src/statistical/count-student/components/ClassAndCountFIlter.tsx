import { useForm } from 'react-hook-form';
import { useDispatch } from 'src/common/redux/store';
import { setDataFilter } from '../common/slice';
import { FormProvider } from 'src/common/components/hook-form';
import { Button, Stack } from '@mui/material';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import { optionBranchName } from 'src/class/common/constant';
import { IParamsClassAndInfo, ISubmitClassAndCountFilter } from '../common/interface';
import { defaultValueFilter } from '../common/constant';
import { LoadingButton } from '@mui/lab';
import Iconify from 'src/common/components/Iconify';

const ClassAndCountFilter = () => {
  const dispatch = useDispatch();
  const methods = useForm<ISubmitClassAndCountFilter>({
    defaultValues: defaultValueFilter,
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: ISubmitClassAndCountFilter) => {
    const dataFilter: IParamsClassAndInfo = {
      branch: data.branch?.id,
    };
    console.log('data submit', dataFilter);
    dispatch(setDataFilter({ branch: dataFilter.branch }));
  };

  const handleClickDelete = () => {
    reset({
      branch: undefined,
    });
    dispatch(setDataFilter(defaultValueFilter));
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={3} padding={2} width={'800px'}>
        <RHFSelectPagination
          name="branch"
          labelProp="name"
          label="Tên ngành"
          options={optionBranchName}
          size="small"
          disableClear
        />
        <LoadingButton
          variant="contained"
          startIcon={<Iconify icon="humbleicons:search" />}
          type="submit"
          fullWidth
        >
          Tìm kiếm
        </LoadingButton>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="ic:baseline-clear" />}
          onClick={handleClickDelete}
          fullWidth
        >
          Hủy
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ClassAndCountFilter;
