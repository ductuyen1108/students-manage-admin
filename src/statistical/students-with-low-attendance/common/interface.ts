export interface IStudentLowAttendance {
  student: IStudent;
  attendancePercentage: number;
}

export interface IStudent {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  version: number;
  id: number;
  accountName: string;
  address: string;
  email: string;
  holyName: string;
  lastName: string;
  name: string;
  birthDate: string;
  status: string;
  userId: number;
  gender: string;
  avatarId: number;
  provinceId: number;
  wardId: number;
  districtId: number;
  familyId: number;
  scoreId: number;
  classId: number;
  branchName: string;
  attendanceId: number;
}

export interface IParamsStudentLowAttendance {
  startDate?: string;
  endDate?: string;
  branch?: string;
}

export interface InitialNewsState {
  dataSearch: IParamsStudentLowAttendance;
}

export interface ISubmitFiler {
  startDate: string;
  endDate: string;
  branch: {
    id: number;
    name: string;
  };
}

export interface IPropTableRow {
  row: IStudentLowAttendance;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
}

export interface IRequestExport {
  startDate?: string;
  endDate?: string;
  branch?: string;
  page?: number;
  limit?: number;
}
