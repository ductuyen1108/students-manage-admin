export interface IAttendancePercent {
  [date: string]: string;
}

export interface IParamsAttendancePercent {
  startDate?: string;
  endDate?: string;
  branch?: string;
  page?: number;
  limit?: number;
}