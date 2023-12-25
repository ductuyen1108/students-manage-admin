import { useQueryClient, useMutation } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { ICallback } from 'src/common/@types/common.interface';
import { editThieuNhiInActive } from 'src/thieu-nhi/common/service';

export const useEditThieuNhiInActive = (callback: ICallback) => {
  const queryClient = useQueryClient();
  return {
    ...useMutation(editThieuNhiInActive, {
      onSuccess: () => {
        queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.LIST_THIEU_NHI])
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
