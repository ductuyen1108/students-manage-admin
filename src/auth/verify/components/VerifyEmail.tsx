import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useVerifyEmail } from '../hooks/verifyEmail';
import LoadingPacman from '../../../common/components/LoadingPacman/LoadingPacman';
import VerifyFail from './VerifyFail';
import VerifySuccess from './VerifySuccess';

export default function VerifyEmail() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const verifyCode = queryParams.get('verifyCode');
  const email = queryParams.get('email');

  const { data, isLoading, isSuccess, isError } = useVerifyEmail({
    verifyCode: verifyCode as string,
    email: email as string,
  });
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      bgcolor={'#F0F0F0'}
      display={'flex'}
      justifyContent={'center'}
    >
      {isLoading ? (
        <LoadingPacman />
      ) : (
        <>
          {isError && <VerifyFail />}
          {isSuccess && data && <VerifySuccess userInfo={data} />}
        </>
      )}
    </Box>
  );
}
