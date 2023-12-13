import axiosInstance from '../../common/utils/axios';
import { API_ADMIN_AU_NHI } from '../../common/constants/apis';
import {
  IDataForm,
  IDeleteParams,
  IGeneral,
  IParams,
  IResponseList,
} from 'src/common/@types/common.interface';

export const getListAuNhi = async (params: IParams) => {
  return axiosInstance.get<unknown, IResponseList>(`${API_ADMIN_AU_NHI}`, {
    params,
  });
};

export const deleteAuNhi = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_AU_NHI}`, {
    data: params,
  });

export const deleteAuNhiById = (id: number) => {
  axiosInstance.delete(`${API_ADMIN_AU_NHI}/${id}`)
};

export const createAuNhi = (data: IDataForm) => {
  return axiosInstance.post(API_ADMIN_AU_NHI, data);
};

export const getAuNhiById = (id: number) => {
  return axiosInstance.get<unknown, IGeneral>(`${API_ADMIN_AU_NHI}/${id}`);
};

export const editAuNhiInActive = (id: number) =>
  axiosInstance.put(`${API_ADMIN_AU_NHI}/inactive/${id}`);
