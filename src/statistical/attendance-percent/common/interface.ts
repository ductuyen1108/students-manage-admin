export interface IAttendancePercent {
  [date: string]: string;
}

export interface IParamsAttendancePercent {
  startDate?: string;
  endDate?: string;
  branch?: string;
}

export interface InitialNewsState {
  dataSearch: IParamsAttendancePercent;
}

export interface ISubmitFiler {
  startDate: string;
  endDate: string;
  branch: {
    id: number;
    name: string;
  };
}