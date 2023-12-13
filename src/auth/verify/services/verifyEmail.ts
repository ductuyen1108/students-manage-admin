import axios from 'src/common/utils/axios';
import { API_VERIFY_EMAIL } from '../../../common/constants/apis';
import { IVerifyEmailRes } from '../interfaces';

export const verifyEmail = ({
  verifyCode,
  email,
}: {
  verifyCode: string;
  email: string;
}) => {
  return axios.get<unknown, IVerifyEmailRes>(
    `${API_VERIFY_EMAIL}?verifyCode=${verifyCode}&email=${email}`
  );
};
