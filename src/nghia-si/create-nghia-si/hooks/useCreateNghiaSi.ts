import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createNghiaSi } from 'src/nghia-si/common/service';

export const useCreateNghiaSi = (callback: ICallback) => {
  return {
    ...useMutation(createNghiaSi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
