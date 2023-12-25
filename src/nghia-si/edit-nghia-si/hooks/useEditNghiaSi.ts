import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { ICallback } from 'src/common/@types/common.interface';
import { editNghiaSiInActive } from 'src/nghia-si/common/service';

export const useEditNghiaSiInActive = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editNghiaSiInActive, {
      onSuccess: () => {
        queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_NGHIA_SI])
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
