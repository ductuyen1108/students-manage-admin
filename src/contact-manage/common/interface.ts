import { IResListPage } from "src/common/constants/common.interfaces"

export interface IContactRow {
  id: number,
  name: string,
  phoneNumber: string,
  email: string,
  company: string,
  message: string,
  createdAt: string,
  updatedAt: string
}

export interface IParamsListContact {
  page?: number;
  limit?: number;
  name?: string;
  phoneNumber?: string;
  email?: string;
  company?: string;
  fromDate?: string;
  toDate?: string;
}

export interface IResListContact {
  items: IContactRow[];
  meta: IResListPage;
}

export interface IPropTableRow {
  row: IContactRow;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  // onDetailRow: VoidFunction;
}

export interface IContactFilter {
  name?: string;
  phoneNumber?: string;
  email?: string;
  company?: string;
  fromDate: string | null;
  toDate: string | null;
}

export interface IDataFormContactFilter {
  name: string;
  phoneNumber?: string;
  email?: string;
  company?: string;
  fromDate: string | null;
  toDate: string | null;
}

export interface IDeleteParams {
  ids: number[];
}

export interface IDataFormEditContact {
  id: number,
  name: string,
  phoneNumber: string,
  email: string,
  company: string,
  message: string,
}

export interface IDataEditContact {
  id: number;
  name: string,
  phoneNumber: string,
  email: string,
  company: string,
  message: string,
}