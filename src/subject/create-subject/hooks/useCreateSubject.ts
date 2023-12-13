import { useMutation } from 'react-query';
import { ICallback } from 'src/subject/common/interface';
import { createSubject } from 'src/subject/common/service';

export const useCreateSubject = (callback: ICallback) => {
  return useMutation(createSubject, {
    onSuccess: () => {
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
};
