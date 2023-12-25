import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { ICallback } from 'src/common/@types/common.interface';
import { editHiepSiInActive } from 'src/hiep-si/common/service';

export const useEditHiepSiInActive = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editHiepSiInActive, {
      onSuccess: () => {
        queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_HIEP_SI])
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
