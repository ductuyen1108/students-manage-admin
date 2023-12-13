import { useMutation } from 'react-query';
import { ICallback } from 'src/news/common/interface';
import { createNews } from 'src/news/common/service';

export const useCreateNews = (callback: ICallback) => {
  return {
    ...useMutation(createNews, {
      onSuccess: () => {
        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
