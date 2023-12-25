import { Button, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {  useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/common/components/hook-form';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from '../../../common/redux/store';
import { setDataFilter } from '../slice';
import { useTranslation } from 'react-i18next';
import { IClassFilter, IClassSubmitFilter } from 'src/class/common/interface';
import { defaultValueFilter, optionBranchName } from 'src/class/common/constant';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import RHFSelectPaginationMultiple from 'src/common/components/hook-form/RHFSelectPaginationMutiple';

type Props = {
  onSetPage: (value: number) => void;
};

function ClassFilter({ onSetPage }: Props) {
  const { t } = useTranslation();
  const methods = useForm<IClassSubmitFilter>({
    defaultValues: defaultValueFilter,
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: IClassSubmitFilter) => {
    const dataFilter: IClassFilter = {
      branchName: data.branchName?.id,
      className: data.className,
    };
    onSetPage(0);
    dispatch(setDataFilter(dataFilter));
  };

  const handleClickDelete = () => {
    reset({
      branchName: undefined,
      className: '',
    });
    dispatch(setDataFilter(defaultValueFilter));
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} padding={2}>
          <Stack direction="row" spacing={3}>
            <RHFTextField
              name="className"
              label={'Nhập tên lớp'}
              type="string"
              size="small"
            />
            <RHFSelectPagination
              name='branchName'
              labelProp='name'
              label="Tên ngành"
              options={optionBranchName}
              size='small'
              disableClear
            />
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <LoadingButton
              variant="contained"
              startIcon={<Iconify icon="humbleicons:search" />}
              type="submit"
            >
              {t('news.list.search')}
            </LoadingButton>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="ic:baseline-clear" />}
              onClick={handleClickDelete}
            >
              {t('news.list.clear')}
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </>
  );
}

export default ClassFilter;
