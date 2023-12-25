import { IDistrict, IProvince, IWard } from 'src/address/interface';

export enum EnumGender {
  MALE = 'MALE',
  FEMALE = 'FERMALE',
}

export enum StudentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum FamilyRole {
  MOM = 'MOM',
  DAD = 'DAD',
}

export interface FamilyObject {
  email?: string;
  holyName?: string; // IN HOA,
  lastName?: string; // Họ và tên đệm,
  name?: string;
  birthDate?: string;
  role?: FamilyRole;
}

export interface IGeneral {
  id: number;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  email?: string;
  avatar?: string;
  holyName: string;
  lastName: string;
  status: string;
  family: IFamily[];
}

export interface Datas {
  reminders: IGeneral[];
}

export interface IAvatar {
  id: number;
  key: string;
  type: SupportFileType;
  uploaderId: number;
  url: string;
}

export enum SupportFileType {
  png = 'png',
}

export interface IFamily {
  name: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  role: string;
  holyName: string;
  lastName: string;
}

export interface IParams {
  classId?: number;
  name?: string;
  age?: number;
  holyName?: string;
  branchName?: string;
  page?: number;
  limit?: number;
}

export interface IFilter {
  classId?: number;
  name?: string;
  holyName?: string;
  gender?: EnumGender;
  status?: StudentStatus;
}

export interface InitialState {
  dataSearch: IFilter;
  value: number;
  idDelete: number[];
  showPopup: boolean;
}

export interface ISubmitFilter {
  class?: number;
  name?: string;
  holyName?: string;
}

export interface IResponseList {
  items: IGeneral[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IDeleteParams {
  ids: number[];
}

export interface IDataForm {
  holyName: string;
  lastName: string;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  provinceId: string;
  wardId: string;
  districtId: string;
  family: IFamily[];
}

export interface ISubmitData {
  holyName: string;
  lastName: string;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
  provinceId: IProvince;
  districtId: IDistrict;
  wardId: IWard;
  fatherName: string;
  fatherBirthDate: string;
  fatherEmail: string;
  fatherHolyName: string;
  fatherLastName: string;
  fatherPhoneNumber: string;
  roleFather: FamilyRole.DAD;
  motherName: string;
  motherBirthDate: string;
  motherEmail: string;
  motherHolyName: string;
  motherLastName: string;
  motherPhoneNumber: string;
  roleMother: FamilyRole.MOM;
}

export interface IResponseListClass {
  items: IClassItem[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IClassItem {
  id: number;
  className: string;
  branchName: string;
  students: IGeneral[];
}

export interface IPropTableRow {
  row: IGeneral;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}

export type ICallback = {
  onSuccess: VoidFunction;
  onError: VoidFunction;
};

export interface IDataExportFile {
  name?: string;
  holyName?: string;
  classId?: number;
  age?: number;
  branchName?: string;
  page?: number;
  limit?: number;
}

export interface IDataChangeClass {
  branchName: string;
  classId: number;
  ids: number[];
}
