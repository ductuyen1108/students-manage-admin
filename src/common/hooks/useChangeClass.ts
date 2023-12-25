import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { changeClass } from '../service/change-class.service';

export const useChangeClass = (callback: ICallback) => {
  return {
    ...useMutation(changeClass, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
