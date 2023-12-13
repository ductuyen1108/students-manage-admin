import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';
import * as animationData from '../animations/mail-animation.json';
import { useSelector } from '../../common/redux/store';
import { emailConfirmSelector } from '../../auth/register/register.slice';

export default function EmailConfirmation() {
  const { t } = useTranslation();
  const email = useSelector(emailConfirmSelector);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={false}
        isPaused={false}
      />
      <Typography variant="h3">{t('emailConfirmation')}</Typography>
      <Typography
        sx={{ width: '50%', fontWeight: 500, margin: 'auto', margintop: '30px' }}
      >
        {t('sendEmailTo')}{' '}
        <Link href="https://mail.google.com/" target="_blank">
          {email}
        </Link>{' '}
        {t('confirmValidEmail')}
      </Typography>
    </Box>
  );
}
