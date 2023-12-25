import axiosInstance from '../../common/utils/axios';
import { API_ADMIN_HIEP_SI } from '../../common/constants/apis';
import {
  IDataForm,
  IDeleteParams,
  IGeneral,
  IParams,
  IResponseList,
} from 'src/common/@types/common.interface';

export const getListHiepSi = async (params: IParams) => {
  return axiosInstance.get<unknown, IResponseList>(`${API_ADMIN_HIEP_SI}`, {
    params,
  });
};

export const deleteHiepSi = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_HIEP_SI}`, {
    data: params,
  });

export const deleteHiepSiById = (id: number) => {
  axiosInstance.delete(`${API_ADMIN_HIEP_SI}/${id}`)
};

export const createHiepSi = (data: IDataForm) => {
  return axiosInstance.post(API_ADMIN_HIEP_SI, data);
};

export const getHiepSiById = (id: number) => {
  return axiosInstance.get<unknown, IGeneral>(`${API_ADMIN_HIEP_SI}/${id}`);
};

export const editHiepSiInActive = (id: number) =>
  axiosInstance.put(`${API_ADMIN_HIEP_SI}/inactive/${id}`);

export const createListHiepSi = (data: {fileId: number}) => {
  return axiosInstance.post(`${API_ADMIN_HIEP_SI}/request-import`, data)
}