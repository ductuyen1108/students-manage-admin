import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import {
  FormLabel,
  Typography,
  FormHelperText,
  Paper,
  Stack,
  Button,
} from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Iconify from 'src/common/components/Iconify';
import {
  FormProvider,
  RHFEditor,
  RHFTextField,
  RHFUploadSingleFile,
} from 'src/common/components/hook-form';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import { usePresignImg } from 'src/common/hooks/usePresignImg';
import { PATH_DASHBOARD } from 'src/common/routes/paths';
import { fData } from 'src/common/utils/formatNumber';
import { DEFAULT_VALUE_CONTACT_FORM } from 'src/contact-manage/common/constant';
import { useGetContactById } from 'src/contact-manage/common/hooks/useGetContactById';
import {
  IDataEditContact,
  IDataFormEditContact,
} from 'src/contact-manage/common/interface';
import { contactSchema } from 'src/contact-manage/common/schema';
import { useEditContact } from '../hooks/useEditContact';
import useShowSnackbar from 'src/common/hooks/useMessage';

export default function EditContactForm() {
  const methods = useForm<IDataFormEditContact>({
    resolver: yupResolver(contactSchema),
    defaultValues: { ...DEFAULT_VALUE_CONTACT_FORM, id: 0 },
  });
  const {
    handleSubmit,
    clearErrors,
    watch,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = methods;

  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { handleUpload } = usePresignImg();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const { dataContactById } = useGetContactById(Number(id));
  const { mutate } = useEditContact({
    onSuccess: () => {
      showSuccessSnackbar('Chỉnh sửa liên hệ thành công');
      navigate(PATH_DASHBOARD.contact.list);
    },
    onError: () => {
      showErrorSnackbar('Chỉnh sửa liên hệ thất bại');
    },
  });

  const onSubmit = async (data: IDataFormEditContact) => {
    const dataSubmit: IDataEditContact = {
      id: Number(id),
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      company: data.company,
      message: data.message,
    };
    mutate(dataSubmit);
  };

  useEffect(() => {
    if (dataContactById) {
      const { id, name, phoneNumber, company, email, message } = dataContactById;
      const dataForm: IDataFormEditContact = {
        id,
        name,
        phoneNumber,
        company,
        email,
        message,
      };
      reset(dataForm);
    }
  }, [dataContactById]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Stack spacing={4}>
            <Stack direction={'row'} spacing={3}>
              <Stack spacing={3} flex={1}>
                <Stack direction={'row'} spacing={3}>
                  <Stack flex={1}>
                    <RHFTextField
                      name="id"
                      label="Id"
                      size="small"
                      disabled
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                  <Stack flex={1} />
                </Stack>
                <RHFTextField
                  name="name"
                  label="Họ và tên*"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <RHFTextField
                  name="phoneNumber"
                  label="Số điện thoại*"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <RHFTextField
                  name="email"
                  label="Email*"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <RHFTextField
                  name="company"
                  label="Tên công ty*"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <RHFTextField
                  name="message"
                  label="Tin nhắn*"
                  size="small"
                  multiline
                  minRows={2}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Paper>
        <Stack justifyContent="flex-end" spacing={2} direction="row" sx={{ marinTop: 3 }}>
          <LoadingButton
            variant="contained"
            type="submit"
            // startIcon={<Iconify icon="material-symbols:add-circle-outline-rounded" />}
            loading={isSubmitting}
          >
            {t('save')}
          </LoadingButton>
          <Button
            // startIcon={<Iconify icon="ph:x-circle" />}
            color="inherit"
            variant="contained"
            onClick={() => navigate(PATH_DASHBOARD.contact.list)}
          >
            {t('cancel')}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
