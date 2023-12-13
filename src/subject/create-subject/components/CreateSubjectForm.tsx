import { Button, FormHelperText, Paper, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
  FormProvider,
  RHFTextField,
  RHFUploadSingleFile,
} from 'src/common/components/hook-form';
import { useCreateSubject } from '../hooks/useCreateSubject';
import { useCallback } from 'react';
import { IDataCreate, IFormCreateSubject } from 'src/subject/common/interface';
import { fData } from 'src/common/utils/formatNumber';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import Iconify from 'src/common/components/Iconify';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'src/common/routes/paths';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubjectSchema } from 'src/subject/common/schema';
import { usePresignImg } from 'src/common/hooks/usePresignImg';
import useMessage from 'src/common/hooks/useMessage';

export default function CreateSubjectForm() {
  const methods = useForm<IFormCreateSubject>({
    resolver: yupResolver(SubjectSchema),
    defaultValues: {
      name: '',
    },
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showErrorSnackbar, showSuccessSnackbar } = useMessage();
  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = methods;
  const { mutate } = useCreateSubject({
    onSuccess: () => {
      showSuccessSnackbar('Tạo chủ đề thành công');
      navigate(PATH_DASHBOARD.subject.list);
    },
    onError: () => {
      showErrorSnackbar('Tạo chủ đề thất bại');
    },
  });
  const { handleUpload } = usePresignImg();
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue(
          'image',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  const onSubmit = async (data: IFormCreateSubject) => {
    const file = await handleUpload(data?.image as File);
    const dataSubmit: IDataCreate = {
      priority: data.priority,
      subjectDetails: [
        {
          name: data.name,
          lang: 'EN' || "VN",
        },
      ],
      thumbnailId: file?.id,
    };
    mutate(dataSubmit);
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Stack spacing={3} direction={'row'}>
            <Stack flex={1}>
              <RHFUploadSingleFile
                name="image"
                maxSize={3145728}
                onDrop={handleDrop}
                accept={{ 'image/*': [] }}
                isContainImg
                helperText={
                  <>
                    <FormHelperText
                      sx={{ color: 'red', paddingLeft: '16px', marginTop: 1 }}
                    >
                      {errors?.image?.message}
                    </FormHelperText>
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        mx: 'auto',
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.secondary',
                      }}
                    >
                      Cho phép *.jpeg, *.jpg, *.png
                      <br />
                      Dung lượng lớn nhất: {fData(3145728)}
                    </Typography>
                  </>
                }
              />
            </Stack>
            <Stack spacing={3} flex={1}>
              <RHFTextField name="name" label="Tên chủ đề" size="small" />
              <RHFTextField
                name="priority"
                label="Độ ưu tiên"
                type="number"
                size="small"
              />
              <Typography sx={{ fontSize: '13px', marginTop: 2, color: 'red' }}>
                * Vui lòng điền số để chọn thứ tự ưu tiên hiểu thị của danh mục chủ đề
                (VD: Số 1 ưu tiên hiển thị đầu, số 2 ưu tiên hiển thị thứ 2,... và hai chủ
                đề cùng độ ưu tiên sẽ hiển thị chủ đề tạo mới nhất lên đầu)
              </Typography>
            </Stack>
          </Stack>
        </Paper>
        <Stack
          direction={'row'}
          spacing={3}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 3,
          }}
        >
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            variant="contained"
            startIcon={<Iconify icon="material-symbols:add-circle-outline-rounded" />}
          >
            {t('create')}
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
