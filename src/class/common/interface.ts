import { IGeneral } from 'src/common/@types/common.interface';

export interface IClass {
  id: number;
  className: string;
  branchName: string;
  students: IGeneral[];
}

export interface IResClass {
  items: IClass[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsClass {
  className?: string;
  branchName?: string;
  page?: number;
  limit?: number;
}

// create
export interface IDataCreateClass {
  className: string;
  branchName: string;
}

export interface ISubmitCreateClass {
  className: string;
  branchName: {
    id: string;
    name: string;
  }
}

// delete
export interface IDeleteParams {
  ids: number[];
}

// edit
export interface IDataFormEditClass {
  className: string;
  branchName: string;
}


export interface IClassFilter {
  className?: string;
  branchName?: string;
}

export interface InitialClassState {
  dataSearch: IClassFilter;
  value: number;
  idDeleteClass: number[];
  showPopup: boolean;
}

export interface IClassSubmitFilter {
  className?: string;
  branchName?: {
    id: string;
    name: string;
  };
}

export interface IPropTableRow {
  row: IClass;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}