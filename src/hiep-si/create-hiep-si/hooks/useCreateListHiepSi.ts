import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createListHiepSi } from 'src/hiep-si/common/service';

export const useCreateListHiepSi = (callback: ICallback) => {
  return {
    ...useMutation(createListHiepSi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
