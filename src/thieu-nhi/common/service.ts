import axiosInstance from '../../common/utils/axios';
import { API_ADMIN_THIEU_NHI } from '../../common/constants/apis';
import {
  IDataForm,
  IDeleteParams,
  IGeneral,
  IParams,
  IResponseList,
} from 'src/common/@types/common.interface';

export const getListThieuNhi = async (params: IParams) => {
  return axiosInstance.get<unknown, IResponseList>(`${API_ADMIN_THIEU_NHI}`, {
    params,
  });
};

export const deleteThieuNhi = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_THIEU_NHI}`, {
    data: params,
  });

export const deleteThieuNhiById = (id: number) => {
  axiosInstance.delete(`${API_ADMIN_THIEU_NHI}/${id}`)
};

export const createThieuNhi = (data: IDataForm) => {
  return axiosInstance.post(API_ADMIN_THIEU_NHI, data);
};

export const getThieuNhiById = (id: number) => {
  return axiosInstance.get<unknown, IGeneral>(`${API_ADMIN_THIEU_NHI}/${id}`);
};

export const editThieuNhiInActive = (id: number) =>
  axiosInstance.put(`${API_ADMIN_THIEU_NHI}/inactive/${id}`);

export const createListThieuNhi = (data: {fileId: number}) => {
  return axiosInstance.post(`${API_ADMIN_THIEU_NHI}/request-import`, data)
}
