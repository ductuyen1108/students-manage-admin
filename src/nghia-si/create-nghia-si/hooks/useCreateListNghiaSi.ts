import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createListNghiaSi } from 'src/nghia-si/common/service';

export const useCreateListNghiaSi = (callback: ICallback) => {
  return {
    ...useMutation(createListNghiaSi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
