import { IDataChangeClass } from '../@types/common.interface';
import { API_CHANGE_CLASS } from '../constants/apis';
import axiosInstance from '../utils/axios';

export const changeClass = (data: IDataChangeClass) =>
  axiosInstance.put(`${API_CHANGE_CLASS}/list`, data);
