import { Button, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LoadingButton } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/common/components/hook-form';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from '../../../common/redux/store';
import { setDataFilter } from '../slice';
import { useTranslation } from 'react-i18next';
import { INewsFilter, INewsSubmitFilter } from 'src/news/common/interface';
import { defaultValueFilter } from 'src/news/common/constant';
import { useGetSubject } from 'src/news/common/hooks/useGetSubject';
import RHFSelectPaginationMultiple from 'src/common/components/hook-form/RHFSelectPaginationMutiple';

type Props = {
  onSetPage: (value: number) => void;
};

function NewsFilter({ onSetPage }: Props) {
  const { t } = useTranslation();
  const methods = useForm<INewsSubmitFilter>({
    defaultValues: defaultValueFilter,
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: INewsSubmitFilter) => {
    const dataFilter: INewsFilter = {
      title: data.title,
      subjectIds: data.subjects?.map((item) => item?.id),
      fromDate: data.fromDate,
      toDate: data.toDate,
    };
    onSetPage(0);
    dispatch(setDataFilter(dataFilter));
  };

  const handleClickDelete = () => {
    reset({
      title: '',
      subjects: [],
      fromDate: null,
      toDate: null,
    });
    dispatch(setDataFilter(defaultValueFilter));
  };

  const {
    dataSubject,
    fetchNextPageSubject,
    isFetchingNextPageSubject,
    isLoadingSubject,
  } = useGetSubject({
    page: 1,
    limit: 10,
  });
  const listSubject =
    dataSubject?.pages
      ?.map((item) =>
        item?.items?.map((item) => {
          return {
            id: item?.id,
            name: item?.subjectDetails[0]?.name,
          };
        })
      )
      .flat() || [];

  const handleScrollSubject = (event: any) => {
    const listBoxNode = event?.currentTarget;
    const position = listBoxNode?.scrollTop + listBoxNode?.clientHeight;
    if (listBoxNode.scrollHeight - position <= 1) {
      fetchNextPageSubject();
    }
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} padding={2}>
          <Stack direction="row" spacing={3}>
            <RHFTextField
              name="title"
              label={'Nhập tiêu đề'}
              type="string"
              size="small"
            />
            <RHFSelectPaginationMultiple
              name="subjects"
              options={listSubject}
              labelProp="name"
              label={'Chọn chủ đề'}
              listBoxScroll={handleScrollSubject}
              loadingScroll={isFetchingNextPageSubject}
              isLoading={isLoadingSubject}
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

export default NewsFilter;
