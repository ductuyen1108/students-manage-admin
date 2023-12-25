import axiosInstance from "src/common/utils/axios"
import { IDataCreateAttendance, IParamsAttendance, IResAttendance } from "./interface"
import { API_ADMIN_ATTENDANCE } from "src/common/constants/apis"
import { IDeleteParams } from "../common/interface";

export const getListAttendance = (params: IParamsAttendance) => {
  return axiosInstance.get<any, IResAttendance>(API_ADMIN_ATTENDANCE, { params })
}

export const createAttendance = (data: IDataCreateAttendance) => {
  return axiosInstance.post(`/admin/attendance/list`, data)
}

export const deleteAttendance = (params: IDeleteParams) => axiosInstance.delete('/admin/attendance', {
  data: params
})