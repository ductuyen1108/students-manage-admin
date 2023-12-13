import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { deleteChienNon } from 'src/chien-non/common/service';
import { ICallback } from 'src/common/@types/common.interface';
import { IDeleteParams } from 'src/subject/common/interface';

export function useDeleteChienNon(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteChienNon(params), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_CHIEN_NON])
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
