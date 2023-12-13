import {
  API_LOGIN,
  API_MERCHANT_POLICIES,
  API_MERCHANT_PROFILE,
} from 'src/common/constants/apis';
import axios from 'src/common/utils/axios';
import { IAuth, IResInfo, IResLogin } from './interface';
import { IResThemeConfig } from './interface/interface';

export const getAuth = (params: IAuth): Promise<IResLogin> => {
  return axios.post(API_LOGIN, params);
};
export const getLogout = () => {
  return axios.delete('merchant/auth/logout');
};

export const getMerchantInfo = (): Promise<IResInfo> => {
  return axios.get(API_MERCHANT_PROFILE);
};

export const getPolicesUser = () => {
  return axios.get<unknown, IResInfo>(API_MERCHANT_POLICIES);
};
