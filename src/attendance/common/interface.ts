export interface IAttendance {
  student: IStudent;
  lession: ILession;
}

export interface IStudent {
  id: number;
  attended: boolean;
  student: IStudentMini;
}

export interface ILession {
  id: number;
  title: string;
  content: string;
  startTime: string;
  endTime: string;
  class: {
    id: number;
    className: string;
    branchName: string;
  };
}

export interface IStudentMini {
  id: number;
  accountName: string;
  email: string;
  name: string;
  birthDate: string;
  createdAt: string;
  gender: string;
  userId: number;
  address: string;
  holyName: string;
  lastName: string;
  age: number;
  status: string;
  avatar: string;
  user: string;
}

export interface IResAttendance {
  items: IAttendance[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface IParamsAttendance {
  name?: string;
  lessionId?: number;
  classId?: number;
  page?: number;
  limit?: number;
}

export interface IDataCreateAttendance {
  lessionId: number;
  studentIds: number[];
}

export interface IAttendanceFilter {
  name?: string;
  lessionId?: number;
  classId?: number;
  page?: number;
  limit?: number;
}

export interface InitialAttendanceState {
  dataSearch: IAttendanceFilter;
  value: number;
  idDeleteAttendance: {
    studentIds: number[];
    lessonId: number;
  };
  showPopup: boolean;
}

export interface IPropTableRow {
  row: IAttendance;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onAttendanceRow: VoidFunction;
  onDetailRow: VoidFunction;
}

export interface IAttendanceSubmitFilter {
  classId: {
    id: number;
    name: string;
  };
  lessonId: {
    id: number;
    name: string;
  };
}

export interface IDeleteParams {
  studentIds: number[];
  lessionId: number;
}
