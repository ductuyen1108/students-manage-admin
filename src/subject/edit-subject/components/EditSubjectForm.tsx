import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, Paper, Stack, Box, Typography, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
  RHFUploadSingleFile,
} from '../../../common/components/hook-form';
import Iconify from '../../../common/components/Iconify';
import useMessage from '../../../common/hooks/useMessage';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useDeepEffect from '../../../common/hooks/useDeepEffect';
import { useGetSubjectById } from '../hooks/useGetSubjectById';
import { useEditSubject } from '../hooks/useEditSubject';
import { fData } from '../../../common/utils/formatNumber';
import { useCallback, useEffect } from 'react';
import { usePresignImg } from '../../../common/hooks/usePresignImg';
import { IDataEditSubject, IFormCreateSubject } from 'src/subject/common/interface';
import { SubjectSchema } from 'src/subject/common/schema';

export default function EditSubjectForm() {
  const { useDeepCompareEffect } = useDeepEffect();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<IFormCreateSubject>({
    resolver: yupResolver(SubjectSchema),
    defaultValues: {
      name: '',
      priority: 0,
    },
  });
  const {
    handleSubmit,
    reset,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = methods;
  const { id: subjectId } = useParams();

  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const { handleUpload } = usePresignImg();

  const { mutate, isLoading } = useEditSubject({
    onSuccess: () => {
      showSuccessSnackbar(t('news_subject.edit.editSuccess'));
      navigate(PATH_DASHBOARD.subject.list);
    },
    onError: () => showErrorSnackbar(t('news_subject.edit.editFail')),
  });
  const { data: dataSubjectById } = useGetSubjectById(parseInt(subjectId as string));

  console.log("subject data", dataSubjectById);

  useDeepCompareEffect(() => {
    if (dataSubjectById) {
      const dataVN = {
        name: dataSubjectById?.subjectDetails?.[0]?.name,
        image: dataSubjectById?.thumbnail?.url,
        priority: dataSubjectById?.priority,
      };
      reset(dataVN);
    }
  }, [dataSubjectById]);

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
    let imgId = dataSubjectById?.thumbnail?.id;
    const subjectDetailsId = dataSubjectById?.subjectDetails[0]?.id;
    if (typeof data?.image !== 'string') {
      const file = await handleUpload(data.image as File);
      imgId = file?.id;
    }
    const editData: IDataEditSubject = {
      id: parseInt(subjectId as string),
      subjectDetails: [
        {
          id: subjectDetailsId as number,
          lang: 'EN',
          name: data?.name,
        },
      ],
      priority: data.priority,
      thumbnailId: imgId as number,
    };
    console.log("editData: ", editData);
    mutate(editData);
  };

  useEffect(() => {
    if (watch('image')) {
      clearErrors('image');
    }
  }, [watch('image')]);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} sx={{ padding: 3, boxShadow: 10 }}>
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
                      {t('news.new.allow')} *.jpeg, *.jpg, *.png
                      <br />
                      {t('news.new.maxSize')}: {fData(3145728)}
                    </Typography>
                  </>
                }
              />
            </Stack>
            <Stack spacing={3} flex={1}>
              <RHFTextField
                name="name"
                label={t('news_subject.new.labelName')}
                size="small"
              />
              <RHFTextField
                name="priority"
                label={t('news_subject.new.priority')}
                type="number"
                size="small"
              />
              <Typography sx={{ fontSize: '13px', marginTop: 2, color: 'red' }}>
                {t('news_subject.new.note')}
              </Typography>
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
