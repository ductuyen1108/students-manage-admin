export enum StatusVerifyEmail {
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS',
  NONE = 'NONE',
}

export interface IVerifyEmail {
  statusVerifyEmail: StatusVerifyEmail;
}

export interface IVerifyEmailRes {
  email: string;
  name: string;
}
