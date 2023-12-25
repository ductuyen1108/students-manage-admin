import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createListThieuNhi } from 'src/thieu-nhi/common/service';

export const useCreateListThieuNhi = (callback: ICallback) => {
  return {
    ...useMutation(createListThieuNhi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
