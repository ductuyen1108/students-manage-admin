import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { deleteScoreByClassId } from '../service';
import { ICallback } from 'src/common/@types/common.interface';

export function useDeleteScoreByClassId(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((id: number) => deleteScoreByClassId(id), {
    onSuccess: () => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.GET_SCORE])
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
