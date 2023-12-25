import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { requestExportFile } from '../service/request-export.service'; 

export const useRequestExport = (callback: ICallback) => {
  return {
    ...useMutation(requestExportFile, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
