import axiosInstance from "src/common/utils/axios"
import { IStudentLowAttendance, IParamsStudentLowAttendance, IRequestExport } from "./interface"
import { API_STATISTICAL } from "src/common/constants/apis"

export const getStudentLowAttendance = (params: IParamsStudentLowAttendance) => {
  return axiosInstance.get<any, IStudentLowAttendance[]>(`${API_STATISTICAL}/getStudentsWithLowAttendance`, { params })
}

export const requestExportFileStudentLowAttendance  = (data: IRequestExport) => {
  return axiosInstance.post(`${API_STATISTICAL}/getStudentsWithLowAttendance/request-export`, data)
}