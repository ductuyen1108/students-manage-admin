import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { requestExportFileScore } from '../service'; 

export const useRequestExportScore = (callback: ICallback) => {
  return {
    ...useMutation(requestExportFileScore, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
