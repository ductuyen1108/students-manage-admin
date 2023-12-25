import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createListAuNhi } from 'src/au-nhi/common/service';

export const useCreateListAuNhi = (callback: ICallback) => {
  return {
    ...useMutation(createListAuNhi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
