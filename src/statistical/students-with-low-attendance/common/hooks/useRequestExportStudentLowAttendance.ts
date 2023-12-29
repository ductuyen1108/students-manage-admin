import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { requestExportFileStudentLowAttendance } from '../service'; 

export const useRequestStudentLowAttendance = (callback: ICallback) => {
  return {
    ...useMutation(requestExportFileStudentLowAttendance, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
