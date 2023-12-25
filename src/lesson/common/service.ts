import axiosInstance from 'src/common/utils/axios';
import { IDataCreateLesion, IDataFormEditLesion, IDeleteParams, ILesion, IParamsLesion, IResLesion } from './interface';
import { API_ADMIN_LESION } from 'src/common/constants/apis';

export const getListLesion = (params: IParamsLesion) => {
  return axiosInstance.get<any, IResLesion>(API_ADMIN_LESION, { params });
};

export const getLesionById = (id: number) => {
  return axiosInstance.get<any, ILesion>(`${API_ADMIN_LESION}/${id}`);
};

export const createLesion = (data: IDataCreateLesion) => {
  return axiosInstance.post(API_ADMIN_LESION, data);
};

export const deleteLesion = (params: IDeleteParams) =>
  axiosInstance.delete(API_ADMIN_LESION, {
    data: params,
  });

export const editLesion = (data: IDataFormEditLesion, id: number) =>
  axiosInstance.put(`${API_ADMIN_LESION}/${id}`, data);
