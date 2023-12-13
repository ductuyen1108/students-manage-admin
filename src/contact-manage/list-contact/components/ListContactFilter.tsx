import { Button, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LoadingButton } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/common/components/hook-form';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from '../../../common/redux/store';
import { useTranslation } from 'react-i18next';
import { IDataFormContactFilter, IContactFilter } from 'src/contact-manage/common/interface';
import { setDataFilter } from '../slice';

type Props = {
  onSetPage: (value: number) => void;
};

function ListContactFilter({ onSetPage }: Props) {
  const { t } = useTranslation();
  const methods = useForm<IDataFormContactFilter>({
    defaultValues: {
      name: undefined,
      phoneNumber: undefined,
      email: undefined,
      company: undefined,
      fromDate: null,
      toDate: null,
    },
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: IDataFormContactFilter) => {
    onSetPage(0);
    const dataSubmit: IContactFilter = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      company: data.company,
      fromDate: data.fromDate,
      toDate: data.toDate,
    };
    dispatch(setDataFilter(dataSubmit));
  };

  const handleClickDelete = () => {
    reset({
      name: '',
      phoneNumber: undefined,
      email: undefined,
      company: undefined,
      fromDate: null,
      toDate: null,
    });
    dispatch(
      setDataFilter({
        name: undefined,
        phoneNumber: undefined,
        email: undefined,
        company: undefined,
        fromDate: null,
        toDate: null,
      })
    );
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} padding={2}>
          <Stack direction="row" spacing={3}>
            <RHFTextField
              name="name"
              label={'Nhập tên'}
              type="string"
              size="small"
            />
            <RHFTextField
              name="phoneNumber"
              label={'Nhập số điện thoại'}
              type="string"
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={3}>
            <RHFTextField
              name="email"
              label={'Nhập email'}
              type="string"
              size="small"
            />
            <RHFTextField
              name="company"
              label={'Nhập tên công ty'}
              type="string"
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={3}>
            <Controller
              name="fromDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Stack position="relative" width="100%">
                  <DatePicker
                    {...field}
                    label={'Ngày bắt đầu'}
                    inputFormat="dd-MM-yyyy"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        helperText={errors.fromDate && errors.fromDate?.message}
                        error={!!errors.fromDate}
                        size="small"
                      />
                    )}
                  />
                </Stack>
              )}
            />

            <Controller
              name="toDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Stack position="relative" width="100%">
                  <DatePicker
                    {...field}
                    label={'Ngày kết thúc'}
                    inputFormat="dd-MM-yyyy"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        helperText={errors.toDate && errors.toDate?.message}
                        error={!!errors.toDate}
                        size="small"
                      />
                    )}
                  />
                </Stack>
              )}
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

export default ListContactFilter;
