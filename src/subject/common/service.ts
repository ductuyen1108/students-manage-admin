import axiosInstance from 'src/common/utils/axios';
import {
  IDataCreate,
  IDataEditSubject,
  IDeleteParams,
  ISubject,
  ISubjectList,
  ISubjectParams,
} from './interface';
import { API_ADMIN_SUBJECT } from 'src/common/constants/apis';

export const createSubject = (data: IDataCreate) => {
  return axiosInstance.post(API_ADMIN_SUBJECT, data);
};

export const getListSubject = async (params: ISubjectParams) => {
  return axiosInstance.get<unknown, ISubjectList>(`${API_ADMIN_SUBJECT}`, {
    params: {
      page: params.page,
      limit: params.limit,
    },
  });
};

export const deleteSubject = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_SUBJECT}`, {
    data: params,
  });

export const editSubject = (params: IDataEditSubject) =>
  axiosInstance.patch(`${API_ADMIN_SUBJECT}`, params);

export const getSubjectById = (id: number) => {
  return axiosInstance.get<unknown, ISubject>(`${API_ADMIN_SUBJECT}/${id}`);
};
