import axiosInstance from 'src/common/utils/axios';
import {
  IDataCreateScore,
  IDataEditScore,
  IParamsScore,
  IResScore,
  IScore,
  IDeleteParams,
  IDataExportFile,
} from './interface';
import { API_ADMIN_SCORE } from 'src/common/constants/apis';

export const getListScore = (params: IParamsScore) => {
  return axiosInstance.get<any, IResScore>(API_ADMIN_SCORE, { params });
};

export const getScoreById = (id: number) => {
  return axiosInstance.get<any, IScore>(`${API_ADMIN_SCORE}/${id}`);
};

export const createScore = (data: IDataCreateScore) => {
  return axiosInstance.post(API_ADMIN_SCORE, data);
};

export const editScore = (data: IDataEditScore, id: number) =>
  axiosInstance.put(`${API_ADMIN_SCORE}/${id}`, data);

export const deleteScore = (params: IDeleteParams) =>
  axiosInstance.delete(API_ADMIN_SCORE, {
    data: params,
  });

export const deleteScoreByClassId = (id: number) => axiosInstance.delete(`${API_ADMIN_SCORE}/class/${id}`);

export const createListScore = (data: {fileId: number}) => {
  return axiosInstance.post(`${API_ADMIN_SCORE}/request-import`, data)
}

export const requestExportFileScore  = (data: IDataExportFile) => {
  return axiosInstance.post(`${API_ADMIN_SCORE}/request-export`, data)
}