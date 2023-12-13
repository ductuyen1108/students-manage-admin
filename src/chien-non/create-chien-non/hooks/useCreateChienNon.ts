import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createChienNon } from 'src/chien-non/common/service';

export const useCreateChienNon = (callback: ICallback) => {
  return {
    ...useMutation(createChienNon, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
