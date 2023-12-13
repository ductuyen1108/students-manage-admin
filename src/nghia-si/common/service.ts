import axiosInstance from '../../common/utils/axios';
import { API_ADMIN_NGHIA_SI } from '../../common/constants/apis';
import {
  IDataForm,
  IDeleteParams,
  IGeneral,
  IParams,
  IResponseList,
} from 'src/common/@types/common.interface';

export const getListNghiaSi = async (params: IParams) => {
  return axiosInstance.get<unknown, IResponseList>(`${API_ADMIN_NGHIA_SI}`, {
    params,
  });
};

export const deleteNghiaSi = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_NGHIA_SI}`, {
    data: params,
  });

export const deleteNghiaSiById = (id: number) => {
  axiosInstance.delete(`${API_ADMIN_NGHIA_SI}/${id}`)
};

export const createNghiaSi = (data: IDataForm) => {
  return axiosInstance.post(API_ADMIN_NGHIA_SI, data);
};

export const getNghiaSiById = (id: number) => {
  return axiosInstance.get<unknown, IGeneral>(`${API_ADMIN_NGHIA_SI}/${id}`);
};

export const editNghiaSiInActive = (id: number) =>
  axiosInstance.put(`${API_ADMIN_NGHIA_SI}/inactive/${id}`);
