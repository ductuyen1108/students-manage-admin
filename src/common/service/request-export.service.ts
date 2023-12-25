import { IDataExportFile } from "../@types/common.interface";
import { API_REQUEST_EXPORT } from "../constants/apis";
import axiosInstance from "../utils/axios";

export const requestExportFile  = (data: IDataExportFile) => {
  return axiosInstance.post(API_REQUEST_EXPORT, data)
}