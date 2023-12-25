import { Button, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {  useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/common/components/hook-form';
import Iconify from 'src/common/components/Iconify';
import { dispatch } from '../../../common/redux/store';
import { setDataFilter } from '../slice';
import { useTranslation } from 'react-i18next';
import { IScoreFilter, ISubmitDataFilter } from 'src/score/common/interface';
import { defaultValueFilter } from 'src/score/common/constant';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import { useGetListClass } from 'src/class/common/hooks/useGetListClass';
import { useState } from 'react';

type Props = {
  onSetPage: (value: number) => void;
};

function ScoreFilter({ onSetPage }: Props) {
  const { t } = useTranslation();
  const [selectedClassId, setSelectedClassId] = useState(undefined);
  const methods = useForm<ISubmitDataFilter>({
    defaultValues: defaultValueFilter,
  });
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  
  const { listClass } = useGetListClass({});

  const listClassName = listClass?.items?.map(item => {
    return {
      id: item.id,
      name: item.className
    }
  });

  console.log("listClassName", listClassName);

  const onSubmit = (data: ISubmitDataFilter) => {
    const dataFilter: IScoreFilter = {
      classId: data.classId.id,
    };
    onSetPage(0);
    dispatch(setDataFilter(dataFilter));
  };

  const handleClickDelete = () => {
    reset({
      classId: undefined,
    });
    dispatch(setDataFilter(defaultValueFilter));
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} padding={2}>
          <Stack direction="row" spacing={3}>
            <RHFSelectPagination
              name='classId'
              labelProp='name'
              label="Tên lớp"
              options={listClassName || []}
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

export default ScoreFilter;
