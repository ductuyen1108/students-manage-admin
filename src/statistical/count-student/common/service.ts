import axiosInstance from "src/common/utils/axios"
import { ICountStudent } from "./interface"
import { API_STATISTICAL } from "src/common/constants/apis"

export const getCountStudent = () => {
  return axiosInstance.get<any, ICountStudent>(`${API_STATISTICAL}/count-student`)
}