import { useMutation, useQueryClient } from 'react-query';
import { ICallback } from 'src/common/@types/common.interface'; 
import { QUERY_KEYS } from 'src/common/constants/queryKeys.constant';
import { createListScore } from 'src/score/common/service';

export const useCreateListScore = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(createListScore, {
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
};
