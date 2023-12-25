import axiosInstance from "src/common/utils/axios"
import { IAttendancePercent, IParamsAttendancePercent } from "./interface"
import { API_STATISTICAL } from "src/common/constants/apis"

export const getAttendancePercent = (params: IParamsAttendancePercent) => {
  axiosInstance.get<any, IAttendancePercent[]>(`${API_STATISTICAL}/attendance-percent`, { params })
}