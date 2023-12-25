import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormProvider, RHFTextField } from '../../../common/components/hook-form';
import Iconify from '../../../common/components/Iconify';
import useMessage from '../../../common/hooks/useMessage';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useDeepEffect from '../../../common/hooks/useDeepEffect';
import { useGetClassById } from 'src/class/common/hooks/useGetClassById';
import { useEditClass } from 'src/class/common/hooks/useEditClass';
import { IDataFormEditClass, IDataCreateClass } from 'src/class/common/interface';

export default function EditClasstForm() {
  const { useDeepCompareEffect } = useDeepEffect();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<IDataCreateClass>({
    defaultValues: {
      className: '',
      branchName: '',
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  const { id: subjectId } = useParams();

  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();

  const { mutate, isLoading } = useEditClass({
    onSuccess: () => {
      showSuccessSnackbar(t('news_subject.edit.editSuccess'));
      navigate(PATH_DASHBOARD.class.list);
    },
    onError: () => showErrorSnackbar(t('news_subject.edit.editFail')),
  });
  const { dataClass } = useGetClassById(parseInt(subjectId as string));

  useDeepCompareEffect(() => {
    if (dataClass) {
      const dataVN = {
        className: dataClass?.className,
        branchName: dataClass?.branchName,
      };
      reset(dataVN);
    }
  }, [dataClass]);

  const onSubmit = async (data: IDataFormEditClass) => {
    const editData = {
      formData: {
        className: data.className,
        branchName: data.branchName,
      },
      id: parseInt(subjectId as string),
    };
    mutate(editData);
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} sx={{ padding: 3, boxShadow: 10 }}>
          <Stack spacing={3} direction={'row'}>
            <Stack spacing={3} flex={1}>
              <RHFTextField
                name="className"
                label={t('news_subject.new.labelName')}
                size="small"
              />
              <RHFTextField
                name="branchName"
                label={t('news_subject.new.priority')}
                size="small"
              />
            </Stack>
          </Stack>
        </Paper>
        <Stack
          direction={'row'}
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 3,
          }}
        >
          <LoadingButton
            loading={isLoading}
            type="submit"
            variant="contained"
            startIcon={<Iconify icon="material-symbols:add-circle-outline-rounded" />}
          >
            {t('edit')}
          </LoadingButton>
          <Button
            color={'inherit'}
            variant="contained"
            startIcon={<Iconify icon="material-symbols:cancel-outline-rounded" />}
            onClick={() => {
              navigate(PATH_DASHBOARD.subject.list);
            }}
          >
            {t('cancel')}
          </Button>
        </Stack>
      </FormProvider>
    </>
  );
}
