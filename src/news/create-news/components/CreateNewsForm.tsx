import { useNavigate } from 'react-router-dom';
import {
  FormProvider,
  RHFEditor,
  RHFSelect,
  RHFTextField,
  RHFUploadSingleFile,
} from '../../../common/components/hook-form';
import {
  FormHelperText,
  Paper,
  Stack,
  MenuItem,
  FormLabel,
  Typography,
  Button,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { usePresignImg } from '../../../common/hooks/usePresignImg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { fData } from '../../../common/utils/formatNumber';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useMessage from '../../../common/hooks/useMessage';
import Iconify from '../../../common/components/Iconify';
import { IDataFormNews, ISubmitData } from 'src/news/common/interface';
import { schemaNews } from 'src/news/common/schema';
import { DEFAULT_VALUE_FORM_NEWS, statusNews } from 'src/news/common/constant';
import { useCreateNews } from '../hooks/useCreateNews';
import { useGetSubject } from 'src/news/common/hooks/useGetSubject';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import RHFSelectPaginationMultiple from 'src/common/components/hook-form/RHFSelectPaginationMutiple';

function CreateNewsForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { handleUpload } = usePresignImg();
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const methods = useForm<ISubmitData>({
    resolver: yupResolver(schemaNews),
    defaultValues: DEFAULT_VALUE_FORM_NEWS,
  });
  const {
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { isSubmitting, errors },
  } = methods;

  const { mutate } = useCreateNews({
    onSuccess: () => {
      showSuccessSnackbar(t('news.new.newSuccess'));
      navigate(PATH_DASHBOARD.news.list);
    },
    onError: () => {
      showErrorSnackbar(t('news.new.newFail'));
    },
  });

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
      .map((item) =>
        item?.items?.map((item) => {
          return {
            id: item?.id,
            name: item?.subjectDetails?.[0]?.name,
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

  const onSubmit = async (data: ISubmitData) => {
    const file = await handleUpload(data?.image as File);
    const dataCreate: IDataFormNews = {
      subjectIds: data.subjects.map((item) => item?.id),
      status: data.status.id,
      thumbnailId: file?.id,
      newsDetails: [
        {
          id: data.id,
          lang: 'EN',
          content: data.content,
          author: data.author,
          description: data.description,
          title: data.title,
        },
      ],
      title: data.title,
    };
    mutate(dataCreate);
  };

  useEffect(() => {
    if (watch('image')) {
      clearErrors('image');
    }
  }, [watch('image')]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={3}>
        <Paper elevation={3} sx={{ boxShadow: 10 }}>
          <Stack direction="column" spacing={3} padding={3}>
            <Stack direction="column" spacing={3}>
              <Stack direction={'row'} spacing={3}>
                <RHFTextField
                  name="title"
                  label={t('news.new.labelTitle')}
                  size="small"
                />
                <RHFTextField name="author" label={t('news.new.author')} size="small" />
              </Stack>
              <Stack direction={'row'} spacing={3}>
                <RHFTextField
                  name="description"
                  label={t('news.new.description')}
                  size="small"
                />
              </Stack>
              <Stack direction={'row'} spacing={3}>
                <Stack flex={1}>
                  <RHFSelectPagination
                    name="status"
                    options={statusNews}
                    labelProp="name"
                    label={t('news.new.labelStatus')}
                    disableClear
                    size="small"
                  />
                </Stack>
                <Stack flex={2}>
                  <RHFSelectPaginationMultiple
                    name="subjects"
                    options={listSubject}
                    labelProp="name"
                    label={t('news.new.labelSubject')}
                    listBoxScroll={handleScrollSubject}
                    loadingScroll={isFetchingNextPageSubject}
                    isLoading={isLoadingSubject}
                    size="small"
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Stack
                direction="row"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <FormLabel sx={{ ml: 2 }}>{t('news.new.labelContent')}</FormLabel>
              </Stack>
              <RHFEditor name="content" placeholder={t('news.new.contentPlaceholer')} />
            </Stack>
            <Stack spacing={1}>
              <FormLabel sx={{ marginLeft: 2, marginBottom: 1 }}>
                {t('news.new.labelImage')}
              </FormLabel>
              <RHFUploadSingleFile
                name="image"
                maxSize={3145728}
                onDrop={handleDrop}
                accept={{ 'image/*': [] }}
                helperText={
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
                }
              />
              {
                <FormHelperText
                  sx={{ color: 'red', paddingLeft: '17px', marginTop: '-10px' }}
                >
                  {errors?.image?.message}
                </FormHelperText>
              }
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
            onClick={() => navigate(PATH_DASHBOARD.news.list)}
          >
            {t('cancel')}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default CreateNewsForm;
