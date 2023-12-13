import axiosInstance from '../../common/utils/axios';
import { API_ADMIN_CHIEN_NON } from '../../common/constants/apis';
import {
  IDataForm,
  IDeleteParams,
  IGeneral,
  IParams,
  IResponseList,
} from 'src/common/@types/common.interface';

export const getListChienNon = async (params: IParams) => {
  return axiosInstance.get<unknown, IResponseList>(`${API_ADMIN_CHIEN_NON}`, {
    params,
  });
};

export const deleteChienNon = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_CHIEN_NON}`, {
    data: params,
  });

export const deleteChienNonById = (id: number) => {
  axiosInstance.delete(`${API_ADMIN_CHIEN_NON}/${id}`)
};

export const createChienNon = (data: IDataForm) => {
  return axiosInstance.post(API_ADMIN_CHIEN_NON, data);
};

export const getChienNonById = (id: number) => {
  return axiosInstance.get<unknown, IGeneral>(`${API_ADMIN_CHIEN_NON}/${id}`);
};

export const editChienNonInActive = (id: number) =>
  axiosInstance.put(`${API_ADMIN_CHIEN_NON}/inactive/${id}`);
