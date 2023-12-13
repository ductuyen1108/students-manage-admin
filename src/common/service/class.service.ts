import { IResponseListClass } from '../@types/common.interface';
import { API_ADMIN_CLASS } from '../constants/apis';
import axiosInstance from '../utils/axios';

export const getListClass = (params: {
  className?: string;
  branchName?: string;
  page?: number;
  limit?: number;
}) => {
  return axiosInstance.get<unknown, IResponseListClass>(`${API_ADMIN_CLASS}`, { params })
};
