import { Box, Link, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PATH_AUTH } from '../../../common/routes/paths';
import Image from '../../../common/components/Image';
import { IVerifyEmailRes } from '../interfaces';

interface VerifyEmailProps {
  userInfo: IVerifyEmailRes;
}
export default function VerifySuccess({ userInfo }: VerifyEmailProps) {
  return (
    <Box m={'10px'}>
      <Paper sx={{ padding: '20px' }}>
        <Typography marginBottom={'8px'}>
          Chúc mừng <strong>{userInfo?.name}</strong>
        </Typography>
        <Typography>
          Bạn đã xác thực email{' '}
          <span
            style={{
              color: '#4E94EB',
            }}
          >
            {userInfo?.email}
          </span>{' '}
          thành công.
        </Typography>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Image src="/images/tick-icon.png" maxWidth={'100px'} alt="tick-icon" />
          <Link
            color="#4E94EB"
            component={RouterLink}
            to={PATH_AUTH.login}
            underline="always"
          >
            Trở về trang đăng nhập
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
