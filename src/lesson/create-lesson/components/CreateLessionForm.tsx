import { useNavigate } from 'react-router-dom';
import { FormProvider, RHFTextField } from '../../../common/components/hook-form';
import { Paper, Stack, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useMessage from '../../../common/hooks/useMessage';
import Iconify from '../../../common/components/Iconify';
import { IDataCreateLesion, ISubmitCreateLesion } from 'src/lesson/common/interface';
import { schemaClass } from 'src/class/common/schema';
import { DEFAULT_VALUE_FORM_LESION, optionBranchName } from 'src/lesson/common/constant';
import { useCreateLesion } from 'src/lesson/common/hooks/useCreateLesion';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import { useGetListClass } from 'src/class/common/hooks/useGetListClass';
import RHFDateTimePicker from 'src/common/components/hook-form/RHFDateTimePicker';

function CreateClassForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const methods = useForm<ISubmitCreateLesion>({
    /* resolver: yupResolver(schemaClass), */
    defaultValues: DEFAULT_VALUE_FORM_LESION,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const { listClass } = useGetListClass({});

  const optionClass = listClass?.items?.map(item => {
    return {
      id: item.id,
      name: item.className
    }
  })

  const { mutate } = useCreateLesion({
    onSuccess: () => {
      showSuccessSnackbar(t('news.new.newSuccess'));
      navigate(PATH_DASHBOARD.class.list);
    },
    onError: () => {
      showErrorSnackbar(t('news.new.newFail'));
    },
  });

  const onSubmit = async (data: ISubmitCreateLesion) => {
    const dataCreate: IDataCreateLesion = {
      title: data.title,
      startTime: data.startTime,
      content: data.content,
      endTime: data.endTime,
      classId: data.classId.id
    };
    mutate(dataCreate);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={3}>
        <Paper elevation={3} sx={{ boxShadow: 10 }}>
          <Stack direction="column" spacing={3} padding={3}>
            <Stack direction={'row'} spacing={3}>
                <RHFTextField name="title" label={'Tiêu đề'} size="small" />
                <RHFTextField name="content" label={'Nội dung'} size="small" />
                <RHFSelectPagination
                  name="classId"
                  labelProp="name"
                  label="Tên lớp"
                  options={optionClass || []}
                  size="small"
                  disableClear
                />
            </Stack>
            <Stack direction={'row'} spacing={3}>
              <RHFDateTimePicker name='startTime' label={"Thời gian bắt đầu"} />
              <RHFDateTimePicker name='endTime' label={"Thời gian kết thúc"} />
            </Stack>
          </Stack>
        </Paper>
        <Stack justifyContent="flex-end" spacing={2} direction="row" sx={{ marinTop: 3 }}>
          <LoadingButton
            variant="contained"
            type="submit"
            startIcon={<Iconify icon="material-symbols:add-circle-outline-rounded" />}
            loading={isSubmitting}
          >
            {t('create')}
          </LoadingButton>
          <Button
            startIcon={<Iconify icon="ph:x-circle" />}
            color="inherit"
            variant="contained"
            onClick={() => navigate(PATH_DASHBOARD.class.list)}
          >
            {t('cancel')}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default CreateClassForm;
