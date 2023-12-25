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
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useMessage from '../../../common/hooks/useMessage';
import Iconify from '../../../common/components/Iconify';
import { IDataCreateClass, ISubmitCreateClass } from 'src/class/common/interface';
import { schemaClass } from 'src/class/common/schema';
import { DEFAULT_VALUE_FORM_CLASS, optionBranchName } from 'src/class/common/constant';
import { useCreateClass } from 'src/class/common/hooks/useCreateClass';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';

function CreateClassForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const methods = useForm<ISubmitCreateClass>({
    resolver: yupResolver(schemaClass),
    defaultValues: DEFAULT_VALUE_FORM_CLASS,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  /* console.log("error creating", errors); */

  const { mutate } = useCreateClass({
    onSuccess: () => {
      showSuccessSnackbar(t('news.new.newSuccess'));
      navigate(PATH_DASHBOARD.class.list);
    },
    onError: () => {
      showErrorSnackbar(t('news.new.newFail'));
    },
  });

  const onSubmit = async (data: ISubmitCreateClass) => {
    console.log("dataCreate", data.branchName.name);
    const dataCreate: IDataCreateClass = {
      className: data.className,
      branchName: data.branchName.name,
    };
    mutate(dataCreate);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={3}>
        <Paper elevation={3} sx={{ boxShadow: 10 }}>
          <Stack direction="column" spacing={3} padding={3}>
            <Stack direction={'row'} spacing={3}>
              <Stack flex={1}>
                <RHFTextField
                  name="className"
                  label={"Tên lớp"}
                  size="small"
                />
              </Stack>
              <Stack flex={2}>
                <RHFSelectPagination
                  name="branchName"
                  labelProp="name"
                  label="Tên ngành"
                  options={optionBranchName}
                  size="small"
                  disableClear
                />
              </Stack>
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
