import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createListChienNon } from 'src/chien-non/common/service';

export const useCreateListChienNon = (callback: ICallback) => {
  return {
    ...useMutation(createListChienNon, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
