// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
// components
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { dispatch, useDispatch } from 'src/common/redux/store';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/common/routes/paths';
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from '../../../common/components/hook-form';
import Iconify from '../../../common/components/Iconify';
import { defaultValues } from '../constants';
import { useAuthlogin } from '../hook/useLogin';
import { IFormLoginValuesProps } from '../interface/interface';
import {
  setShowPassword,
  showPasswordSelector,
  setUsername,
  setPolicies,
} from '../login.slice';
import { loginSchema } from '../schema/login.schema';
import { setMerchantInfo } from 'src/profile/common/reducers/merchant-profile.slice';
import { useGetMerchantInfo } from '../hook/useGetMerchantInfo';
import useDeepEffect from 'src/common/hooks/useDeepEffect';
import { useTranslation } from 'react-i18next';
import { setLogin } from '../auth.slice';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { useDeepCompareEffect } = useDeepEffect();
  const showPassword = useSelector(showPasswordSelector);
  const dispatch = useDispatch();
  const methods = useForm<IFormLoginValuesProps>({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const { enqueueSnackbar } = useSnackbar();
  const onSuccess = () => {
    refetch();
    enqueueSnackbar(t('auth.login.loginSuccess'), {
      variant: 'success',
    });
  };
  const onError = () => {
    enqueueSnackbar(t('auth.login.loginFailure'), {
      variant: 'error',
    });
  };

  const { mutate, isSuccess } = useAuthlogin({ onSuccess, onError });
  const { data, refetch } = useGetMerchantInfo(isSuccess);

  useDeepCompareEffect(() => {
    if (data) {
      dispatch(setMerchantInfo(data));
      dispatch(setLogin(true));
      navigate(PATH_DASHBOARD.root);
    }
  }, [data]);
  const onSubmit = (data: IFormLoginValuesProps) => {
    dispatch(setUsername(data.username));
    mutate({ username: data.username, password: data.password });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="username" label="Tên đăng nhập" />
        <RHFTextField
          name="password"
          label={t('auth.login.labelPassword')}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => dispatch(setShowPassword(!showPassword))}
                  edge="end"
                >
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <RHFCheckbox name="remember" label={t('auth.login.labelRememberMe')} />
        {/* <Typography sx={{ fontSize: '13px' }}>
          <Link to={PATH_AUTH.forgotPassword}>Forgot Password</Link>
        </Typography> */}
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ borderRadius: '60px' }}
      >
        {t('auth.login.btnLogin')}
      </LoadingButton>
      {/* <Typography textAlign={'center'} sx={{ mt: '20px' }}>
        {t('auth.login.dont_have_account')}{' '}
        <Link href={PATH_AUTH.register} underline="hover">
          {t('auth.login.get_started')}
        </Link>
      </Typography> */}
    </FormProvider>
  );
}
