import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { verifyEmail } from '../services/verifyEmail';

export const useVerifyEmail = ({
  verifyCode,
  email,
}: {
  verifyCode: string;
  email: string;
}) => {
  return {
    ...useQuery(
      [QUERY_KEYS.VERIFY_EMAIL, verifyCode],
      () =>
        verifyEmail({
          verifyCode,
          email,
        }),
      {
        enabled: !!verifyCode,
        staleTime: 5000,
        cacheTime: 0,
      }
    ),
  };
};
