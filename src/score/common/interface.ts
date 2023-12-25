export interface IScore {
  id: number;
  midScore: number;
  finalScore: number;
  class: {
    id: number;
    className: string;
    branchName: string;
  };
  student: {
    id: number;
    accountName: string;
    email: null;
    name: string;
    birthDate: string;
    createdAt: string;
    gender: string;
    userId: number;
    address: null;
    holyName: string;
    lastName: string;
    age: number;
    status: string;
    avatar: null;
    user: null;
  };
}

export interface IResScore {
  items: IScore[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsScore {
  classId?: number;
  page?: number;
  limit?: number;
}

export interface IDataCreateScore {
  studentId: number;
  midScore: number;
  finalScore: number;
  classId: number;
}

export interface ISubmitDataCreateScore {
  midScore: number;
  finalScore: number;
}

export interface IDataEditScore {
  studentId: number;
  midScore: number;
  finalScore: number;
  classId: number;
}

export interface ISubmitDataEditScore {
  midScore: number;
  finalScore: number;
}

export interface IDeleteParams {
  ids: number[];
}

export interface IScoreFilter {
  classId?: number;
  page?: number;
  limit?: number;
}

export interface ISubmitDataFilter {
  classId: {
    id: number;
    name: string;
  };
}

export interface InitialScoreState {
  dataSearch: IScoreFilter;
  value: number;
  idDeleteScore: number[];
  showPopup: boolean;
}

export interface IPropTableRow {
  row: IScore;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}
