import { Button, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LoadingButton } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/common/components/hook-form';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from '../../../common/redux/store';
import { setDataFilter } from '../slice';
import { useTranslation } from 'react-i18next';
import { IChienNonFilter, IChienNonSubmitFilter } from 'src/chien-non/common/interface';
import { defaultValueFilter } from 'src/chien-non/common/constant';
import useGetListClass from 'src/common/hooks/usegetListClass'; 
import RHFSelectPaginationMultiple from 'src/common/components/hook-form/RHFSelectPaginationMutiple';
import { ISubmitFilter } from 'src/common/@types/common.interface';
import RHFSelectItem from 'src/common/components/hook-form/RHFSelcectItem';

type Props = {
  onSetPage: (value: number) => void;
};

function ChienNonFilter({ onSetPage }: Props) {
  const { t } = useTranslation();
  const methods = useForm<IChienNonSubmitFilter>({
    defaultValues: defaultValueFilter,
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: ISubmitFilter) => {
    const dataFilter: IChienNonFilter = {
      classId: data.class,
      holyName: data.holyName,
      name: data.name,
    };
    console.log("data asasa ", dataFilter);
    onSetPage(0);
    dispatch(setDataFilter(dataFilter));
  };

  const handleClickDelete = () => {
    reset({
      class: undefined,
      holyName: "",
      name: "",
    });
    dispatch(setDataFilter(defaultValueFilter));
  };

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

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} padding={2}>
          <Stack direction="row" spacing={3}>
            <RHFTextField
              name="name"
              label={'Tên'}
              type="string"
              size="small"
            />
            <RHFTextField
              name="holyName"
              label={'Tên Thánh'}
              type="string"
              size="small"
            />
            <RHFSelectItem 
              name="class"
              options={listClass}
              label={'Chọn lớp'}
              size="small"
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

export default ChienNonFilter;
