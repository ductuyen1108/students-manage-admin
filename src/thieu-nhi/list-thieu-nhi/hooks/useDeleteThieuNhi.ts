import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { deleteThieuNhi } from 'src/thieu-nhi/common/service';
import { ICallback } from 'src/common/@types/common.interface';
import { IDeleteParams } from 'src/subject/common/interface';

export function useDeleteThieuNhi(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteThieuNhi(params), {
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
    retry: 2,
  });
}
