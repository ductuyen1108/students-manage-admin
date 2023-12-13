import { API_DISTRICT, API_PROVINCE, API_WARD } from "src/common/constants/apis";
import axiosInstance from "src/common/utils/axios";
import { IDistrict, IParam, IProvince, IWard } from "./interface";

export const getListProvince = () => {
  return axiosInstance.get<unknown, IProvince[]>(`${API_PROVINCE}`);
};

export const getListDistrictByProvinceId = async (id: string) => {
  return axiosInstance.get<unknown, IDistrict[]>(`${API_DISTRICT}/${id}`)
}

export const getListWardByDistrictId = async (id: string) => {
  return axiosInstance.get<unknown, IWard[]>(`${API_WARD}/${id}`)
}
