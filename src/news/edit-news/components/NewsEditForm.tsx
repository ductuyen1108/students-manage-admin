import { useNavigate, useParams } from 'react-router-dom';
import {
  FormProvider,
  RHFEditor,
  RHFTextField,
  RHFUploadSingleFile,
} from '../../../common/components/hook-form';
import {
  FormHelperText,
  Paper,
  Stack,
  FormLabel,
  Typography,
  Button,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { usePresignImg } from '../../../common/hooks/usePresignImg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { fData } from '../../../common/utils/formatNumber';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useMessage from '../../../common/hooks/useMessage';
import useDeepEffect from '../../../common/hooks/useDeepEffect';
import { useEditNews } from '../hooks/useEditNews';
import { schemaNews } from 'src/news/common/schema';
import { DEFAULT_VALUE_FORM_NEWS, statusNews } from 'src/news/common/constant';
import { useGetNewsById } from 'src/news/common/hooks/useGetNewsById';
import { useGetSubject } from 'src/news/common/hooks/useGetSubject';
import { IDataFormEditNews, ISubmitData } from 'src/news/common/interface';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import RHFSelectPaginationMultiple from 'src/common/components/hook-form/RHFSelectPaginationMutiple';

function NewsEditForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const methods = useForm<ISubmitData>({
    resolver: yupResolver(schemaNews),
    defaultValues: DEFAULT_VALUE_FORM_NEWS,
  });
  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = methods;

  const { useDeepCompareEffect } = useDeepEffect();

  const params = useParams();
  const { handleUpload } = usePresignImg();
  const idDetail = params?.id;
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();

  const { detailNews } = useGetNewsById(parseInt(idDetail as string));

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

  const { mutate } = useEditNews({
    onSuccess: () => {
      showSuccessSnackbar(t('news.edit.editSuccess'));
      navigate(PATH_DASHBOARD.news.list);
    },
    onError: () => {
      showErrorSnackbar(t('news.edit.editFail'));
    },
  });

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

  useDeepCompareEffect(() => {
    if (detailNews && !!listSubject.length) {
      const subjects = detailNews?.subject?.map((subject) => {
        return listSubject.find((item) => subject.id === item.id);
      });
      reset({
        title: detailNews?.title,
        status: statusNews.find((item) => item.id === detailNews?.status),
        image: detailNews?.thumbnail?.url,
        subjects,
        content: detailNews?.newsDetails[0]?.content,
        description: detailNews?.newsDetails[0]?.description,
        author: detailNews?.newsDetails[0]?.author,
      });
    }
  }, [detailNews, listSubject.length]);
  const onSubmit = async (data: ISubmitData) => {
    const idNewsDetails = detailNews?.newsDetails[0]?.id || 0;
    let imgId = detailNews?.thumbnail?.id;
    if (typeof data?.image !== 'string') {
      const file = await handleUpload(data.image as File);
      imgId = file?.id;
    }
    const dataEdit: IDataFormEditNews = {
      id: parseInt(idDetail as string),
      subjectIds: data.subjects.map((item) => item?.id),
      status: data.status.id,
      thumbnailId: imgId as number,
      newsDetails: [
        {
          id: idNewsDetails,
          lang: 'EN',
          content: data.content,
          author: data.author,
          description: data.description,
          title: data.title,
        },
      ],
      title: data.title,
    };
    console.log("data edit", dataEdit);
    mutate(dataEdit);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={3}>
        <Paper elevation={3}>
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
                <FormLabel sx={{ marginLeft: 2, marginBottom: 1 }}>
                  {t('news.edit.labelContent')}
                </FormLabel>
              </Stack>
              <RHFEditor name="content" placeholder={t('news.new.contentPlaceholer')} />
            </Stack>
            <Stack spacing={1}>
              <FormLabel sx={{ marginLeft: 2, marginBottom: 1 }}>
                {t('news.edit.labelImage')}
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
                    {t('news.edit.allow')} *.jpeg, *.jpg, *.png
                    <br />
                    {t('news.edit.maxSize')}: {fData(3145728)}
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
        <Stack justifyContent="flex-end" spacing={2} direction="row" sx={{ m: 3 }}>
          <LoadingButton variant="contained" type="submit" loading={isSubmitting}>
            {t('save')}
          </LoadingButton>
          <Button
            color="inherit"
            variant="contained"
            onClick={() => navigate(PATH_DASHBOARD.news.list)}
          >
            {t('news.edit.cancelBtn')}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default NewsEditForm;
