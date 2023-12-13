import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/constants/queryKeys.constant';
import { deleteNghiaSi } from 'src/nghia-si/common/service';
import { ICallback } from 'src/common/@types/common.interface';
import { IDeleteParams } from 'src/subject/common/interface';

export function useDeleteNghiaSi(callback: ICallback) {
  const queryClient = useQueryClient();
  return useMutation((params: IDeleteParams) => deleteNghiaSi(params), {
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
    retry: 2,
  });
}
