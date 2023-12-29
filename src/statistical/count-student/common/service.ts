import axiosInstance from 'src/common/utils/axios';
import { IClassAndCount, ICountStudent, IParamsClassAndInfo } from './interface';
import { API_STATISTICAL } from 'src/common/constants/apis';

export const getCountStudent = () => {
  return axiosInstance.get<any, ICountStudent>(`${API_STATISTICAL}/count-student`);
};

export const getClassAndCount = (params: IParamsClassAndInfo) => {
  return axiosInstance.get<any, IClassAndCount>(`${API_STATISTICAL}/getClassAndCount`, {
    params,
  });
};
