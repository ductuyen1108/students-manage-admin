import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { IDeleteParams, INewsCallback } from 'src/news/common/interface';
import { deleteNews } from 'src/news/common/service';

export function useDeleteNews(callback: INewsCallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteNews(params), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_NEWS])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
    retry: 2,
  });
}
