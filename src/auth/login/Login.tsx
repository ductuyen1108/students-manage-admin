// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Stack,
  Link,
  Alert,
  Tooltip,
  Container,
  Typography,
} from '@mui/material';
import useAuth from 'src/common/hooks/useAuth';
import Page from 'src/common/components/Page';
import Image from 'src/common/components/Image';
import LoginForm from './component/LoginForm';
import { PATH_AUTH } from 'src/common/routes/paths';
import useResponsive from 'src/common/hooks/useResponsive';
import { useSelector } from 'react-redux';
import { isExpiredSelector, setIsExpired } from './login.slice';
import { useEffect } from 'react';
import {
  default as useMessage,
  default as useShowSnackbar,
} from 'src/common/hooks/useMessage';
import vn from '../../common/locales/vn';
import { dispatch } from '../../common/redux/store';
import { DEFAULT_MAIN_COLOR } from '../../common/constants/common.constants';
const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(0, 0, 2),
  padding: '0!important',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  position: 'relative',
}));

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');
  const { showSuccessSnackbar, showErrorSnackbar } = useMessage();

  const expired = useSelector(isExpiredSelector);
  useEffect(() => {
    if (expired) {
      showErrorSnackbar(vn.expired);
      dispatch(setIsExpired(false));
    }
  }, [expired]);

  return (
    <Page title="Login">
      <RootStyle>
        {mdUp && (
          <SectionStyle>
            <Box
              sx={{
                background: 'url(/assets/core/login_background.svg)',
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box ml={'8%'}>
                <Typography
                  fontSize={'40px'}
                  lineHeight={'40px'}
                  fontFamily={'Plus Jakarta Sans'}
                  fontWeight={700}
                >
                  Chào mừng đến với
                </Typography>
                <Typography
                  fontSize={'40px'}
                  lineHeight={'40px'}
                  fontFamily={'Plus Jakarta Sans'}
                  fontWeight={700}
                  color="primary"
                >
                  Web quản lý học sinh
                </Typography>
                {/* <Typography
                  fontSize={'26px'}
                  lineHeight={'40px'}
                  fontFamily={'Plus Jakarta Sans'}
                  fontWeight={700}
                  color="primary"
                >
                  #Căn bếp xanh của mọi nhà
                </Typography> */}
              </Box>
            </Box>
            <Box
              sx={{
                background: 'url(/images/login-subtract.svg)',
                width: '50%',
                height: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                position: 'absolute',
                bottom: 0,
                left: 0,
              }}
            />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              sx={{
                mb: 5,
              }}
            >
              <Stack sx={{ flexGrow: 1, justifyItems: 'space-between' }}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ flexGrow: 1, justifyItems: 'space-between' }}
                >
                  <Typography variant="h4">Chào mừng đến</Typography>
                  <Typography variant="h4" gutterBottom color="primary">
                    Web quản lý học sinh
                  </Typography>
                </Stack>
              </Stack>

              {/* <Tooltip title={capitalCase(method)} placement="right">
                <>
                  <Image
                    disabledEffect
                    src={`https://minimal-assets-api-dev.vercel.app/assets/icons/auth/ic_${method}.png`}
                    sx={{ width: 32, height: 32 }}
                  />
                </>
              </Tooltip> */}
            </Stack>

            <LoginForm />

            {/* {!smUp && ( */}
            {/* <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?{' '}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Get started
              </Link>
            </Typography> */}
            {/* )} */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
