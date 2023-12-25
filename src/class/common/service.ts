import axiosInstance from 'src/common/utils/axios';
import {
  IClass,
  IDataCreateClass,
  IDataFormEditClass,
  IDeleteParams,
  IParamsClass,
  IResClass,
} from './interface';
import { API_ADMIN_CLASS } from 'src/common/constants/apis';

export const getListClass = (params: IParamsClass) => {
  return axiosInstance.get<any, IResClass>(API_ADMIN_CLASS, { params });
};

export const getClassById = (id: number) => {
  return axiosInstance.get<any, IClass>(`${API_ADMIN_CLASS}/${id}`);
};

export const createClass = (data: IDataCreateClass) => {
  return axiosInstance.post(API_ADMIN_CLASS, data);
};

export const deleteClass = (params: IDeleteParams) =>
  axiosInstance.delete(API_ADMIN_CLASS, {
    data: params,
  });

export const editClass = (data: IDataFormEditClass, id: number) => axiosInstance.put(`${API_ADMIN_CLASS}/${id}`, data)

