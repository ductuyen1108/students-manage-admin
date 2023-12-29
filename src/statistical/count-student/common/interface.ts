export interface ICountStudent {
  totalStudentInAllBranch: number;
  studentInBranchAuNhi: number;
  studentInBranchThieuNhi: number;
  studentInBranchNghiaSi: number;
  studentInBranchHiepSi: number;
  studentInBranchChienNon: number;
}

export interface IClassAndCount {
  totalClasses: number;
  classInfo: IClassInfo[];
}

export interface IClassInfo {
  class: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    version: number;
    id: number;
    className: string;
    branchName: string;
  };
  totalStudents: number;
}

export interface IParamsClassAndInfo {
  branch?: string;
}

export interface InitialStatisticalState {
  dataSearch: IParamsClassAndInfo;
}

export interface ISubmitClassAndCountFilter {
  branch?: {
    id: string;
    name: string;
  };
}
