import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createAuNhi } from 'src/au-nhi/common/service';

export const useCreateAuNhi = (callback: ICallback) => {
  return {
    ...useMutation(createAuNhi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
