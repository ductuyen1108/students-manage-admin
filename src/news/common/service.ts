import { ISubjectList, ISubjectParams } from 'src/subject/common/interface';
import { API_ADMIN_NEWS, API_ADMIN_SUBJECT } from '../../common/constants/apis';
import axiosInstance from '../../common/utils/axios';
import {
  IDataFormEditNews,
  IDataFormNews,
  IDeleteParams,
  IDetailNews,
  INews,
  INewsParams,
  IResNewsList,
} from './interface';

export const getNewsSubject = (params: ISubjectParams) =>
  axiosInstance.get<unknown, ISubjectList>(`${API_ADMIN_SUBJECT}`);

export const getListNews = async (params: INewsParams) => {
  return axiosInstance.get<unknown, IResNewsList>(`${API_ADMIN_NEWS}`, { params });
};

export const deleteNews = (params: IDeleteParams) =>
  axiosInstance.delete(`${API_ADMIN_NEWS}`, {
    data: params,
  });

export const createNews = (data: IDataFormNews) => {
  return axiosInstance.post(API_ADMIN_NEWS, data);
};

export const getNewsById = (id: number) => {
  return axiosInstance.get<unknown, INews>(`${API_ADMIN_NEWS}/${id}`);
};

export const editNews = (data: IDataFormEditNews) =>
  axiosInstance.put(`${API_ADMIN_NEWS}`, data);
