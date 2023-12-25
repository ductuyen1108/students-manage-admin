import { useMutation, useQueryClient } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { createScore } from '../service'; 
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';

export const useCreateScore = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(createScore, {
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
    }),
  };
}