import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editNews } from 'src/news/common/service';
import { INewsCallback } from 'src/news/common/interface';

export const useEditNews = (callback: INewsCallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editNews, {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.LIST_NEWS]);

        callback.onSuccess && callback.onSuccess();
      },
      onError: () => {
        callback.onError && callback.onError();
      },
    }),
  };
};
