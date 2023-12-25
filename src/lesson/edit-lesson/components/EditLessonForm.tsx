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
import { useGetLesionById } from 'src/lesson/common/hooks/useGetLesionById';
import { useEditLesion } from 'src/lesson/common/hooks/useEditLesion';
import { IDataFormEditLesion, IDataCreateLesion, ISubmitDataEditLesion } from 'src/lesson/common/interface';
import RHFDateTimePicker from 'src/common/components/hook-form/RHFDateTimePicker';

export default function EditLessiontForm() {
  const { useDeepCompareEffect } = useDeepEffect();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<IDataCreateLesion>({
    defaultValues: {
      classId: undefined,
      content: "",
      startTime: "",
      endTime: "",
      title: ""
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  const { id: subjectId } = useParams();

  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();

  const { mutate, isLoading } = useEditLesion({
    onSuccess: () => {
      showSuccessSnackbar(t('news_subject.edit.editSuccess'));
      navigate(PATH_DASHBOARD.lesion.list);
    },
    onError: () => showErrorSnackbar(t('news_subject.edit.editFail')),
  });
  const { dataLesion } = useGetLesionById(parseInt(subjectId as string));

  useDeepCompareEffect(() => {
    if (dataLesion) {
      const dataVN = {
        classId: dataLesion?.class?.id,
        title: dataLesion?.title,
        content: dataLesion?.content,
        startTime: dataLesion?.startTime,
        endTime: dataLesion?.endTime,
      };
      reset(dataVN);
    }
  }, [dataLesion]);

  const onSubmit = async (data: ISubmitDataEditLesion) => {
    const editData = {
      formData: {
        classId: data.classId,
        title: data.title,
        content: data.content,
        startTime: data.startTime,
        endTime: data.endTime,
      },
      id: parseInt(subjectId as string),
    };
    mutate(editData);
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} sx={{ padding: 3, boxShadow: 10 }}>
          <Stack spacing={3} direction={'column'}>
            <Stack justifyContent={"space-between"} spacing={3}>
              <RHFTextField
                name="classId"
                label={"Tên lớp"}
                size="small"
              />
              <RHFTextField
                name="title"
                label={"Tiêu đề"}
                size="small"
              />
              <RHFTextField
                name="content"
                label={"Nội dung"}
                size="small"
              />
            </Stack>
            <Stack spacing={3} direction={"row"}>
              <RHFDateTimePicker name='startTime' label="Thời gian bắt đầu" />
              <RHFDateTimePicker name='endTime' label="Thời gian kết thúc" />
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
