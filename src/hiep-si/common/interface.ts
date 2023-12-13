import { EnumGender, StudentStatus } from 'src/common/@types/common.interface';

export interface IChienNonParams {
  classId?: number[];
  name?: string;
  holyName?: string;
  gender?: EnumGender;
  status?: StudentStatus;
  page?: number;
  limit?: number;
}

export interface IChienNonFilter {
  classId?: number[];
  name?: string;
  holyName?: string;
  gender?: EnumGender;
  status?: StudentStatus;
}

export interface InitialChienNonState {
  dataSearch: IChienNonFilter;
  value: number;
  idDeleteChienNon: number[];
  showPopup: boolean;
}

export interface IChienNonSubmitFilter {
  class?: { id: number; className: string }[];
  name?: string;
  holyName?: string;
  gender?: EnumGender;
  status?: StudentStatus;
}

export interface IDeleteParams {

}

export interface IChienNon {
  
}

export interface IResChienNonList {
  items: IChienNon[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}