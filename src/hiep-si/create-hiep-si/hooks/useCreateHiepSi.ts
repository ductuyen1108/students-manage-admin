import { useMutation } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createHiepSi } from 'src/hiep-si/common/service';

export const useCreateHiepSi = (callback: ICallback) => {
  return {
    ...useMutation(createHiepSi, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
