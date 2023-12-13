import { CustomFile } from 'src/common/components/upload';

export interface IDataCreate {
  priority: number;
  thumbnailId: number;
  subjectDetails: [
    {
      name: string;
      lang: 'VN' | 'EN';
    }
  ];
}

export interface ICallback {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export interface IFormCreateSubject {
  //   lang: { id: string; name: string } | null;
  id: number;
  name: string;
  priority: number;
  image: CustomFile | string;
}

export interface ISubjectParams {
  page?: number;
  limit?: number;
}

export interface ISubjectList {
  items: ISubject[];
  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface ISubject {
  id: number;
  priority: number;
  thumbnail: {
    id: number;
    url: string;
  };
  subjectDetails: ISubjectDetail[];
}

export interface ISubjectDetail {
  id: number;
  lang: string;
  name: string;
}

export interface IDeleteParams {
  ids: number[];
}

export interface InitialState {
  value: number;
  idDeleteNews: number[];
  showPopup: boolean;
}

export interface IPropTableRow {
  row: ISubject;
  selected: boolean;
  onSelectRow: (checked: boolean) => void;
  onDeleteRow: VoidFunction;
  onEditRow: VoidFunction;
}

export interface IDataEditSubject {
  id: number;
  priority: number;
  thumbnailId: number;
  subjectDetails: [
    {
      id: number,
      name: string;
      lang: 'VN' | 'EN';
    }
  ];
}
