import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editChienNonInActive } from 'src/chien-non/common/service';
import { ICallback } from 'src/common/@types/common.interface';

export const useEditChienNonInActive = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editChienNonInActive, {
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
    }),
  };
};
