import { IClass } from 'src/class/common/interface';

export interface ILesion {
  createdAt: string;
  version: number;
  id: number;
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  class: IClass;
}

export interface IResLesion {
  items: ILesion[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsLesion {
  classId?: number;
  page?: number;
  limit?: number;
}

// create
export interface IDataCreateLesion {
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  classId: number;
}

export interface ISubmitCreateLesion {
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  classId: {
    id: number;
    name: number;
  };
}

// delete
export interface IDeleteParams {
  ids: number[];
}

// edit
export interface IDataFormEditLesion {
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  classId: number;
}

export interface ISubmitDataEditLesion {
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  classId: number;
}

export interface ILesionFilter {
  classId?: number;
}

export interface InitialLesionState {
  dataSearch: ILesionFilter;
  value: number;
  idDeleteLesion: number[];
  showPopup: boolean;
}

export interface ILesionSubmitFilter {
  classId: {
    id: number;
    name: string;
  };
}

export interface IPropTableRow {
  row: ILesion;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}
