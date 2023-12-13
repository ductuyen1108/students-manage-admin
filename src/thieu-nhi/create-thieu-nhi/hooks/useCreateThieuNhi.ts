import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createThieuNhi } from 'src/thieu-nhi/common/service';

export const useCreateThieuNhi = (callback: ICallback) => {
  return {
    ...useMutation(createThieuNhi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
