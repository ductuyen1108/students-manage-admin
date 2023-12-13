import axiosInstance from "src/common/utils/axios";
import { IDataEditContact, IDeleteParams, IContactRow, IParamsListContact, IResListContact } from "./interface";
import { API_ADMIN_CONTACT } from "src/common/constants/apis";

export const getListContact = (params: IParamsListContact) => {
  return axiosInstance.get<any, IResListContact>(API_ADMIN_CONTACT, {params})
};

export const deleteContacts = (params: IDeleteParams) => 
  axiosInstance.delete(API_ADMIN_CONTACT, {
    data: params
  })

export const getContactById = (id: number) => {
  return axiosInstance.get<any, IContactRow>(`${API_ADMIN_CONTACT}/${id}`)
};

export const editContact = (data: IDataEditContact) => {
  return axiosInstance.patch(API_ADMIN_CONTACT, data)
}