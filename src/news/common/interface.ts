import { CustomFile } from '../../common/components/upload';

export enum NewsStatus {
  ACTIVE = 'ACTIVE',
  IN_ACTIVE = 'IN_ACTIVE',
}

export interface INewsSubjectDetail {
  id: number;
  lang: string;
  name: string;
}

/* export interface INewsDetail {
  author: string;
  content: string;
  lang: string;
  description: string;
  title: string;
} */

export interface INewsSubject {
  items: [
    {
      id: number;
      userId: number;
      subjectDetails: INewsSubjectDetail[];
    }
  ];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export enum Language {
  VN = 'VN',
  EN = 'EN',
}

export enum SupportFileType {
  png = 'png',
  jpg = 'jpg',
  jpeg = 'jpeg',
  pdf = 'pdf',
  mp3 = 'mp3',
  mp4 = 'mp4',
  wav = 'wav',
  xlsx = 'xlsx',
  xls = 'xls',
  csv = 'csv',
}

export type INewsCallback = {
  onSuccess: VoidFunction;
  onError: VoidFunction;
};

export interface INewsForm {
  id: number;
  title: string;
  status: NewsStatus;
  thumbnail: Image;
  subject: INewsSubjectDetail[];
  content: string;
}

export interface Image {
  id: number;
  key: string;
  type: string;
  size: number;
  url: string;
}

export interface IResNewsList {
  items: INews[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface ISubjectDetail {
  id: number;
  lang: string;
  name: string;
  landingPageSubject: string;
  createdAt: string;
}

export interface  ISubject {
  id: number;
  priority: number;
  thumbnail: {
    id: number;
    key: string;
    type: string;
    size: number;
    uploaderId: number;
    url: string;
  };
  subjectDetails: {
    id: number;
    lang: "EN" | "VN";
    name: string;
  }[];
}

export interface INews {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: IThumbnail;
  subject: ISubject[];
  newsDetails: INewsDetail[];
}

export interface INewsDetail {
  id: number;
  lang: string;
  content: string;
  description: string;
  author: string;
  title: string;
}
export interface IThumbnail {
  id: number;
  key: string;
  type: string;
  url: string;
  size: number;
}
export interface IFile {
  id: number;
  key: string;
  url: string;
  type: SupportFileType | string;
  size: number;
  uploaderId: number;
}

export interface INewsSubmitFilter {
  title?: string;
  subjects?: { id: number; name: string }[];
  fromDate?: string | null;
  toDate?: string | null;
}

export interface INewsParams {
  subjectIds?: number[];
  title?: string ;
  fromDate?: string | null;
  toDate?: string | null;
  page?: number;
  limit?: number;
}

export interface INewsFilter {
  title?: string;
  subjectIds?: number[];
  fromDate?: string | null;
  toDate?: string | null;
}

export interface InitialNewsState {
  dataSearch: INewsFilter;
  value: number;
  idDeleteNews: number[];
  showPopup: boolean;
}

export interface INewsRow {
  id: number;
  status: string;
  title: string;
  subject: INewsSubjectDetail[];
  updatedAt: string;
  file: {
    id: number;
    key: string;
    url: string;
    type: SupportFileType | string;
    size: number;
    uploaderId: number;
  };
}

export interface IPropTableRow {
  row: INews;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
  onDetailRow: VoidFunction;
}

export interface IDeleteParams {
  ids: number[];
}

export interface ISubmitData {
  id: number;
  image: CustomFile | string;
  idNewsDetails: number;
  author: string;
  content: string;
  description: string;
  title: string;
  thumbnailId: number;
  subjects: { id: number; name: string }[];
  status: { id: string; name: string };
  // lang: { id: string; name: string } | null;
}

export interface ICallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export interface IDataFormNews {
  newsDetails: INewsDetail[];
  title: string;
  thumbnailId: number;
  subjectIds: number[];
  status: string;
}

export interface IDataFormEditNews {
  id: number;
  newsDetails: INewsDetail[];
  title: string;
  thumbnailId: number;
  subjectIds: number[];
  status: string;
}

export interface IDetailNews {
  id: number;
  status: NewsStatus;
  title: string;
  ownerId: number;
  thumbnail: Image;
  newsDetails: INewsDetail[];
  subject: INewsSubjectDetail[];
}

export interface Image {
  id: number;
  key: string;
  type: string;
  size: number;
  url: string;
}

export interface IConvertDataDetail {
  id: number;
  status: NewsStatus;
  thumbnail: Image;
  title: string;
  description: string;
  content: string;
  ownerId: number;
  lang: string;
  subjectName: string[];
  author: string;
}
