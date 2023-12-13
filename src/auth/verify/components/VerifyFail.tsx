import { Box, Button, Link, Paper, Typography } from '@mui/material';
import Image from '../../../common/components/Image';
import { Link as RouterLink } from 'react-router-dom';
import { PATH_AUTH } from '../../../common/routes/paths';

export default function VerifyFail() {
  return (
    <Box m={'10px'}>
      <Paper sx={{ padding: '20px', width: '700px' }}>
        <Box justifyContent={'center'} display={'flex'}>
          <Image
            src="/images/cooking.png"
            alt="image-fail"
            width={'100px'}
            height={'100px'}
          />
        </Box>
        <Box justifyContent={'center'} display={'flex'}>
          <Typography sx={{ color: 'red' }}>Xác thực không thành công</Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          marginTop={'20px'}
          to={PATH_AUTH.register}
          component={RouterLink}
        >
          <Button variant="outlined">Trở về trang đăng ký</Button>
        </Box>
      </Paper>
    </Box>
  );
}
