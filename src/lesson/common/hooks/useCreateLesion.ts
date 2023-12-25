import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createLesion } from '../service'; 

export const useCreateLesion = (callback: ICallback) => {
  return {
    ...useMutation(createLesion, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
