import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { ICallback, IDeleteParams } from 'src/subject/common/interface';
import { deleteSubject } from 'src/subject/common/service';

export function useDeleteSubject(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteSubject(params), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_NEWS_SUBJECT])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
}
