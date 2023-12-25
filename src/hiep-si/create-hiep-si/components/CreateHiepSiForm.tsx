import { useNavigate } from 'react-router-dom';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from '../../../common/components/hook-form';
import { Paper, Stack, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import useMessage from '../../../common/hooks/useMessage';
import Iconify from '../../../common/components/Iconify';
import { IDataForm, ISubmitData } from 'src/common/@types/common.interface';
import { schemaChienNon } from 'src/chien-non/common/schema';
import { gender } from 'src/chien-non/common/constant';
import { useCreateHiepSi } from '../hooks/useCreateHiepSi';
import {
  useGetDistrictByProvinceId,
  useGetProvinces,
  useGetWardByDistrictId,
} from 'src/address/hooks/useGetAddress';
import RHFSelectPagination from 'src/common/components/hook-form/RHFSelectPagination';
import RHFDatePicker from 'src/common/components/hook-form/RHFDatePicker';

function CreateHiepSiForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();
  const methods = useForm<ISubmitData>({
    resolver: yupResolver(schemaChienNon),
  });
  const {
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { isSubmitting, errors },
  } = methods;

  const { mutate } = useCreateHiepSi({
    onSuccess: () => {
      showSuccessSnackbar('Thêm mới đoàn sinh thành công');
      navigate(PATH_DASHBOARD.hiepSi.list);
    },
    onError: () => {
      showErrorSnackbar('Thêm mới đoàn sinh thất bại');
    },
  });

  const { dataProvinces } = useGetProvinces();
  const { dataDistrict } = useGetDistrictByProvinceId(watch<any>('provinceId')?.code);
  const { dataWard } = useGetWardByDistrictId(watch<any>('districtId')?.code);

  const onSubmit = (data: ISubmitData) => {
    const dataCreate: IDataForm = {
      name: data.name,
      holyName: data.holyName,
      lastName: data.lastName,
      address: data.address,
      birthDate: data.birthDate,
      gender: data.gender,
      provinceId: data.provinceId.code,
      districtId: data.districtId.code,
      wardId: data.wardId.code,
      family: [
        {
          name: data.fatherName,
          birthDate: data.fatherBirthDate,
          email: data.fatherEmail,
          holyName: data.fatherHolyName,
          lastName: data.fatherLastName,
          phoneNumber: data.fatherPhoneNumber,
          role: 'DAD',
        },
        {
          name: data.motherName,
          birthDate: data.motherBirthDate,
          email: data.motherEmail,
          holyName: data.motherHolyName,
          lastName: data.motherLastName,
          phoneNumber: data.motherPhoneNumber,
          role: 'MOM',
        },
      ],
    };
    console.log('data submitted', dataCreate);
    mutate(dataCreate);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={3}>
        <Paper elevation={3} sx={{ boxShadow: 10 }}>
          <Stack direction="column" spacing={1} padding={3}>
            <Typography>Thông tin cá nhân</Typography>
            <Stack direction="column" spacing={3}>
              <Stack direction={'row'} spacing={3}>
                <RHFTextField name="holyName" label={'Tên thánh'} size="small" />
                <RHFTextField name="name" label={'Tên đoàn sinh'} size="small" />
                <RHFTextField name="lastName" label={'Họ và tên đệm'} size="small" />
              </Stack>
              <Stack direction={'row'} spacing={3}>
                <RHFDatePicker name="birthDate" label="Ngày sinh" size="small" />
                <RHFSelect
                  name="gender"
                  label="Giới tính"
                  size="small"
                  defaultValue={"Nam"}
                  options={gender}
                />
                <RHFTextField name="address" label={'Địa chỉ cụ thể'} size="small" />
              </Stack>
              <Stack direction={'row'} spacing={3}>
                <RHFSelectPagination
                  name="provinceId"
                  options={dataProvinces || []}
                  labelProp="name"
                  label={'Tỉnh / Thành phố'}
                  disableClear
                  size="small"
                />
                <RHFSelectPagination
                  name="districtId"
                  options={dataDistrict || []}
                  labelProp="name"
                  label={'Quận / Huyện'}
                  disableClear
                  size="small"
                />
                <RHFSelectPagination
                  name="wardId"
                  options={dataWard || []}
                  labelProp="name"
                  label={'Phường/ Xã'}
                  disableClear
                  size="small"
                />
              </Stack>
              <Stack direction={'row'} spacing={3}></Stack>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1} padding={'0 24px 24px 24px'}>
            <Typography>Thông tin Bố</Typography>
            <Stack spacing={3}>
              <Stack direction={'row'} spacing={3}>
                <RHFTextField name="fatherName" label={'Tên đoàn sinh'} size="small" />
                <RHFTextField
                  name="fatherLastName"
                  label={'Họ và tên đệm'}
                  size="small"
                />
                <RHFTextField name="fatherHolyName" label={'Tên thánh'} size="small" />
              </Stack>
              <Stack direction={'row'} spacing={3}>
                <RHFDatePicker name="fatherBirthDate" label="Ngày sinh" size="small" />
                <RHFTextField
                  name="fatherPhoneNumber"
                  label={'Số điện thoại'}
                  size="small"
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1} padding={'0 24px 24px 24px'}>
            <Typography>Thông tin Mẹ</Typography>
            <Stack spacing={3}>
              <Stack direction={'row'} spacing={3}>
                <RHFTextField name="motherName" label={'Tên đoàn sinh'} size="small" />
                <RHFTextField
                  name="motherLastName"
                  label={'Họ và tên đệm'}
                  size="small"
                />
                <RHFTextField name="motherHolyName" label={'Tên thánh'} size="small" />
              </Stack>
              <Stack direction={'row'} spacing={3}>
                <RHFDatePicker name="motherBirthDate" label="Ngày sinh" size="small" />
                <RHFTextField
                  name="motherPhoneNumber"
                  label={'Số điện thoại'}
                  size="small"
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
            onClick={() => navigate(PATH_DASHBOARD.hiepSi.list)}
          >
            {t('cancel')}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default CreateHiepSiForm;
