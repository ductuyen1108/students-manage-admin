import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { editAuNhiInActive } from 'src/au-nhi/common/service';
import { ICallback } from 'src/common/@types/common.interface';

export const useEditAuNhiInActive = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editAuNhiInActive, {
      onSuccess: () => {
        queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_AU_NHI])
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
