import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createClass } from '../service'; 

export const useCreateClass = (callback: ICallback) => {
  return {
    ...useMutation(createClass, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
